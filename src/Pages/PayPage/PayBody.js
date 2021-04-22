import React, { Component } from 'react';
import PayDelivery from './PayBody/PayDelivery';
import PayOrder from './PayBody/PayOrder';
import PayDiscount from './PayBody/PayDiscount';
import PayInfo from './PayBody/PayInfo';
import PayWay from './PayBody/PayWay';
import PayBenefit from './PayBody/PayBenefit';
import './PayBody.scss';

export default class PayBody extends Component {
  render() {
    const {
      productList,
      shippingFee,
      name,
      address,
      subAddress,
      phone_number,
      email,
      changeValue,
    } = this.props;
    return (
      <>
        {this.props.type === 'delivery' && (
          <PayDelivery
            name={name}
            address={address}
            subAddress={subAddress}
            phone_number={phone_number}
            email={email}
            changeValue={changeValue}
          />
        )}
        {this.props.type === 'order' && (
          <PayOrder productList={productList} shippingFee={shippingFee} />
        )}
        {this.props.type === 'discount' && <PayDiscount />}
        {this.props.type === 'info' && <PayInfo />}
        {this.props.type === 'way' && <PayWay />}
        {this.props.type === 'benefit' && <PayBenefit />}
      </>
    );
  }
}
