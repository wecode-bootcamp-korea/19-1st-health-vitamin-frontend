import React, { Component } from 'react';
import './ProductImageBox.scss';
import ProductInfoimage from './ProductInfoimage';

export default class ProductImageBox extends Component {
  render() {
    const { imageList, changeCurrentImage } = this.props;
    return (
      <ol className="productImageBox">
        {imageList.map((image, index) => {
          return (
            <ProductInfoimage
              key={image.image_id}
              image={image.image_url}
              id={image.image_id}
              index={index}
              changeCurrentImage={changeCurrentImage}
            />
          );
        })}
      </ol>
    );
  }
}
