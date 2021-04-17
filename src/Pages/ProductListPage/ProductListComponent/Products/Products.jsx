import React, { Component } from 'react';
import ProductsInfo from './ProductsInfo/ProductsInfo';
import ProductsItem from './ProductsItem/ProductsItem';
import MovePage from './MovePage/MovePage';
import './Products.scss';

class Products extends Component {
  render() {
    return (
      <main className="Products">
        <ProductsInfo prList={this.props.prList} />
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
