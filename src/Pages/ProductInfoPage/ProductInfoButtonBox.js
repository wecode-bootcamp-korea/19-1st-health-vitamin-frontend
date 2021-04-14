import React, { Component } from 'react';
import './ProductInfoButtonBox.scss';

export default class ProductInfoButtonBox extends Component {
  render() {
    return (
      <div className="productInfoButtonBox">
        {this.props.BUTTONS.map(el => {
          return (
            <button key={el.id} className={el.className}>
              {el.name}
            </button>
          );
        })}
      </div>
    );
  }
}
