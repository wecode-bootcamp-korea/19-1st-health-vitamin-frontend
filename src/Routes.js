import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/AccountPage/SignUp';
import Login from './Pages/AccountPage/Login';
import FavoriteProduct from './Pages/FavoriteProduct/FavoriteProduct';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/favoriteproduct" component={FavoriteProduct} />
        </Switch>
      </Router>
    );
  }
}
