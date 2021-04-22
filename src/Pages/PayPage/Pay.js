import React, { Component } from 'react';
import PayContainer from './PayContainer';
import { totalPrice, calcPrice } from '../../Functions/funcs';
import './Pay.scss';

const typeList = ['delivery', 'order'];

export default class Pay extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      shippingFee: {},
      name: '',
      address: '',
      subAddress: '',
      phone_number: '',
      email: '',
      message: '',
    };
  }
  changeValue = (key, value) => {
    this.setState({
      [key]: value,
    });
  };
  componentDidMount() {
    // fetch('http://localhost:8000/orders')
    fetch('/data/Pay/PayData.json', {
      // headers: {
      //   Authorization: localStorage.getItem('token'),
      // },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.PRODUCT_LIST,
          shippingFee: data.SHIPPING_FEE[0],
        });
      });
  }
  makeTotal = () => {
    const { productList, shippingFee } = this.state;
    return calcPrice(totalPrice(productList), shippingFee.shipping_fee)
      ? totalPrice(productList)
      : totalPrice(productList) + shippingFee.shipping_fee;
  };

  payBtnClick = () => {
    const { name, address, phone_number, email } = this.state;

    console.log({
      shipping_information: {
        name,
        address,
        phone_number,
        email,
        message: '배송 전 미리 연락 바랍니다.',
      },
      total: this.makeTotal(),
    });
    // fetch('http://localhost:8000/orders', {
    //   method: 'post',
    //   headers: {
    //     Authorization: localStorage.getItem('token'),
    //   },
    //   body: JSON.stringify({
    //     shipping_information: {
    //       name,
    //       address,
    //       phone_number,
    //       email,
    //       message: '배송 전 미리 연락 바랍니다.',
    //     },
    //     total: this.makeTotal(),
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data));
  };

  render() {
    const {
      productList,
      shippingFee,
      name,
      address,
      subAddress,
      phone_number,
      email,
    } = this.state;
    return (
      <div className="pay">
        <div className="header">
          <i className="fas fa-chevron-left" />
          <a href="/">제너럴브랜즈</a>
          <span>
            <i className="fas fa-shopping-bag" />
            <i className="fas fa-user" />
          </span>
        </div>
        <div className="order">주문/결제</div>
        {typeList.map(type => {
          return (
            <PayContainer
              key={type}
              type={type}
              productList={productList}
              shippingFee={shippingFee}
              name={name}
              address={address}
              subAddress={subAddress}
              phone_number={phone_number}
              email={email}
              changeValue={this.changeValue}
            />
          );
        })}
        <div className="payBox">
          <button className="payBtn" onClick={this.payBtnClick}>
            {this.makeTotal().toLocaleString()}원 결제하기
          </button>
          <p className="desc">
            - 무이자할부가 적용되지 않은 상품과 무이자할부가 가능한 상품을
            동시에 구매할 경우 전체 주문 상품 금액에 대해 무이자할부가 적용되지
            않습니다. 무이자할부를 원하시는 경우 장바구니에서 무이자할부 상품만
            선택하여 주문하여 주시기 바랍니다.
          </p>
          <p className="desc">
            - 최소 결제 가능 금액은 결제금액에서 배송비를 제외한 금액입니다.
          </p>
        </div>
      </div>
    );
  }
}
