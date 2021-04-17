import React, { Component } from 'react';
import MainBasket from './MainBasket/MainBasket';
import './Basket.scss';

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
    };
  }

  componentDidMount() {
    fetch('/Basket/basket.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ orderList: data });
      });
  }
  render() {
    const { orderList } = this.state;
    return (
      <div className="basket_page_body">
        <div className="basket_page">
          <div className="title">장바구니</div>
          <div className="member_discount">할인 정보</div>
          <div className="basket">
            <div className="area">
              <div className="korea">국내배송상품 ({orderList.length})</div>
              <div className="abroad">해외배송상품 (0)</div>
            </div>
            <MainBasket odList={orderList} />
            <div className="btns">
              <div className="order_btns">
                <button>전체상품주문</button>
                <button>선택상품주문</button>
              </div>
              <button className="keep_shopping">쇼핑계속하기</button>
            </div>
          </div>
          <div className="announce">이용안내</div>
        </div>
      </div>
    );
  }
}

export default Basket;
