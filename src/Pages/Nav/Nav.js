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

  componentDidMount() {
    fetch('/data/Favorite/Favorite.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          downClick: data,
        });
      });
  }

  render() {
    return (
      <div className="Navigation">
        <div className={this.state.navHidden ? 'nav_hover' : 'nav'}>
          <div className="left">
            <div className="logo" onClick={this.goMain}>
              <img src="http://duftndoft.com/_images/ft_logo.png"></img>
            </div>
            <div className="menuBox">
              <button className="menuBtn" onClick={this.isNavHidden}>
                <i className="menuHamber fas fa-bars fa-3x"></i>
              </button>
              <div className="listMenu">
                <Link to="/basket" className="goToBasket">
                  <i class="fas fa-shopping-bag"></i>
                </Link>
                <Link to="/favoriteproduct" className="goToFavortie">
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
                    <Link to="/" className="goLink">
                      Main
                    </Link>
                    <Link
                      to="/product-list"
                      className="goLink"
                      onClick={this.isDownClick}
                    >
                      ProductList
                      {!this.state.downClick && (
                        <div className="aboutList">
                          <div className="smallList">{}</div>
                          <div className="smallList">{}</div>
                          <div className="smallList">Best_Product</div>
                          <div className="smallList">Sale_Product</div>
                        </div>
                      )}
                    </Link>
                    <Link to="/" className="goLink">
                      Cart
                    </Link>
                    <Link to="/favoriteproduct" className="goLink">
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
