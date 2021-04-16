import React, { Component } from 'react';
import './Pay.scss';
import PayContainer from './PayContainer';

const typeList = ['delivery', 'order', 'discount', 'info', 'way', 'benefit'];

export default class Pay extends Component {
  render() {
    return (
      <div className="payContainer">
        <div className="pay">
          <div className="header">
            <i className="fas fa-chevron-left"></i>
            <a href="naver.com">제너럴브랜즈</a>
            <span>
              <i className="fas fa-shopping-bag"></i>
              <i className="fas fa-user"></i>
            </span>
          </div>
          <div className="order">주문/결제</div>

          {typeList.map(type => {
            return <PayContainer type={type} />;
          })}
          <br />
          <br />

          <div>
            <button className="payBtn">57,000원 결제하기</button>
            <p className="desc">
              - 무이자할부가 적용되지 않은 상품과 무이자할부가 가능한 상품을
              동시에 구매할 경우 전체 주문 상품 금액에 대해 무이자할부가
              적용되지 않습니다. 무이자할부를 원하시는 경우 장바구니에서
              무이자할부 상품만 선택하여 주문하여 주시기 바랍니다.
              <br />
              <br />- 최소 결제 가능 금액은 결제금액에서 배송비를 제외한
              금액입니다.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
