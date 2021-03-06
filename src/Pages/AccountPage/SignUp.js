import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../AccountPage/SignUp.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      inputClass: 'notValid',
      color: 'white',
      id: '',
      pw: '',
      phone: '',
      email: '',
      name: '',
      gender: false,
      birth: '',
    };
  }

  signUp = () => {
    console.log('sign');
    console.log({
      division: true,
      account: this.state.id,
      email: this.state.email,
      name: this.state.name,
      password: this.state.pw,
      phone_number: this.state.phone,
      gender: this.state.gender,
      date_of_birth: this.state.birth,
    });
    fetch('http://18.116.64.187:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        division: true,
        account: this.state.id,
        email: this.state.email,
        name: this.state.name,
        password: this.state.pw,
        phone_number: this.state.phone,
        gender: this.state.gender,
        date_of_birth: this.state.birth,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.MESSAGE === 'SUCCESS') {
          this.props.history.push('/login');
        } else {
          alert(data.MESSAGE);
        }
      });
  };

  change = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  idChange = e => {
    const { value } = e.target;
    const idValidator = /^[a-z0-9]{4,16}$/.test(value);

    this.setState({
      inputClass: idValidator ? 'valid' : 'notValid',
      id: value,
    });
  };

  pwChange = e => {
    const { value } = e.target;
    const pwValidator = /^([a-zA-Z]|[a-z !@#$%^&*]|[A-Z !@#$%^&*]|[0-9a-z]|[0-9A-Z]|[0-9 !@#$%^&*]){8,16}$/.test(
      value
    );

    this.setState({
      inputClass: pwValidator ? 'valid' : 'notValid',
      pw: value,
    });
  };

  render() {
    return (
      <div className="home">
        <div className="icon">
          <div className="signUp">
            <h2>
              <strong>?????? ??????</strong>
            </h2>
          </div>
          <table className="type">
            <tr>
              <div className="memberColor">
                <td className="division">????????????*</td>
              </div>
              <td className="memberShip">
                <label htmlFor="ownMember">
                  <input className="own" name="button" type="radio" />
                  ????????????
                </label>
                <label htmlFor="companyMember">
                  <input className="company" name="button" type="radio" />
                  ???????????????
                </label>
              </td>
            </tr>
          </table>
          <div className="inform">
            <div className="informBox">
              <h3>????????????</h3>
            </div>
            <div className="idBox">
              <div className="oneBox">
                <table className="idPw">
                  <tr>
                    <td className="idColor">
                      <div>?????????*</div>
                    </td>
                    <td className="idEnglish">
                      <input
                        className={'id ' + this.state.inputClass}
                        name="information"
                        type="text"
                        onChange={this.idChange}
                      />
                      <div className="english">(???????????????/??????,4~16???)</div>
                    </td>
                  </tr>
                </table>
              </div>
              <table>
                <tr>
                  <td className="pwColor">
                    <div className="pwKo">????????????*</div>
                  </td>
                  <td className="pwBox">
                    <input
                      className={'pw ' + this.state.inputClass}
                      name="information"
                      type="password"
                      onChange={this.pwChange}
                    />
                    <div className="pwEnglish">
                      (?????? ????????????/??????/???????????? ??? 2?????? ?????? ??????,8???~16???)
                    </div>
                  </td>
                </tr>
              </table>
              <div className="write">
                <table>
                  <tr>
                    <td className="writeName">
                      <div className="name">??????*</div>
                    </td>
                    <td className="naming">
                      <input
                        className="nameBox"
                        name="name"
                        type="text"
                        onChange={this.change}
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
                        <div className="phoneKo">????????????*</div>
                      </td>
                      <div className="callingBox">
                        <td className="calling">
                          <div className="submit">
                            <input
                              className="phone"
                              type="tel"
                              name="phone"
                              onChange={this.change}
                            />
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
                        <div className="emailKo">?????????*</div>
                      </td>
                      <td>
                        <div className="writing">
                          <input
                            className="email"
                            type="email"
                            name="email"
                            onChange={this.change}
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
            <h3>????????????</h3>
          </div>
          <table className="plus">
            <tr>
              <div className="genderBox">
                <div className="gender">
                  <td>
                    <div className="other">??????*</div>
                  </td>
                </div>
              </div>
              <td className="manWoman">
                <input className="Man" name="buttoni" type="radio" />
                <label htmlFor="manMember">??????</label>
                <input className="Woman" name="buttoni" type="radio" />
                <label htmlfor="womanMember">??????</label>
              </td>
            </tr>
          </table>
          <div className="bigAdd">
            <table className="addTable">
              <tr className="birthDayBox">
                <div>
                  <div className="birthDay">
                    <td className="dailyBox">
                      <div className="birth">????????????*</div>
                    </td>
                  </div>
                </div>
                <td className="dailyMonth">
                  <input
                    className="daily"
                    type="date"
                    name="birth"
                    onChange={this.change}
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="endSignup">
            <button className="memberBt" onClick={this.signUp}>
              <h4 style={{ color: this.state.color }}>????????????</h4>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
