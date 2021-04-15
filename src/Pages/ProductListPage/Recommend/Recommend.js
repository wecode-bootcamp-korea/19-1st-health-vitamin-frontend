import React, { Component } from 'react';
import '../../../styles/reset.scss';
import Title from '../ProductList-Component/Title/Title';
import Products from '../ProductList-Component/Products/Products';

class RecommendList extends Component {
  render() {
    const { ProductList } = this.state;
    return (
      <div className="productList">
        <div className="kategori">
          <i class="fas fa-home"></i>
          <span>></span>
          <span></span>
        </div>
        <Title />
        <Products />
        <footer></footer>
      </div>
    );
  }
}
export default RecommendList;
