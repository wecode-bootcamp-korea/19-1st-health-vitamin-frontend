import React, { Component } from 'react';
import RadioButton from '../RadioButton';
import './SelectWay.scss';

export default class SelectWay extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     radioList: [
  //       {
  //         id: 'card',
  //         isChecked: true,
  //         desc: '카드결제',
  //       },
  //       {
  //         id: 'rTime',
  //         isChecked: false,
  //         desc: '카드결제',
  //       },
  //       {
  //         id: 'phone',
  //         isChecked: false,
  //         desc: '휴대폰 결제',
  //       },
  //       {
  //         id: 'virtualAccount',
  //         isChecked: false,
  //         desc: '가상계좌',
  //       },
  //       {
  //         id: 'kakao',
  //         isChecked: false,
  //         desc: '카카오페이(간편결제)',
  //       },
  //     ],
  //   };
  // }
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
      <div className="selectPayWay">
        <p className="title">결제 수단 선택</p>
        <div className="flexBox">
          {this.props.radioList.map((radio, index) => {
            return (
              <RadioButton
                key={radio.id}
                id={radio.id}
                index={index}
                // isChecked={radio.isChecked}
                desc={radio.desc}
                // changeRadioChecked={this.props.changeRadioChecked}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
