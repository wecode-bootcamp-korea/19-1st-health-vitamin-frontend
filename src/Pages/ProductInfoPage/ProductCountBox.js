import React, { Component } from 'react';
import './ProductCountBox.scss';

export default class ProductCountBox extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  upClick = () => {
    this.setState({
      count: this.state.count * 1 + 1,
    });
  };

  downClick = () => {
    if (this.state.count <= 1) {
      return;
    }
    this.setState({
      count: this.state.count * 1 - 1,
    });
  };

  changeNum = e => {
    if (/\d/.test(e.key)) {
      this.setState({
        count: (this.state.count + e.key) * 1,
      });
    } else if (e.keyCode === 8) {
      let sCount = this.state.count + '';
      this.setState({
        count: sCount.slice(0, sCount.length - 1),
      });
    }
  };

  inputOnChange = e => {
    this.setState({
      count: e.target.value,
    });
  };

  render() {
    return (
      <div className="productCountBox">
        <span className="name">{this.props.item.name}</span>
        <div className="inputBox">
          <input
            className="input"
            type="number"
            value={this.state.count}
            onChange={this.inputOnChange}
            // onKeyDown={this.changeNum}
          />
          <div className="arrowBox">
            <i className="fas fa-sort-up" onClick={this.upClick}></i>
            <i className="fas fa-sort-down" onClick={this.downClick}></i>
          </div>
          <p className="x">x</p>
        </div>
        <span className="price">{this.props.item.price}원</span>
      </div>
    );
  }
}
