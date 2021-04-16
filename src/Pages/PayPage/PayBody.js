import React, { Component } from 'react';
import './PayBody.scss';
import PayDelivery from './PayDelivery';
import PayDiscount from './PayDiscount';
import PayInfo from './PayInfo';
import PayOrder from './PayOrder';

export default class PayBody extends Component {
  render() {
    return (
      <>
        {this.props.type === 'delivery' && <PayDelivery />}
        {this.props.type === 'order' && <PayOrder />}
        {this.props.type === 'discount' && <PayDiscount />}
        {this.props.type === 'info' && <PayInfo />}
      </>
    );
  }
}
