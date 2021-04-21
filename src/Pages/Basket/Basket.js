import React, { Component } from 'react';
import MainBasket from './MainBasket/MainBasket';
import '../../styles/reset.scss';
import './Basket.scss';

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
    };
  }

  //[장바구니] (서버 -> 장바구니) Item 가져오기
  componentDidMount() {
    // fetch('http://localhost:8000/carts')
    fetch('/Basket/basket.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ orderList: data });
      });
  }

  // [장바구니](장바구니 -> 서버) 장바구니 담은 상품 전달하기
  giveItemList = () => {
    // console.log('click');
    this.props.history.push('/');
    let newOrderList = this.state.orderList.map(order => {
      return {
        product_id: order.id,
        count: order.count,
      };
    });
    // console.log(newOrderList);
    // fetch('http://localhost:8000/carts), {
    fetch('http://10.5.30.109:8000/products/basket', {
      method: 'POST',
      body: {
        orderList: newOrderList,
      },
    })
      .then(res => res.json())
      .then(data => {
        // { MESSAGE: SUCCESS }
        console.log(data);
      });
  };

  deleteBasketItem = cool => {
    // cool 이란 어떤 객체인지 구분해 주는 특정 데이터이다. ex) id
    let { orderList } = this.state;
    this.setState({
      orderList: orderList.filter(order => {
        console.log('order');
        console.log(order);

        if (order.id === cool) {
          return;
        }
        return order;
      }),
    });
  };

  changeCount = (id, count) => {
    if (count === 0) return;

    let { orderList } = this.state;

    const newOrderList = orderList.filter(order => {
      if (order.id === id) {
        order.count = count;
      }
      return order;
    });

    this.setState({
      orderList: newOrderList,
    });
  };

  goToMain = () => {
    this.props.history.push('/product-list');
  };

  render() {
    const { orderList } = this.state;
    return (
      <div className="basket_page_body">
        <div className="basket_page">
          <div className="title">장바구니</div>
          <div className="basket">
            <div className="area">
              <div className="where domastic">
                국내배송상품 ({orderList.length})
              </div>
              <div className="where abroad">해외배송상품 (0)</div>
            </div>
            <MainBasket
              odList={orderList}
              changeCount={this.changeCount}
              deleteBasketItem={this.deleteBasketItem}
            />
            <div className="btns">
              <div className="order_btns">
                <button className="order_all_btn" onClick={this.giveItemList}>
                  전체상품주문
                </button>
                <button className="order_select_btn">선택상품주문</button>
              </div>
              <button onClick={this.goToMain} className="keep_shopping">
                쇼핑계속하기
              </button>
            </div>
          </div>
          <div className="announce" onClick={this.testClick}>
            이용안내
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;
