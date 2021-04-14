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
          <div className="idPw">
            <div className="idPwBig">
              <div className="idBox">
                <div className="idKo">아이디</div>
                <div>
                  <input className="writeId" type="text" placeholder="아이디" />
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
        </div>
      </div>
    );
  }
}

export default Login;
