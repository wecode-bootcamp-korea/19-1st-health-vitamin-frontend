import React, { Component } from 'react';
import './PayOrder.scss';

export default class PayOrder extends Component {
  render() {
    return (
      <div className="payOrder">
        <div className="productList">
          <div className="product">
            <img
              className="productImage"
              src="//duftndoft.com/web/product/tiny/202102/992825dbf75af2316128ff7286218a05.jpg"
              alt="productImage"
            />
            <div className="productDescription">
              <p className="name">너리싱 핸드크림 50ml(8종 택1)</p>
              <p className="option">
                [옵션: <span className="optionValue">베이비소피</span>]
              </p>
              <p className="count">
                수량: <span className="countValue">1개</span>
              </p>
              <p className="price">
                상품구매금액: <span className="priceValue">9,800</span>원
              </p>
              <p className="discount">
                할인금액: <span className="discountValue">-1,900원</span>{' '}
              </p>
              <p className="delivery">
                [무료] / <span className="deliveryValue">기본배송</span>
              </p>
            </div>
            <button className="productDelBtn">X</button>
          </div>
        </div>
      </div>
    );
  }
}
