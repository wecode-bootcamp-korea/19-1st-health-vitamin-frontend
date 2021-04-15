import React, { Component } from 'react';
import './Discount.scss';

export default class Discount extends Component {
  constructor() {
    super();

    this.state = {
      isDiplay: false,
    };
  }

  changeIsDiplay = () => {
    this.setState({
      isDiplay: !this.state.isDiplay,
    });
  };
  render() {
    const { isDiplay } = this.state;
    return (
      <div className="discount">
        <div className="header">
          <span>할인/부가결제</span>{' '}
          <i onClick={this.changeIsDiplay} className="fas fa-chevron-up"></i>
        </div>
        {isDiplay && (
          <>
            <div className="content">
              <div className="contentHeader">
                <span className="autoDiscount">자동 할인</span>
                <span className="option">(보유쿠폰 1개)</span>
              </div>
              <div className="discountBox">
                <span className="discountValue">32,100원</span>
                <button className="discountBtn">할인 내역</button>
              </div>
            </div>
            <div className="content">
              <div className="contentHeader">
                <span className="autoDiscount">자동 할인</span>
                <span className="option">(보유쿠폰 1개)</span>
              </div>
              <div className="discountBox">
                <span className="discountValue">32,100원</span>
                <button className="discountBtn">할인 내역</button>
              </div>
            </div>
            <div className="content">
              <div className="contentHeader">
                <span className="autoDiscount">자동 할인</span>
                <span className="option">(보유쿠폰 1개)</span>
              </div>
              <div className="discountBox">
                <span className="discountValue">32,100원</span>
                <button className="discountBtn">할인 내역</button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
