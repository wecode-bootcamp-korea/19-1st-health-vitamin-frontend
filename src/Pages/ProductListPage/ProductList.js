import React, { Component } from 'react';
import Title from './ProductListComponent/Title/Title';
import Products from './ProductListComponent/Products/Products';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      ProductList: [],
    };
  }
  componentDidMount() {
    // ⭐️ Back 통신 (삭제 X)
    // fetch('http://10.167.105.46:8000/products/9')
    fetch('/data/ProductList/productList.json')
      .then(res => res.json())
      .then(data => {
        // ⭐️ Back 통신 (삭제 X)
        // console.log(data);
        // this.setState({ ProductList: data.product });
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
