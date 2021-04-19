import React, { Component } from 'react';
import './Title.scss';

class Title extends Component {
  render() {
    return (
      <header className="title">
        <div className="category_title">PRODUCTS</div>
        <ul className="category_sub">
          <a href="/">
            <li className="sub_title">
              비타민A <span>(10)</span>
            </li>
          </a>
          <a href="/">
            <li className="sub_title">
              비타민C <span>(10)</span>
            </li>
          </a>
          <a href="/">
            <li className="sub_title">
              비타민D <span>(10)</span>
            </li>
          </a>
          <a href="/">
            <li className="sub_title">
              비타민E <span>(10)</span>
            </li>
          </a>
        </ul>
      </header>
    );
  }
}

export default Title;
