import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Basket from './Pages/Basket/Basket';
import SignUp from './Pages/AccountPage/SignUp';
import Login from './Pages/AccountPage/Login';
import Nav from './Pages/Nav/Nav';
import FavoriteProduct from './Pages/FavoriteProduct/FavoriteProduct';
import ProductDetail from './Pages/ProductInfoPage/ProductDetail';
import Pay from './Pages/PayPage/Pay';
import ProductInfoHeader from './Pages/ProductInfoPage/ProductInfoHeader';
import ProductList from './Pages/ProductListPage/ProductList';
import Main from './Pages/MainPage/Main';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        {window.location.pathname !== '/' && <ProductInfoHeader />}
        <Switch>
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/favoriteproduct" component={FavoriteProduct} />
          <Route exact path="/product-list" component={ProductList} />
          <Route exact path="/pay" component={Pay} />
          <Route exact path="/productInfo" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}
