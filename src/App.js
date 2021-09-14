import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/Cart" component={Cart} />
      <Route path="/ProductList" component={ProductList} />
      <Route path="/Product" component={Product} />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      <Route exact path="/" component={Home} />
    </Router>
  );
};

export default App;
