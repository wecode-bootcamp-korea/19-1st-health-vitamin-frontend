import React, { Component } from 'react';
import Title from './ProductListComponent/Title/Title';
import Products from './ProductListComponent/Products/Products';
import './ProductList.scss';
import { clearConfigCache } from 'prettier';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      ProductList: [],
      categoryList: [],
    };
  }
  componentDidMount() {
    // ⭐️ Back 통신 (삭제 X)
    // fetch('http://10.167.105.46:8000/products/9')
    // fetch('/data/ProductList/productList.json')
    fetch('/data/Category/category.json')
      .then(res => res.json())
      .then(data => {
        // ⭐️ Back 통신 (삭제 X)
        // console.log(data);
        // this.setState({ ProductList: data.product });
        // this.setState({ ProductList: data });
        this.setState({
          categoryList: data,
        });
      });
    fetch('/data/ProductList/productList.json')
      .then(res => res.json())
      .then(data => {
        // ⭐️ Back 통신 (삭제 X)
        // console.log(data);
        // this.setState({ ProductList: data.product });
        this.setState({ ProductList: data });
        // this.setState({
        //   categoryList: data,
        // });
      });
  }
  render() {
    const { ProductList, categoryList } = this.state;
    console.log(categoryList);
    return (
      <div className="productList">
        {categoryList[0] && <Title categoryList={categoryList[0]} />}
        <Products prList={ProductList} />
        <footer></footer>
      </div>
    );
  }
}

export default ProductList;
