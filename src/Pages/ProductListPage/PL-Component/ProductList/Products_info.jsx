import React, { Component } from 'react';

class Products_info extends Component {
  render() {
    return (
      <div className="Products_info">
        <div className="P_count"><span className="num">20</span> ITEMS</div>
        <div className="P_filters">
          <button>신상품</button>
          <button>상품명</button>
          <button>낮은 가격</button>
          <button>높은 가격</button>
        </div>
      </div>
    );
  }
}

export default Products_info;