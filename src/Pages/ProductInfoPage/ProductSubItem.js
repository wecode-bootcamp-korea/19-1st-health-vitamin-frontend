import React, { Component } from 'react';
import './ProductSubItem.scss';

export default class ProductSubItem extends Component {
  render() {
    return (
      <div className="productSubItem">
        <img
          className="itemImage"
          src="//duftndoft.com/web/product/tiny/202102/bf66ab0bcc27c4b74a5be18a21787cb4.jpg"
          alt=""
        />
        <div>
          <div className="information">
            <p className="informationTitle">
              소피소피 휴대용 손소독제 핸드 새니타이저
            </p>
            <p className="informationPrice">3,000원</p>
          </div>
          <div className="option">
            <p className="optionName">상품선택</p>
            <select className="optionSelect" name="optionSelect">
              <option value="optionItem">- [필수] 상품 선택 -</option>
              <option value="optionItem">
                소피소피 휴대용 손소독제 핸드 새니타이저
              </option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
