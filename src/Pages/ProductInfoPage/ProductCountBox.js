import React, { Component } from 'react';
import './ProductCountBox.scss';

export default class ProductCountBox extends Component {
  upClick = () => {
    let newCout = this.props.item.count * 1 + 1;
    this.props.updateSubItemList(newCout, this.props.item.id);
  };

  downClick = () => {
    let { count } = this.props.item;
    count = count <= 1 ? 2 : count;

    this.props.updateSubItemList(count * 1 - 1, this.props.item.id);
  };

  inputOnChange = e => {
    let { value } = e.target;
    if (!/\d/.test(value)) {
      value = 1;
    }

    this.props.updateSubItemList(value, this.props.item.id);
  };

  xOnClick = () => {
    this.props.deleteSubItemList(this.props.item.id);
  };

  render() {
    const { price, count } = this.props.item;
    return (
      <div className="productCountBox">
        <span className="name">{this.props.item.name}</span>
        <div className="inputBox">
          <input
            className="input"
            type="number"
            value={this.props.item.count}
            onChange={this.inputOnChange}
          />
          <div className="arrowBox">
            <i className="fas fa-sort-up" onClick={this.upClick}></i>
            <i className="fas fa-sort-down" onClick={this.downClick}></i>
          </div>
          <p className="x" onClick={this.xOnClick}>
            x
          </p>
        </div>
        <span className="price">{price * count}원</span>
      </div>
    );
  }
}
