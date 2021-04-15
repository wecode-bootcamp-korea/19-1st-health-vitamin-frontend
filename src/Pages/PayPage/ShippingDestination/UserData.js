import React, { Component } from 'react';
import './UserData.scss';

export default class UserData extends Component {
  changeIsDiplay = () => {
    this.props.changeIsDiplay();
  };
  render() {
    const { isDiplay } = this.props;
    return (
      <div class="userData">
        <div className="header">
          <span>배송지</span>
          <i onClick={this.changeIsDiplay} className="fas fa-chevron-up"></i>
        </div>
        {isDiplay && (
          <form action="">
            <span>
              <input
                class="radio"
                type="radio"
                id="sameDelivery"
                name="sameDelivery"
                value="sameDelivery"
                checked
              />
              <label class="radioLabel" for="sameDelivery">
                회원 정보와 동일
              </label>
            </span>

            <span>
              <input
                class="radio"
                type="radio"
                id="newDelivery"
                name="sameDelivery"
                value="newDelivery"
              />
              <label class="radioLabel" for="newDelivery">
                새로운 배송지
              </label>
            </span>

            <div>
              <label for="receiver" class="lb">
                받는 사람 *{' '}
              </label>
              <input
                type="input"
                class="receiver"
                name="receiver"
                value="이종호"
              />
            </div>

            <div>
              <label for="address" class="lb">
                주소 *{' '}
              </label>
              <input
                type="input"
                class="addressNumber"
                name="addressNumber"
                value="11808"
              />
              <button class="addBtn">주소검색</button>
              <input
                type="input"
                class="addressMain"
                name="addressMain"
                value="경기도 의정부시 민락동 710-3"
              />
              <input
                type="input"
                class="addressSub"
                name="addressSub"
                value="301호"
              />
            </div>

            <div>
              <label for="home" class="lb">
                일반 전화
              </label>
              <select name="home" class="homeSelectFirst">
                <option value="02">02</option>
                <option value="031">031</option>
                <option value="032">032</option>
                <option value="033">033</option>
                <option value="041">041</option>
                <option value="042">042</option>
                <option value="043">043</option>
                <option value="044">044</option>
                <option value="051">051</option>
                <option value="052">052</option>
                <option value="053">053</option>
                <option value="054">054</option>
                <option value="055">055</option>
                <option value="061">061</option>
                <option value="062">062</option>
              </select>
              -
              <input
                type="input"
                class="homeSelectSec"
                name="homeSelectSec"
                value=""
              />
              -
              <input
                type="input"
                class="homeSelectThr"
                name="homeSelectThr"
                value=""
              />
            </div>

            <div>
              <label for="phone" class="lb">
                휴대 전화 *{' '}
              </label>
              <select name="phone" class="phoneSelectFirst">
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              -
              <input
                type="input"
                class="phoneSelectSec"
                name="phoneSelectSec"
                value="3309"
              />
              -
              <input
                type="input"
                class="phoneSelectThr"
                name="phoneSelectThr"
                value="3347"
              />
            </div>

            <div>
              <label for="email" class="lb">
                이메일 *{' '}
              </label>
              <input
                type="input"
                class="emailFirst"
                name="newUserData"
                value="16616516"
              />
              @
              <select name="email" class="emailSelect">
                <option value="">-이메일 선택-</option>
                <option value="naver" selected>
                  naver.com
                </option>
                <option value="daum">daum.net</option>
                <option value="nate">nate.com</option>
                <option value="hotmail">hotmail.com</option>
                <option value="yahoo">yahoo.com</option>
                <option value="empas">empas.com</option>
                <option value="korea">korea.com</option>
                <option value="dreamwiz">dreamwiz.com</option>
                <option value="gmail">gmail.com</option>
                <option value="direct">직접입력</option>
              </select>
              <p class="emailSub">
                이메일로 주문 처리 과정을 보내드립니다.
                <br /> 수신 가능한 이메일 주소를 입력해 주세요.
              </p>
            </div>
          </form>
        )}
      </div>
    );
  }
}
