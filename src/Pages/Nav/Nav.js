import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.scss';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      navHidden: false,
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
                    <Link to="http://localhost:3000">Main</Link>
                    <Link to="http://localhost:3000/product-list">
                      ProductList
                    </Link>
                    <Link to="http://localhost:3000/basket/">Cart</Link>
                    <Link to="http://localhost:3000/favoriteproduct">
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

//비타민별제품
//연령별제품
//BestProduct
//SaleProduct
