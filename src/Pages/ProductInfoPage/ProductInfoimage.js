import React, { Component } from 'react';
import './ProductInfoimage.scss';

export default class ProductInfoimage extends Component {
  imageMouseOver = () => {
    const { index, changeCurrentImage } = this.props;
    changeCurrentImage(index);
  };

  render() {
    const { id, image } = this.props;
    const { imageMouseOver } = this;

    return (
      <li key={id} onMouseOver={imageMouseOver}>
        <img src={image} alt={id} />
      </li>
    );
  }
}
