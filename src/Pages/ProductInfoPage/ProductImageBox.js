import React, { Component } from 'react';
import './ProductImageBox.scss';
import ProductInfoimage from './ProductInfoimage';

export default class ProductImageBox extends Component {
  render() {
    return (
      <ol className="productImageBox">
        {this.props.imageList.map(el => {
          return (
            <ProductInfoimage
              key={el.id}
              imageObj={el}
              changeCurrentImage={this.props.changeCurrentImage}
            />
          );
        })}
      </ol>
    );
  }
}
