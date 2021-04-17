import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './Pages/ProductListPage/ProductList';
// import RecommendList from './Pages/ProductListPage/Recommend/Recommend';
// import VitaminList from './Pages/ProductListPage/Vitamin/Vitamin';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/product-list" component={ProductList} />
          {/* <Route exact path="/product/list/recommend" component={RecommendList} />
          <Route exact path="/product/list/vitamin" component={VitaminList} /> */}
        </Switch>
      </Router>
    );
  }
}
