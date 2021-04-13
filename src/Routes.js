import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SignUp from './Pages/AccountPage/SignUp';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <SignUp/>
        </Switch>
      </Router>
    )
  }
}
