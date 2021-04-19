import React, { Component } from 'react';
import '../FavoriteProduct/FavoriteProduct.scss';

class FavoriteProduct extends Component {
  render() {
    return (
      <div className="all">
        <header className="olFavoriteBox">
          <ol className="favoriteList">
            <li>
              <a className="goLink" href="">
                <i className="fas fa-home" />
              </a>
            </li>
            <li>
              <i className="fas fa-angle-right" />
            </li>
            <li className="goSignUp">마이쇼핑</li>
            <li>
              <i className="fas fa-angle-right" />
            </li>
            <li className="goSignUp">관심상품</li>
          </ol>
        </header>
        <div className="loginKo">
          <h2 className="nameLogin">관심상품</h2>
        </div>
        <div id="table">
          <p className="message">관심상품이 내역이 없습니다.</p>
          <div className="row">
            <ul className="menuBar">
              <li>
                <input className="checkBox" type="checkbox" />
              </li>
              <li>이미지</li>
              <li>상품정보</li>
              <li>판매가</li>
              <li>적립금</li>
              <li>배송구분</li>
              <li>배송비</li>
              <li>합계</li>
              <li>선택</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteProduct;
