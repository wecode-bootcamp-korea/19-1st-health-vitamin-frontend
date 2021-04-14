import React, { Component } from 'react';
import './Products_item.scss';

class Products_item extends Component {
  render() {
    return (
      <div className="product_item">
        <a href="#">
          <img
            className="item_img"
            src="http://duftndoft.com/web/product/medium/202102/4425237309124ad16528c02c7deecec9.jpg"
            alt="vitamin"
          />
        </a>
        <a href="#">
          <div className="item_title info">소피소피 너리싱 핸드크림 50ml</div>
        </a>
        <a href="#">
          <div className="info_icon">
            <i class="fab fa-elementor"></i>
            <i class="fas fa-search"></i>
          </div>
        </a>
        <div className="item_price info">{9800}원</div>
        <div className="item_discount info">
          {7900}원<span className="discount_per">{28}할인</span>
        </div>
      </div>
    );
  }
}

export default Products_item;
