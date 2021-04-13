import React, { Component } from 'react';
import './ProductInfoimage.scss';

export default class ProductInfoimage extends Component {
  imageMouseOver = e => {
    const { id } = this.props.imageObj;
    this.props.changeCurrentImage(id);
  };

  imageMouseOut = () => {};
  render() {
    const { id, imageUrl } = this.props.imageObj;

    return (
      <li
        key={id}
        onMouseOver={this.imageMouseOver}
        onMouseOut={this.imageMouseOut}
      >
        <img src={imageUrl} alt={id} />
      </li>
    );
  }
}
