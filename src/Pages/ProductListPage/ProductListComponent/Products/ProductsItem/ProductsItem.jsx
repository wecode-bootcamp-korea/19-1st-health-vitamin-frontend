import React, { Component } from 'react';
import './ProductsItem.scss';

class ProductsItem extends Component {
  render() {
    const { id, image, name, price, discount } = this.props.product;
    return (
      <div className="product_item">
        <a href="#">
          <img className="item_img" src={image} alt="vitamin" />
        </a>
        <a href="#">
          <div className="item_title info">{name}</div>
        </a>
        <a href="#">
          <div className="info_icon">
            <i class="fab fa-elementor"></i>
            <i class="fas fa-search"></i>
          </div>
        </a>
        <div className="item_price info">{price}원</div>
        <div className="item_discount info">
          {discount}원<span className="discount_per">{28}할인</span>
        </div>
      </div>
    );
  }
}

export default ProductsItem;
