import React, { Component } from 'react';
import Title from './ProductListComponent/Title/Title';
import Products from './ProductListComponent/Products/Products';
import './ProductList.scss';
import { isTruthyObj } from '../../utils/function';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      ProductList: [],
      categoryData: {},
    };
  }

  componentDidMount() {
    fetch('/data/Category/category.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryData: data[0],
        });
      });
    fetch('/data/ProductList/productList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ ProductList: data });
      });
  }

  render() {
    const { ProductList, categoryData } = this.state;

    return (
      <div className="productList">
        {isTruthyObj(categoryData) && <Title categoryData={categoryData} />}
        <Products prList={ProductList} />
        <footer></footer>
      </div>
    );
  }
}

export default ProductList;
