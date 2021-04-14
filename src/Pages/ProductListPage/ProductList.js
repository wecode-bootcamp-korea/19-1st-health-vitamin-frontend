import React, { Component } from 'react';
import '../../styles/reset.scss';

import Title from './ProductList-Component/Title/Title';
import Products from './ProductList-Component/Products/Products';

import './ProductList.scss';

class ProductList extends Component {
  render() {
    return (
      <div className="productList">
        <div className="kategori">
          <i class="fas fa-home"></i>
          <span>{'>'}</span>
          <span>PRODUCTS</span>
        </div>
        <Title />
        <Products />
        <footer></footer>
      </div>
    );
  }
}

export default ProductList;
