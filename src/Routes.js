import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Basket from './Pages/Basket/Basket';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/basket" component={Basket} />
          {/* <Route exact path="/login-jongho" component={LoginJongho} />
          <Route exact path="/main-jongho" component={MainJongho} /> */}
        </Switch>
      </Router>
    );
  }
}
