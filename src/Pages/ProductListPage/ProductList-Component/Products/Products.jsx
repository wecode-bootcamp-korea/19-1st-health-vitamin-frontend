import React, { Component } from 'react';
import './Products.scss';
import Products_info from './Products_info/Products_info';
import Products_item from './Products_item/Products_item';
import Move_page from './Move_page/Move_page';

class Products extends Component {
  render() {
    return (
      <main className="Products">
        <Products_info />
        <div className="product_items">
          <Products_item />
          <Products_item />
          <Products_item />
          <Products_item />
          <Products_item />
          <Products_item />
          <Products_item />
          <Products_item />
          <Products_item />
          <Products_item />
          <Products_item />
          <Products_item />
        </div>
        <Move_page />
      </main>
    );
  }
}
export default Products;
