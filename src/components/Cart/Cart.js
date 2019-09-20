import React, { Component } from 'react'
import { ProductConsumer } from "../../context"
import Title from "../Title"
import EmptyCart from "./EmptyCart"
import CartColumns from "./CartColumns"
import CartList from "./CartList"
import CartTotals from "./CartTotals"

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value
            if (cart.length) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  {/* history is from react router */}
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              )
            } else {
              return <EmptyCart />
            }
          }}
        </ProductConsumer>
      </section>  
    )
  }
}
