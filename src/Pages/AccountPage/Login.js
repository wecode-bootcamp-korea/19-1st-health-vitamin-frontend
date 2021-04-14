import React, { Component } from 'react';
import '../AccountPage/Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="loginHome">
        <div className="loginIcon">
          <header className="olLonginBox">
            <ol className="loginList">
              <li>
                <a className="goLink" href="">
                  <i class="fas fa-home" />
                </a>
              </li>
              <li>
                <i class="fas fa-angle-right" />
              </li>
              <li className="goSignUp">로그인</li>
            </ol>
          </header>
          <div className="loginKo">
            <h2 className="nameLogin">로그인</h2>
          </div>
          <div className="idPwMom">
            <div className="idPw">
              <div className="idPwBig">
                <div className="idBox">
                  <div className="idKo">아이디</div>
                  <div>
                    <input
                      className="writeId"
                      type="text"
                      placeholder="아이디"
                    />
                  </div>
                </div>
                <div className="pwBox">
                  <div className="pwKo">비밀번호</div>
                  <div>
                    <input
                      className="writePw"
                      type="password"
                      placeholder="비밀번호"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="loginBtBox">
                  <a className="loginBt" href="">
                    로그인
                  </a>
                </div>
              </div>
            </div>
            <div className="searchBox">
              <div className="searchId">
                <a href="" className="searchIdBox">
                  아이디 찾기
                </a>
              </div>
              <div>|</div>
              <div className="searchPw">
                <a href="" className="searchPwBox">
                  비밀번호 찾기
                </a>
              </div>
            </div>
            <div className="yet">
              <p className="general">
                아직 제너럴브랜즈의 회원이 아니신가요?
                <br />
                <span className="service">
                  회원가입하고 다양한 혜택과 서비스를 이용해보세요!
                </span>
              </p>
              <button className="memberBt">회원가입</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
