import React, { Component } from 'react';
import '../AccountPage/SignUp.scss';

class SignUp extends Component {
  render() {
    return (
      <div className="home">
        <div className="icon">
          <div className="homeIcon">
            <header className="olBox">
              <ol className="list">
                <li>
                  <a className="link" href="">
                    <i class="fas fa-home" />
                  </a>
                </li>
                <li>
                  <i class="fas fa-angle-right" />
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
                  <input className="own" name="button" type="radio" />
                  <label for="ownMember">개인회원</label>
                  <input className="company" name="button" type="radio" />
                  <label for="companyMember">사업자회원</label>
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
                        <input className="id" name="information" type="text" />
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
                        className="pw"
                        name="information"
                        type="password"
                      />
                      <div className="pwEnglish">
                        (영문 대소문자/숫자/특수문자 중 2가지 이상
                        조합,8자~16자)
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
                    <tr>
                      <td className="writePhone">
                        <div className="phoneKo">휴대전화*</div>
                      </td>
                      <div className="callingBox">
                        <td className="calling">
                          <div className="submit">
                            <input
                              className="phone"
                              type="tel"
                              name="phone"
                              maxlength="13"
                            />
                          </div>
                        </td>
                      </div>
                    </tr>
                  </table>
                </div>
                <div className="emailBox">
                  <tale>
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
                  </tale>
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
                <td className="mw">
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
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
