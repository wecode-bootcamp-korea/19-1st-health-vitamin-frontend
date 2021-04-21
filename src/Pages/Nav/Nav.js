import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <div className="left">
            <div className="logo" onClick={this.goMain}>
              <img src="http://duftndoft.com/_images/ft_logo.png"></img>
            </div>
            <div className="menuBox">
              <div className="menuBtn">
                <div className="menuLine"></div>
                <div className="menuLine"></div>
                <div className="menuLine"></div>
              </div>
              <div className="listMenu">
                <Link to="http://localhost:3000/basket/" className="goToBasket">
                  <i class="fas fa-shopping-bag"></i>
                </Link>
                <Link
                  to="http://localhost:3000/favoriteproduct"
                  className="goToFavortie"
                >
                  <i class="fas fa-heart"></i>
                </Link>
                <i class="fas fa-search"></i>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="rightBox">
              <div className="menu">
                <ul>
                  <li>
                    <Link to="">Main</Link>
                    <Link to="">ProductList</Link>
                    <Link to="http://localhost:3000/basket/">Cart</Link>
                    <Link to="">My List</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
