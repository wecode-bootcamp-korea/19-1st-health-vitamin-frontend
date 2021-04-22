import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Basket from './Pages/Basket/Basket';
import SignUp from './Pages/AccountPage/SignUp';
import Login from './Pages/AccountPage/Login';
import ProductDetail from './Pages/ProductInfoPage/ProductDetail';
import ProductInfoHeader from './Pages/ProductInfoPage/ProductInfoHeader';
import ProductList from './Pages/ProductListPage/ProductList';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        {window.location.pathname !== '/' && <ProductInfoHeader />}
        <Switch>
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product-list" component={ProductList} />
          <Route exact path="/productInfo" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}
