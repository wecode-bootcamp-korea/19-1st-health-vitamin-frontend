import React, { Component } from 'react';
import MainBasket from './MainBasket/MainBasket';
import './Basket.scss';

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
      total: 0,
      discount: 0,
      delivery: 2500,
    };
  }

  //[장바구니] (서버 -> 장바구니) Item 가져오기
  componentDidMount() {
    fetch('/Basket/basket.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ orderList: data });
      });
  }

  // [장바구니](장바구니 -> 서버) 장바구니 담은 상품 전달하기
  giveItemList = () => {
    let products = this.state.orderList.map(order => {
      return {
        product_id: order.id,
        count: order.count,
      };
    });
    console.log(products);

    fetch('http://10.5.30.109:8000/products/basket', {
      method: 'POST',
      body: {
        products: products,
      },
    })
      .then(res => res.json())
      .then(data => {
        // { MESSAGE: SUCCESS }
        console.log(data);
      });
    this.props.history.push('/');
  };

  deleteBasketItem = cool => {
    // cool 이란 어떤 객체인지 구분해 주는 특정 데이터이다. ex) id
    let { orderList } = this.state;
    this.setState({
      orderList: orderList.filter(order => {
        console.log('order');
        if (order.id === cool) {
          return;
        }
        return order;
      }),
    });
  };

  deleteAllOrder = e => {
    e.preventDefault();
    const { orderList } = this.state;
    this.setState({
      orderList: orderList.filter(item => {}),
    });
  };

  changeCount = (id, count) => {
    if (!count) return;

    const { orderList } = this.state;

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
    this.props.history.push('/');
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.orderList !== this.state.orderList) {
      //계산
      let totalAmount = 0;
      let totalDiscount = 0;
      this.state.orderList.forEach(order => {
        totalAmount += order.price * order.count;
        totalDiscount += order.price * (order.discount / 100) * order.count;
        if (totalAmount - totalDiscount > 20000) {
          this.setState({ delivery: 0 });
        } else {
          this.setState({ delivery: 2500 });
        }
      });

      this.setState({ total: totalAmount, discount: totalDiscount });
    }
  }

  //⭐️  map, reduce, filter 샌드위치 햄버거

  render() {
    const { orderList } = this.state;
    return (
      <div className="basket_page_body">
        <div className="basket_page">
          <div className="title">장바구니</div>
          <div className="basket">
            {/* <div className="area">
              <div className="where domastic">
                국내배송상품 ({orderList.length})
              </div>
              <div className="where abroad">해외배송상품 (0)</div>
            </div> */}
            <MainBasket
              total={this.state.total}
              discount={this.state.discount}
              delivery={this.state.delivery}
              orderList={orderList}
              changeCount={this.changeCount}
              deleteBasketItem={this.deleteBasketItem}
              deleteAllOrder={this.deleteAllOrder}
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
        </div>
      </div>
    );
  }
}

export default Basket;
