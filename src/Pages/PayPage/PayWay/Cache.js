import React, { Component } from 'react';
import './Cache.scss';

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
    console.log(this.state.isReceiept);
    return (
      <>
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

        <ul className="phoneDesc">
          <li className="desc">
            - 소액 결제의 경우 PG사 정책에 따라 결제 금액 제한이 있을 수
            있습니다.
          </li>
        </ul>
      </>
    );
  }
}
