import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ProductList from './Pages/ProductListPage/ProductList';
// import VitaminList from './Pages/'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/ProductList" component={ProductList} />
          {/* <Route exact path="/VitaminList"  component={VitaminList}> */}
        </Switch>
      </Router>
    );
  }
}
