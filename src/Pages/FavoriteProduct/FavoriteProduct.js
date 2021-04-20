import React, { Component } from 'react';
import '../FavoriteProduct/FavoriteProduct.scss';

class FavoriteProduct extends Component {
  constructor() {
    super();

    this.state = {
      favoritList: [],
      orderItem: [],
      deleteItem: [],
    };
  }
  componentDidMount() {
    fetch('/data/Favorite/Favorite.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          favoritList: data,
        });
      });
  }

  orderItem = () => {};

  render() {
    console.log(this.state.favoritList);
    return (
      <div className="allFavorite">
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
            {this.state.favoritList.length > 0 ? (
              <div className="row">
                <ul>
                  <li className="menuBar">
                    <span>
                      <input className="checkBox" type="checkbox" />
                    </span>
                    <span>이미지</span>
                    <span>상품정보</span>
                    <span>판매가</span>
                    <span>적립금</span>
                    <span>배송구분</span>
                    <span>배송비</span>
                    <span>합계</span>
                    <span>선택</span>
                  </li>
                </ul>

                {this.state.favoritList.map(favorite => {
                  console.log(favorite);
                  return (
                    <ul>
                      <li className="menuItem">
                        <span>
                          <input className="checkBox" type="checkbox" />
                        </span>
                        {/* <img src={"//duftndoft.com/web/product/medium/202104/fe4f11b5d7b4c8bb2c34d4c6ee717d45.jpg"} /> */}
                        <img src={favorite.imageUrl} />

                        <span>{favorite.name}</span>
                        <span>{favorite.price}</span>
                        <span>적립금</span>
                        <span>{favorite.delivery}</span>
                        <span>배송비</span>
                        <span>합계</span>
                        <span>
                          <div className="select">
                            <button onClick={this.orderItem} type="submit">
                              주문하기
                            </button>
                            <button>장바구니담기</button>
                            <button onClick={this.deleteItem}>x 삭제</button>
                          </div>
                        </span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            ) : (
              <p className="message">관심상품이 내역이 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteProduct;
