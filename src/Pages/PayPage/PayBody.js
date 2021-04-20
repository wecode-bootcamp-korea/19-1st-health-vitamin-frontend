import React, { Component } from 'react';
import PayBenefit from './PayBody/PayBenefit';
import './PayBody.scss';
import PayDelivery from './PayBody/PayDelivery';
import PayDiscount from './PayBody/PayDiscount';
import PayInfo from './PayBody/PayInfo';
import PayOrder from './PayBody/PayOrder';
import PayWay from './PayBody/PayWay';

export default class PayBody extends Component {
  render() {
    return (
      <>
        {this.props.type === 'delivery' && <PayDelivery />}
        {this.props.type === 'order' && <PayOrder />}
        {this.props.type === 'discount' && <PayDiscount />}
        {this.props.type === 'info' && <PayInfo />}
        {this.props.type === 'way' && <PayWay />}
        {this.props.type === 'benefit' && <PayBenefit />}
      </>
    );
  }
}
