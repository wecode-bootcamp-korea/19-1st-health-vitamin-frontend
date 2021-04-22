import React, { Component } from 'react';
import './Best.scss';

export default class Best extends Component {
  render() {
    return (
      <div className="best">
        <div className="header">
          <h1>BEST</h1>
          <p>지금 가장 잘나가는 상품을 만나보세요</p>
        </div>
        <div className="productList">
          <div className="product">
            <img
              className="productImage"
              src="//duftndoft.com/web/product/medium/202104/22ba66e491e3b7d17887529aa11a4e49.jpg"
              alt="product"
            />
            <p className="name">
              포밍 핸드워시+리필2개(선택) <i className="fas fa-search"></i>
            </p>
            <p className="price">10,900원</p>
            <p className="result">
              <span className="applyPrice">7,900원</span>
              <span className="discount">(28%)할인</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
