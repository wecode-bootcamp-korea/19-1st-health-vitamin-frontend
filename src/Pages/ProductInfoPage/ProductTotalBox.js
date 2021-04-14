import React, { Component } from 'react';
import './ProductTotalBox.scss';

export default class ProductTotalBox extends Component {
  render() {
    return (
      <div className="productTotalBox">
        <div className="box">
          <span className="description">총 상품금액(수량)&nbsp;</span>
          <span className="price">
            {this.props.totalPrice.toLocaleString()}원
          </span>
          <span className="count">(1개)</span>
        </div>
      </div>
    );
  }
}
