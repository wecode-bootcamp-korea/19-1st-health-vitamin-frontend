import React, { Component } from 'react';
import ProductInfoHeader from './ProductInfoHeader';
import ProductDetail from './ProductDetail';
import './ProductInfo.scss';

export default class ProductInfo extends Component {
  render() {
    return (
      <div className="productInfoContainer">
        <ProductInfoHeader />
        <div className="innerContainer">
          <ProductDetail />
        </div>
      </div>
    );
  }
}
