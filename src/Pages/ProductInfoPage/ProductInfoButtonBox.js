import React, { Component } from 'react';
import './ProductInfoButtonBox.scss';

export default class ProductInfoButtonBox extends Component {
  render() {
    const { BUTTONS } = this.props;
    return (
      <div className="productInfoButtonBox">
        {BUTTONS.map(el => {
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
