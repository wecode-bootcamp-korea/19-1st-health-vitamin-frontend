import React, { Component } from 'react';
import './RadioButton.scss';

export default class RadioButton extends Component {
  // btnClick = () => {
  //   this.props.changeRadioChecked(this.props.index);
  // };
  render() {
    const { id, isChecked, desc } = this.props;
    return (
      <span className="RadioButton">
        <input
          className="radio"
          type="radio"
          id={id}
          value={id}
          defaultChecked={id === 'card'}
          name={'tssest'}
          // checked={isChecked}
          // onChange={this.btnClick}
        />
        <label className="radioLabel" htmlFor={id}>
          {desc}
        </label>
      </span>
    );
  }
}
