import React, { Component } from 'react';
import ItemHide from './ItemHide';
import './ProductsItem.scss';

class ProductsItem extends Component {
  // noDiscount = () => {};
  render() {
    const { image, name, price, discount } = this.props.product;
    return (
      <div className="product_item">
        <a href="/">
          <img className="item_img" src={image} alt="vitamin" />
        </a>
        <a href="/">
          <div className="item_title info">{name}</div>
        </a>
        <a href="/">
          <div className="info_icon">
            <i class="fab fa-elementor"></i>
            <i class="fas fa-search"></i>
          </div>
        </a>
        <div
          // onChange={noDiscount}
          className={
            discount === 0 ? 'info item_price_noDiscount' : 'info item_price'
          }
        >
          {price.toLocaleString('en-US')}원
        </div>

        {discount !== 0 && <ItemHide price={price} discount={discount} />}
      </div>
    );
  }
}

export default ProductsItem;
