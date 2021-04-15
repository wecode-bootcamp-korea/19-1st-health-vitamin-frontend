import React, { Component } from 'react';
import SafeNumberService from './SafeNumberService';
import './ShippingDestination';
import UserData from './UserData';

export default class ShippingDestination extends Component {
  constructor() {
    super();

    this.state = {
      isDiplay: false,
    };
  }

  changeIsDiplay = () => {
    this.setState({
      isDiplay: !this.state.isDiplay,
    });
  };
  render() {
    return (
      <div class="shippingDestination">
        <UserData
          isDiplay={this.state.isDiplay}
          changeIsDiplay={this.changeIsDiplay}
        />
        <SafeNumberService isDiplay={this.state.isDiplay} />
      </div>
    );
  }
}
