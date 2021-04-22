import React, { Component } from 'react';
import PayDelivery from './PayBody/PayDelivery';
import PayOrder from './PayBody/PayOrder';
import PayDiscount from './PayBody/PayDiscount';
import PayInfo from './PayBody/PayInfo';
import PayWay from './PayBody/PayWay';
import PayBenefit from './PayBody/PayBenefit';
import './PayBody.scss';

export default class PayBody extends Component {
  componentDidMount() {
    // fetch('http://localhost:8000/orders')
    fetch('/data/Pay/PayData.json')
      .then(res => res.json())
      .then(data => {});
  }
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
