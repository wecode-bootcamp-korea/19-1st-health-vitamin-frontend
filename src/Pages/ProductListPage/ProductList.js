import React, { Component } from 'react';
import '../../styles/reset.scss';
import Title from './PL-Component/Title/Title';
import Products from './PL-Component/ProductList/Products'


import './ProductList.scss';


class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        <div className="kategori"><i class="fas fa-home"></i><span>{'>'}</span><span>PRODUCTS</span></div>
          <Title />
          <Products />
        <footer></footer>
      </div>
    );
  }
}

export default ProductList;