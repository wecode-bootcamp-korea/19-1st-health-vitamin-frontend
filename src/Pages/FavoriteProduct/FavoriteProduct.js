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
          <p class="message">관심상품이 내역이 없습니다.</p>
          {/* <div className="row">
            <table>
              <tr>
                <th scope="col"></th>
                <th scope="col">이미지</th>
                <th scope="col">상품정보</th>
                <th scope="col">판매가</th>
                <th scope="col">적립금</th>
                <th scope="col">배송구분</th>
                <th scope="col">배송비</th>
                <th scope="col">합계</th>
                <th scope="col">선택</th>
              </tr>
              <tr></tr>
            </table>
          </div> */}
        </div>
      </div>
    );
  }
}

export default FavoriteProduct;
