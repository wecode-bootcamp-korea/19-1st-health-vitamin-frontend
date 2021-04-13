import React, { Component } from 'react';
import './Title.scss';

class Title extends Component {
  render() {
    return (
      <header className="title">
        <div className="kategori_title">VITAMIN</div>
        <ul className="kategori_sub">
          <a><li className="sub_title">비타민A <span>(10)</span></li></a>
          <a><li className="sub_title">비타민C <span>(10)</span></li></a>
          <a><li className="sub_title">비타민D <span>(10)</span></li></a>
          <a><li className="sub_title">비타민E <span>(10)</span></li></a>
        </ul>
      </header>
    );
  }
}

export default Title;