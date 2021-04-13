import React, { Component } from 'react';
import './ProductCountBox.scss';

export default class ProductCountBox extends Component {
  upClick = () => {
    console.log(this.props.item.count);
  };
  render() {
    return (
      <div className="productCountBox">
        <span className="name">{this.props.item.name}</span>
        <div className="inputBox">
          <input
            className="input"
            type="text"
            readOnly
            value={this.props.item.count}
          />
          <div className="arrowBox">
            <i className="fas fa-sort-up" onClick={this.upClick}></i>
            <i className="fas fa-sort-down"></i>
          </div>
          <p className="x">x</p>
        </div>
        <span className="price">{this.props.item.price}원</span>
      </div>
    );
  }
}
