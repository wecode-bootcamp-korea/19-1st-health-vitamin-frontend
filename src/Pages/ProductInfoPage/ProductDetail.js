import React, { Component } from 'react';
import ProductSub from './ProductSub';
import ProductCountBox from './ProductCountBox';
import ProductTotalBox from './ProductTotalBox';
import ProductInfoButtonBox from './ProductInfoButtonBox';
import ProductImageBox from './ProductImageBox';
import ProductDescript from './ProductDescript';
import './ProductDetail.scss';

export default class ProductDetail extends Component {
  render() {
    return (
      <div className="productDetail">
        <div className="imageBox">
          <img
            className="productImage"
            src="//duftndoft.com/web/product/big/202104/9fd50669ade4e9238e19272e8901b3b2.jpg"
            alt="main"
          ></img>

          <ProductImageBox />
          <div className="expandImageBox">
            <i class="fas fa-search"></i>&nbsp;
            <span className="expandImageSpan">확대보기</span>
          </div>
        </div>
        <div className="infoBox">
          <ProductDescript />
          <p className="guideArea">(최소주문수량 1개 이상)</p>
          <ProductSub />
          <p className="alertCount">
            <span className="alertCountSpan">!</span>
            &nbsp;&nbsp;수량을 선택해주세요.
          </p>
          <ProductCountBox />
          <ProductTotalBox />
          <ProductInfoButtonBox />
        </div>
      </div>
    );
  }
}
