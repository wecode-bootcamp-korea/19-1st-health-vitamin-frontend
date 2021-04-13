import React, { Component } from 'react';
import './ProductCountBox.scss';

export default class ProductCountBox extends Component {
  render() {
    return (
      <div className="productCountBox">
        <span className="name">베스트 핸드크림 3종 틴케이스</span>
        <div className="inputBox">
          <input className="input" type="text" value="1" />
          <div className="arrowBox">
            <i className="fas fa-sort-up"></i>
            <i className="fas fa-sort-down"></i>
          </div>
          <p className="x">x</p>
        </div>
        <span className="price">17,400원</span>
      </div>
    );
  }
}
