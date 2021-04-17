import React, { Component } from 'react';
import './ProductImageBox.scss';
import ProductInfoimage from './ProductInfoimage';

export default class ProductImageBox extends Component {
  render() {
    const { imageList, changeCurrentImage } = this.props;
    return (
      <ol className="productImageBox">
        {imageList.map(image => {
          return (
            <ProductInfoimage
              key={image.id}
              imageObj={image}
              changeCurrentImage={changeCurrentImage}
            />
          );
        })}
      </ol>
    );
  }
}
