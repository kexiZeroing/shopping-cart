import React, { Component } from 'react'
import Title from "./Title";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              {/* not pass as props, use a function to get the data in Consumer */}
              <ProductConsumer>
                {val => {
                  return val.products.map(product => {
                    return <Product key={product.id} product={product} />
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
