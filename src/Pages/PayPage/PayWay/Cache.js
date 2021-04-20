import React, { Component } from 'react';
import './Cache.scss';
import SignReceipt from './SignReceipt';

export default class Cache extends Component {
  constructor() {
    super();
    this.state = {
      isReceiept: false,
    };
  }
  onClick = e => {
    if (e.target.id === 'cacheReceipt') {
      this.setState({
        isReceiept: true,
      });
    } else {
      this.setState({
        isReceiept: false,
      });
    }
  };

  render() {
    return (
      <div className="cacheBox">
        <p className="cache">현금영수증</p>
        <input
          type="radio"
          id="cacheReceipt"
          name="test"
          onClick={this.onClick}
        />
        <label htmlFor="cacheReceipt" className="cacheReceiptLabel">
          현금영수증 신청
        </label>

        <input
          type="radio"
          id="cacheReceiptNot"
          name="test"
          onClick={this.onClick}
          defaultChecked
        />
        <label htmlFor="cacheReceiptNot">신청안함</label>

        {this.state.isReceiept && <SignReceipt />}
      </div>
    );
  }
}
