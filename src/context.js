// Use the Context API
// If you are using Redux only to avoid passing props down to deeply nested components, then you could replace Redux with the Context API. It is exactly intended for this use case.

import React, { Component } from 'react'
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
// Provider -> provide information for the whole app, set at the top of components (index.js)
// Consumer -> grab information in any child (don't need to pass the value down)

class ProductProvider extends Component {
  state = {
    // `products: storeProducts` has reference issue (pass object). `storeProducts` will also be changed when call setState
    products: [],
    detailProduct: detailProduct
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

  handleDetail = id => {

  }

  addToCart = id => {

  }
  
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
