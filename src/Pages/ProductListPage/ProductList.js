import React, { Component } from 'react';
import Title from './ProductListComponent/Title/Title';
import Products from './ProductListComponent/Products/Products';
import '../../styles/reset.scss';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      ProductList: [],
    };
  }
  componentDidMount() {
    fetch('data/ProductList/productList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ ProductList: data });
      });
  }
  render() {
    const { ProductList } = this.state;
    return (
      <div className="productList">
        <div className="categori">
          <i className="fas fa-home"></i>
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
          <span>PRODUCTS</span>
        </div>
        <Title />
        <Products prList={ProductList} />
        <footer></footer>
      </div>
    );
  }
}

export default ProductList;
