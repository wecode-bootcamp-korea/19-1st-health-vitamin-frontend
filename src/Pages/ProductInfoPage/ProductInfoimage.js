import React, { Component } from 'react';
import './ProductInfoimage.scss';

export default class ProductInfoimage extends Component {
  imageMouseOver = () => {
    const { id } = this.props.imageObj;
    this.props.changeCurrentImage(id);
  };

  render() {
    const { id, imageUrl } = this.props.imageObj;
    const { imageMouseOver } = this;

    return (
      <li key={id} onMouseOver={imageMouseOver}>
        <img src={imageUrl} alt={id} />
      </li>
    );
  }
}
