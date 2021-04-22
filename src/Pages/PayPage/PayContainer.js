import React, { Component } from 'react';
import PayBody from './PayBody';
import PayHeader from './PayHeader';
import './PayContainer.scss';

export default class PayContainer extends Component {
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
      <div>
        <PayHeader
          isDiplay={this.state.isDiplay}
          type={this.props.type}
          changeIsDiplay={this.changeIsDiplay}
        />
        {this.state.isDiplay && (
          <PayBody
            type={this.props.type}
            productList={productList}
            shippingFee={shippingFee}
            name={name}
            address={address}
            subAddress={subAddress}
            phone_number={phone_number}
            email={email}
            changeValue={changeValue}
          />
        )}
      </div>
    );
  }
}
