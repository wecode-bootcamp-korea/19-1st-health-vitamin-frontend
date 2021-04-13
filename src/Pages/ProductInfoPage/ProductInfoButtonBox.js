import React, { Component } from 'react';
import './ProductInfoButtonBox.scss';

export default class ProductInfoButtonBox extends Component {
  render() {
    return (
      <div className="productInfoButtonBox">
        <button className="btnBuy btn">바로 구매하기</button>
        <button className="btnBasket btn">장바구니</button>
        <button className="btnInterest btn">관심상품</button>
      </div>
    );
  }
}
