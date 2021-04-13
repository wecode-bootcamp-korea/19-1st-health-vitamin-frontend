import React, { Component } from 'react';
import './ProductImageBox.scss';

export default class ProductImageBox extends Component {
  render() {
    return (
      <ol className="productImageBox">
        <li>
          <img
            src="//duftndoft.com/web/product/small/202104/51f0610161fab8905bf2fe7f4485536a.jpg"
            alt="1"
          />
        </li>
        <li>
          <img
            src="//duftndoft.com/web/product/extra/small/202104/4413079cba8eeb438345f8e07b3469d9.jpg"
            alt="2"
          />
        </li>
        <li>
          <img
            src="//duftndoft.com/web/product/extra/small/202104/5ea6a78ea8b5fcf87a3d64d07ad1578e.jpg"
            alt="3"
          />
        </li>
        <li>
          <img
            src="//duftndoft.com/web/product/extra/small/202104/4396c1e7bbcd7f7bcc9f8bb53381c815.jpg"
            alt="4"
          />
        </li>
        <li>
          <img
            src="//duftndoft.com/web/product/extra/small/202104/ac833074fa1731ad46310b38a329ffc9.jpg"
            alt="5"
          />
        </li>
      </ol>
    );
  }
}
