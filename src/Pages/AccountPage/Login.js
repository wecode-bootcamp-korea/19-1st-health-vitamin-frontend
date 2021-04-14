import React, { Component } from 'react';
import '../AccountPage/Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="loginHome">
        <div className="icon">
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
              <li className="linkSignUp">로그인</li>
            </ol>
          </header>
        </div>
        <div className="signUp">
          <h2>
            <strong>로그인</strong>
          </h2>
        </div>
      </div>
    );
  }
}

export default Login;
