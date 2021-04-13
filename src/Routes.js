import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductInfo from './Pages/ProductInfoPage/ProductInfo';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ProductInfo} />
        </Switch>
      </Router>
    );
  }
}
