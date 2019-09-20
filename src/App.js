import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
/* Cart is the folder
  option 1: import the specific file "./components/Cart/Cart.js";
  option 2: could have an index.js in Cart folder (Webpack detects)
  option 3: have an package.json in Cart folder to set 'main' file
*/
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Default from "./components/Default";

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
    </React.Fragment>
  );
}

export default App;
