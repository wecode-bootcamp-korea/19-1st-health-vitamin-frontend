import React, { Component } from 'react';
import './Products.scss';
import ProductsInfo from './ProductsInfo/ProductsInfo';
import ProductsItem from './ProductsItem/ProductsItem';
import MovePage from './MovePage/MovePage';
class Products extends Component {
  render() {
    console.log(this.props.prList);
    return (
      <main className="Products">
        <ProductsInfo />
        <div className="product_items">
          {this.props.prList.map(el => {
            return <ProductsItem product={el} />;
          })}
        </div>
        <MovePage />
      </main>
    );
  }
}
export default Products;
