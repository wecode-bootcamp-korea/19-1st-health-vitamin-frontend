import React, { Component } from 'react';
import './Banner.scss';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img
          src="https://duftndoft1.openhost.cafe24.com/web/main/pc_main_04192.jpg"
          alt="benner"
          className="bennerImage"
        ></img>
      </div>
    );
  }
}
