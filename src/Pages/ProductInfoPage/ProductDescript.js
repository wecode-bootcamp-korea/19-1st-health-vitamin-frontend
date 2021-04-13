import React, { Component } from 'react';
import './ProductDescript.scss';

export default class ProductDescript extends Component {
  render() {
    return (
      <div className="productDescript">
        <h2>[샤워볼 증정]퍼퓸드 바디워시 500ml(3종 택1)</h2>
        <p className="price">10,900</p>
        <div className="discountBox">
          <span className="discountTitle flexT">할인 판매가</span>
          <span className="discountValue flexC">
            <span className="discountPrice">7,900원</span>
            <span className="discountOption">&nbsp;(3,000원 할인)</span>
          </span>
        </div>
        <div className="deliveryBox">
          <span className="deliveryTitle flexT">배송비</span>
          <span className="deliveryContent flexC">
            <span className="deliveryPrice">2,500원&nbsp;</span>
            <span className="deliveryOptioin">
              (20,000원 이상 구매 시 무료)
            </span>
          </span>
        </div>
      </div>
    );
  }
}
