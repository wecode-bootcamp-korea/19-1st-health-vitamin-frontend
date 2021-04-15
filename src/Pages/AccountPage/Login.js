import React, { Component } from 'react';
import '../AccountPage/Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
      text: '',
      password: '',
      userId: '',
      userPw: '',
    };
  }

  handleColor = () => {
    this.setState({
      color: 'lightgray',
    });
  };

  handleChange = e => {
    e.preventDefault();
    // console.log(e.target.name);
    // console.log(e.target);
    // console.log(e.target.className);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="loginHome">
        <div className="loginIcon">
          <header className="olLonginBox">
            <ol className="loginList">
              <li>
                <a className="goLink" href="">
                  <i className="fas fa-home" />
                </a>
              </li>
              <li>
                <i className="fas fa-angle-right" />
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
                      name="userId"
                      placeholder="아이디"
                      value={this.state.userId}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="pwBox">
                  <div className="pwKo">비밀번호</div>
                  <div>
                    <input
                      className="writePw"
                      type="password"
                      name="userPw"
                      value={this.state.userPw}
                      onChange={this.handleChange}
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
              <button className="memberBt" onClick={this.handleColor}>
                <h4 style={{ color: this.state.color }}>회원가입</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
