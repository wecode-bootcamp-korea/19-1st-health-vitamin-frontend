import React, { Component } from 'react';
import ProductInfoHeader from './ProductInfoHeader';

import '../../styles/reset.scss';
import '../../styles/common.scss';
import './ProductInfo.scss';
import ProductDetail from './ProductDetail';

export default class ProductInfo extends Component {
  render() {
    return (
      <div className="productInfoContainer">
        <div className="innerContainer">
          <ProductInfoHeader />
          <ProductDetail />
        </div>
      </div>
    );
  }
}
