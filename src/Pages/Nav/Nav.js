import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.scss';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      navHidden: false,
      downClick: false,
    };
  }

  isNavHidden = () => {
    this.setState({
      navHidden: !this.state.navHidden,
    });
  };

  goMain = () => {
    this.props.history.push('/');
  };

  isDownClick = () => {
    // console.log(isDownClick);
    this.setState({
      downClick: !this.state.downClick,
    });
  };

  render() {
    console.log(this.state.navHidden);
    return (
      <div>
        <div className="nav">
          <div className="left">
            <div className="logo" onClick={this.goMain}>
              <img src="http://duftndoft.com/_images/ft_logo.png"></img>
            </div>
            <div className="menuBox">
              <button className="menuBtn" onClick={this.isNavHidden}>
                <div className="menuLine"></div>
                <div className="menuLine"></div>
                <div className="menuLine"></div>
              </button>
              <div className="listMenu">
                <Link to="http://localhost:3000/basket/" className="goToBasket">
                  <i class="fas fa-shopping-bag"></i>
                </Link>
                <Link
                  to="http://localhost:3000/favoriteproduct/"
                  className="goToFavortie"
                >
                  <i class="fas fa-heart"></i>
                </Link>
                <i class="fas fa-search"></i>
              </div>
            </div>
          </div>
        </div>
        {this.state.navHidden && (
          <div className="right">
            <div className="rightBox">
              <div className="menu">
                <ul>
                  <li className="goToSomething">
                    <Link to="http://localhost:3000" className="goLink">
                      Main
                    </Link>

                    <Link
                      // to="http://localhost:3000/product-list"
                      className="goLink"
                      onClick={this.isDownClick}
                    >
                      ProductList
                      {this.state.downClick && (
                        <div className="aboutList">
                          <div className="smallList">{}</div>
                          <div className="smallList">{}</div>
                          <div className="smallList">Best_Product</div>
                          <div className="smallList">Sale_Product</div>
                        </div>
                      )}
                    </Link>

                    <Link to="http://localhost:3000/basket/" className="goLink">
                      Cart
                    </Link>
                    <Link
                      to="http://localhost:3000/favoriteproduct"
                      className="goLink"
                    >
                      My_List
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Nav;
