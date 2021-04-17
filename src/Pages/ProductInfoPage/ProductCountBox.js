import React, { Component } from 'react';
import './ProductCountBox.scss';

export default class ProductCountBox extends Component {
  upClick = () => {
    let { count, updateSubItemList, id, type } = this.props;
    let newCout = count * 1 + 1;

    updateSubItemList(type, newCout, id);
  };

  downClick = () => {
    let { count, id, type } = this.props;

    count = count <= 1 ? 2 : count;
    this.props.updateSubItemList(type, count * 1 - 1, id);
  };

  inputOnChange = e => {
    let { value } = e.target;

    const { id, updateSubItemList, type } = this.props;
    updateSubItemList(type, value, id);
  };

  xBtnOnClick = () => {
    this.props.deleteSubItemList(this.props.type, this.props.id);
  };

  render() {
    const { price, name, count } = this.props;

    const { inputOnChange, upClick, downClick, xBtnOnClick } = this;
    return (
      <div className="productCountBox">
        <span className="name">{name}</span>
        <div className="inputBox">
          <input
            className="input"
            type="number"
            value={count}
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
        <span className="price">
          {this.props.discount
            ? (price - price * (this.props.discount / 100)) *
              (count ? count : 1)
            : price * (count ? count : 1)}
          원
        </span>
      </div>
    );
  }
}
