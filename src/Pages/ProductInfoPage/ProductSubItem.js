import React, { Component } from 'react';
import './ProductSubItem.scss';

export default class ProductSubItem extends Component {
  optionSelectOnChange = e => {
    if (e.target.options.selectedIndex) {
      this.props.addSubItemList(this.props.subItem);
    }
  };
  render() {
    return (
      <div className="productSubItem">
        <img className="itemImage" src={this.props.subItem.imageUrl} alt="" />
        <div>
          <div className="information">
            <p className="informationTitle">{this.props.subItem.name}</p>
            <p className="informationPrice">{this.props.subItem.price}원</p>
          </div>
          <div className="option">
            <p className="optionName">상품선택</p>
            <select
              className="optionSelect"
              name="optionSelect"
              onChange={this.optionSelectOnChange}
            >
              <option value="optionItem">- [필수] 상품 선택 -</option>
              <option value="optionItem">{this.props.subItem.name}</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
