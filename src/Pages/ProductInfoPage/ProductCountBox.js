import React, { Component } from 'react';
import './ProductCountBox.scss';

export default class ProductCountBox extends Component {
  upClick = () => {
    let { item, updateSubItemList } = this.props;
    let newCout = item.count * 1 + 1;

    updateSubItemList(newCout, item.id);
  };

  downClick = () => {
    let { count, id } = this.props.item;

    count = count <= 1 ? 2 : count;
    this.props.updateSubItemList(count * 1 - 1, id);
  };

  inputOnChange = e => {
    let { value } = e.target;
    const { item, updateSubItemList } = this.props;

    updateSubItemList(value, item.id);
  };

  xBtnOnClick = () => {
    this.props.deleteSubItemList(this.props.item.id);
  };

  render() {
    const { price, count, name } = this.props.item;
    const { inputOnChange, upClick, downClick, xBtnOnClick } = this;
    return (
      <div className="productCountBox">
        <span className="name">{name}</span>
        <div className="inputBox">
          <input
            className="input"
            type="number"
            value={count ? count : 1}
            onChange={inputOnChange}
          />
          <div className="arrowBox">
            <i className="fas fa-sort-up" onClick={upClick}></i>
            <i className="fas fa-sort-down" onClick={downClick}></i>
          </div>
          <p className="x" onClick={xBtnOnClick}>
            x
          </p>
        </div>
        <span className="price">{price * (count ? count : 1)}원</span>
      </div>
    );
  }
}
