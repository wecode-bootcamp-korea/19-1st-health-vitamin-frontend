import React, { Component } from 'react';
import Card from './Card';
import Kakao from './Kakao';
import Phone from './Phone';
import RealTimeAccount from './RealTimeAccount';

export default class PayWayContent extends Component {
  render() {
    const { id } = this.props;
    return (
      <>
        {id === 'card' && <Card />}
        {id === 'rTime' && <RealTimeAccount />}
        {id === 'phone' && <Phone />}
        {id === 'virtualAccount' && <Card />}
        {id === 'kakao' && <Kakao />}
      </>
    );
  }
}
