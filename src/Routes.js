import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './Pages/ProductInfoPage/ProductDetail';

import ProductInfoHeader from './Pages/ProductInfoPage/ProductInfoHeader';
import ProductList from './Pages/ProductListPage/ProductList';
// import RecommendList from './Pages/ProductListPage/Recommend/Recommend';
// import VitaminList from './Pages/ProductListPage/Vitamin/Vitamin';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        {window.location.pathname !== '/' && <ProductInfoHeader />}
        <Switch>
          <Route exact path="/product-list" component={ProductList} />
          <Route exact path="/productInfo" component={ProductDetail} />

          {/* <Route exact path="/product/list/recommend" component={RecommendList} />
          <Route exact path="/product/list/vitamin" component={VitaminList} /> */}
        </Switch>
      </Router>
    );
  }
}
