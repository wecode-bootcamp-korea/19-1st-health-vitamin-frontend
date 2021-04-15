import React, { Component } from 'react';
import '../../../styles/reset.scss';
import Title from '../ProductList-Component/Title/Title';
import Products from '../ProductList-Component/Products/Products';

class VitaminList extends Component {
  render() {
    return (
      <div className="productList">
        <div className="kategori">
          <i class="fas fa-home"></i>
          <span>{'>'}</span>
          <span>Vitamin</span>
        </div>
        <Title />
        <Products />
        <footer></footer>
      </div>
    );
  }
}

export default VitaminList;
