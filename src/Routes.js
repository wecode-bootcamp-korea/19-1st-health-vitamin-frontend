import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductInfo from './Pages/ProductInfoPage/ProductInfo';
import Pay from './Pages/PayPage/Pay';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/productInfo" component={ProductInfo} />
          <Route exact path="/pay" component={Pay} />
        </Switch>
      </Router>
    );
  }
}
