import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/AccountPage/SignUp';
import Login from './Pages/AccountPage/Login';
import Learn from './Pages/AccountPage/Learn';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/learn" component={Learn} />
        </Switch>
      </Router>
    );
  }
}
