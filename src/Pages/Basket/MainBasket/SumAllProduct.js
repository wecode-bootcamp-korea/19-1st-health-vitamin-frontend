import React, { Component } from 'react';

class SumAllProduct extends Component {
  render() {
    const { price, dilivery, discount } = this.props;
    return (
      <div className="delivery_box">
        <div className="delivery_type">[기본배송]</div>
        <div className="delivery_sum">
          {`상품구매금액 ${1} + 배송비 ${1} - 상품할인금액 ${1} = 합계:`}
          {}
          {1} 원
        </div>
      </div>
    );
  }
}

export default SumAllProduct;
