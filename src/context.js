// Use the Context API
// If you are using Redux only to avoid passing props down to deeply nested components, then you could replace Redux with the Context API. It is exactly intended for this use case.

import React, { Component } from 'react'
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
// Provider -> provide information for the whole app, set at the top of components (index.js)
// Consumer -> grab information in any child (don't need to pass the value down)

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello">
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
