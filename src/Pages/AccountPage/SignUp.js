import React, { Component } from 'react';
import '../AccountPage/SignUp.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      inputClass: 'notValid',
      color: 'white',
      id: '',
      pw: '',
    };
  }

  signUp = (id, pw) => {
    console.log('id: ' + id);
    console.log('pw: ' + pw);
    fetch('http://10.167.105.109:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        division: true,
        account: 'test12345',
        email: 'test5@test.test',
        name: 'wtewtew',
        password: '123456789',
        phone_number: '12345278901',
        gender: false,
        date_of_birth: '1995-09-01',
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };
  handleColor = () => {
    this.signUp(this.state.id, this.state.pw);
  };

  idChange = e => {
    const { value } = e.target;
    if (/^[a-z0-9]{4,16}$/.test(value)) {
      this.setState({
        inputClass: 'valid',
        id: value,
      });
    } else {
      this.setState({
        inputClass: 'notValid',
      });
    }
  };

  pwChange = e => {
    const { value } = e.target;
    if (
      /^([a-zA-Z]|[a-z !@#$%^&*]|[A-Z !@#$%^&*]|[0-9a-z]|[0-9A-Z]|[0-9 !@#$%^&*]){8,16}$/.test(
        value
      )
    ) {
      console.log('good');
      this.setState({
        inputClass: 'valid',
        pw: value,
      });
    } else {
      this.setState({
        inputClass: 'notValid',
      });
    }
  };
  render() {
    return (
      <div className="home">
        <div className="icon">
          <header className="olBox">
            <ol className="list">
              <li>
                <a className="link" href="">
                  <i className="fas fa-home" />
                </a>
              </li>
              <li>
                <i className="fas fa-angle-right" />
              </li>
              <li className="linkSignUp">회원 가입</li>
            </ol>
          </header>
          <div className="signUp">
            <h2>
              <strong>회원 가입</strong>
            </h2>
          </div>
          <table className="type">
            <tr>
              <div className="memberColor">
                <td className="division">회원구분*</td>
              </div>
              <td className="memberShip">
                <label htmlFor="ownMember">
                  <input className="own" name="button" type="radio" />
                  개인회원
                </label>
                <label htmlFor="companyMember">
                  <input className="company" name="button" type="radio" />
                  사업자회원
                </label>
              </td>
            </tr>
          </table>
          <div className="inform">
            <div className="informBox">
              <h3>기본정보</h3>
            </div>
            <div className="idBox">
              <div className="oneBox">
                <table className="idPw">
                  <tr>
                    <td className="idColor">
                      <div>아이디*</div>
                    </td>
                    <td className="idEnglish">
                      <input
                        className={'id ' + this.state.inputClass}
                        name="information"
                        type="text"
                        onChange={this.idChange}
                      />
                      <div className="english">(영문소문자/숫자,4~16자)</div>
                    </td>
                  </tr>
                </table>
              </div>
              <table>
                <tr>
                  <td className="pwColor">
                    <div className="pwKo">비밀번호*</div>
                  </td>
                  <td className="pwBox">
                    <input
                      className={'pw ' + this.state.inputClass}
                      name="information"
                      type="text"
                      onChange={this.pwChange}
                    />
                    <div className="pwEnglish">
                      (영문 대소문자/숫자/특수문자 중 2가지 이상 조합,8자~16자)
                    </div>
                  </td>
                </tr>
              </table>
              <div className="write">
                <table>
                  <tr>
                    <td className="writeName">
                      <div className="name">이름*</div>
                    </td>
                    <td className="naming">
                      <input
                        className="nameBox"
                        name="information"
                        type="text"
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="phoneBox">
                <table>
                  <tbody>
                    <tr>
                      <td className="writePhone">
                        <div className="phoneKo">휴대전화*</div>
                      </td>
                      <div className="callingBox">
                        <td className="calling">
                          <div className="submit">
                            <input className="phone" type="tel" name="phone" />
                          </div>
                        </td>
                      </div>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="emailBox">
                <table>
                  <tbody>
                    <tr>
                      <td className="writeEmail">
                        <div className="emailKo">이메일*</div>
                      </td>
                      <td>
                        <div className="writing">
                          <input
                            className="email"
                            type="email"
                            name="userEmail"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="addInform">
            <h3>추가정보</h3>
          </div>
          <table className="plus">
            <tr>
              <div className="genderBox">
                <div className="gender">
                  <td>
                    <div className="other">성별*</div>
                  </td>
                </div>
              </div>
              <td className="manWoman">
                <input className="Man" name="buttoni" type="radio" />
                <label for="manMember">남자</label>
                <input className="Woman" name="buttoni" type="radio" />
                <label for="womanMember">여자</label>
              </td>
            </tr>
          </table>
          <div className="bigAdd">
            <table className="addTable">
              <tr className="birthDayBox">
                <div>
                  <div className="birthDay">
                    <td className="dailyBox">
                      <div className="birth">생년월일*</div>
                    </td>
                  </div>
                </div>
                <td className="dailyMonth">
                  <input className="daily" type="date" />
                </td>
              </tr>
            </table>
          </div>
          <div className="endSignup">
            <button className="memberBt" onClick={this.handleColor}>
              <h4 style={{ color: this.state.color }}>회원가입</h4>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
