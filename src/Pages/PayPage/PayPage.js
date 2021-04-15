import React, { Component } from 'react';

export default class PayPage extends Component {
  render() {
    return (
      <div className="payPage">
        <div>
          <span>&lt;</span>
          <h1>제너럴브랜즈</h1>
          <span>
            <i className="fas fa-shopping-bag"></i>
            <i className="fas fa-user"></i>
          </span>
        </div>
        <div>주문/결제</div>
        <br />
        <br />
        <div>여러가지</div>
        <br />
        <br />

        <div>
          <button>57,000원 결제하기</button>
          <p>
            - 무이자할부가 적용되지 않은 상품과 무이자할부가 가능한 상품을
            동시에 구매할 경우 전체 주문 상품 금액에 대해 무이자할부가 적용되지
            않습니다. 무<br />
            이자할부를 원하시는 경우 장바구니에서 무이자할부 상품만 선택하여
            주문하여 주시기 바랍니다.
            <br />
            <br />- 최소 결제 가능 금액은 결제금액에서 배송비를 제외한
            금액입니다.
          </p>
        </div>
      </div>
    );
  }
}
