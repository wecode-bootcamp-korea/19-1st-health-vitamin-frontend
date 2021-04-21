import React, { Component } from 'react';

class SubTitle extends Component {
  render() {
    return (
      <li className="sub_title">
        {this.props.categoryName}
        {/* <span>({})</span> */}
      </li>
    );
  }
}

export default SubTitle;
