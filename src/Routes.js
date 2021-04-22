import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/AccountPage/SignUp';
import Login from './Pages/AccountPage/Login';
import Nav from './Pages/Nav/Nav';
import FavoriteProduct from './Pages/FavoriteProduct/FavoriteProduct';
import ProductDetail from './Pages/ProductInfoPage/ProductDetail';
import Pay from './Pages/PayPage/Pay';
import ProductInfoHeader from './Pages/ProductInfoPage/ProductInfoHeader';
import ProductList from './Pages/ProductListPage/ProductList';
// import RecommendList from './Pages/ProductListPage/Recommend/Recommend';
// import VitaminList from './Pages/ProductListPage/Vitamin/Vitamin';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        {/* {window.location.pathname !== '/' && <ProductInfoHeader />} */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/favoriteproduct" component={FavoriteProduct} />
          <Route exact path="/product-list" component={ProductList} />
          <Route exact path="/pay" component={Pay} />
          <Route exact path="/productInfo" component={ProductDetail} />
          <Route exact path="/nav" component={Nav} />

          {/* <Route exact path="/product/list/recommend" component={RecommendList} />
          <Route exact path="/product/list/vitamin" component={VitaminList} /> */}
        </Switch>
      </Router>
    );
  }
}
