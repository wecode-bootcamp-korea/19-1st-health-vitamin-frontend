import React, { Component } from 'react';
import SelectWay from './PayWay/SelectWay';
import UseNext from './PayWay/UseNext';
import './PayWay.scss';
import PayWayContent from './PayWay/PayWayContent';

export default class PayWay extends Component {
  constructor() {
    super();
    this.state = {
      radioList: [
        {
          id: 'card',
          // isChecked: true,
          desc: '카드결제',
        },
        {
          id: 'rTime',
          // isChecked: false,
          desc: '에스크로(실시간 계좌이체)',
        },
        {
          id: 'phone',
          // isChecked: false,
          desc: '휴대폰 결제',
        },
        {
          id: 'virtualAccount',
          // isChecked: false,
          desc: '가상계좌',
        },
        {
          id: 'kakao',
          // isChecked: false,
          desc: '카카오페이(간편결제)',
        },
      ],
    };
  }
  // changeRadioChecked = index => {
  //   this.setState({
  //     radioList: this.state.radioList.map((radio, i) => {
  //       i === index ? (radio.isChecked = true) : (radio.isChecked = false);
  //       return radio;
  //     }),
  //   });
  // };
  render() {
    return (
      <div className="way">
        <div className="content">
          {/* 결제 방법 */}
          <SelectWay
            radioList={this.state.radioList}
            // changeRadioChecked={this.changeRadioChecked}
          />

          {this.state.radioList.map(radio => {
            console.log(radio);
            if (radio.isChecked) {
              return <PayWayContent key={radio.id} id={radio.id} />;
            }
            return null;
          })}

          {/* 공통 */}
          <UseNext />
        </div>
      </div>
    );
  }
}
