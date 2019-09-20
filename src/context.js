// Use the Context API
// If you are using Redux only to avoid passing props down to deeply nested components, then you could replace Redux with the Context API. It is exactly intended for this use case.

import React, { Component } from 'react'
import { storeProducts } from "./data";
const ProductContext = React.createContext();
// Provider -> provide information for the whole app, set at the top of components (index.js)
// Consumer -> grab information in any child (don't need to pass the value down)

class ProductProvider extends Component {
  state = {
    // `products: storeProducts` has reference issue (pass object). `storeProducts` will also be changed when call setState
    products: [],
    detailProduct: {},
    cart: [],
    modalOpen: false
  }

  // get data here
  componentDidMount() {
    this.setProducts()
  }
  
  // make a copy and add to the list
  setProducts = () => {
    let products = []
    storeProducts.forEach(item => {
      const singleItem = {...item}
      products = [...products, singleItem]
    })

    this.setState(() => {
      return { products }
    })
  }
  
  getItem = id => {
    return this.state.products.find(item => item.id === id)
  }

  handleDetail = id => {
    const product = this.getItem(id)
    this.setState(() => {
      return { detailProduct: product }
    })
  }

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find(item => item.id === id)    
    product.inCart = true
    product.count = 1
    product.total = product.price

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product]
      }
    })
  }

  openModal = id => {
    const product = this.getItem(id)
    this.setState(() => {
      return { modalProduct: product, modalOpen: true }
    })
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }
  
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
