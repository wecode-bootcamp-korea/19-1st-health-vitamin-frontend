import React, { Component } from 'react';
import './RadioButton.scss';

export default class RadioButton extends Component {
  render() {
    const { id, desc } = this.props;
    return (
      <span className="RadioButton">
        <input
          className="radio"
          type="radio"
          id={id}
          value={id}
          defaultChecked={id === 'card'}
          name={'tssest'}
        />
        <label className="radioLabel" htmlFor={id}>
          {desc}
        </label>
      </span>
    );
  }
}
