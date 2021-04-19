import React, { Component } from 'react';

class ItemHide extends Component {
  render() {
    const { price, discount } = this.props;
    return (
      <div className="item_discount info">
        {(price - price * 0.01 * discount).toLocaleString('en-US')}원
        <span className="discount_per">({discount}%)할인</span>
      </div>
    );
  }
}

export default ItemHide;
