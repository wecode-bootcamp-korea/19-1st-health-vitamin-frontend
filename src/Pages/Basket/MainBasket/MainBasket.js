import React, { Component } from 'react';
import './MainBasket.scss';

class MainBasket extends Component {
  render() {
    return (
      <main className="main_basket">
        <div className="first_box">
          ✅1번 박스
          <div className="basket_top">일반상품 (2)</div>
          <div className="check">
            <div className="check_info">
              <div className="info_list">
                <input className="check_list" type="checkbox" />
                <div className="check_list">이미지</div>
                <div className="check_list">상품정보</div>
                <div className="check_list">판매가</div>
                <div className="check_list">수량</div>
                <div className="check_list">적립금</div>
                <div className="check_list">배송 구분</div>
                <div className="check_list">배송비</div>
                <div className="check_list">합계</div>
                <div className="check_list">선택</div>
              </div>
              <ul className="basket_items">
                <li className="item">
                  <input type="checkbox" />
                  <img
                    src="//duftndoft.com/web/product/tiny/202012/675f6c43cad1b43736ffe0d3f4b22114.jpg"
                    alt="히히힣"
                  />
                  <div>핑크브리즈 틴티드 립밤</div>
                  <div>9800</div>
                  <div className="item_count">
                    <input type="text" value="1" />
                    <div className="count_box">
                      <i className="fas fa-sort-up"></i>
                      <i className="fas fa-sort-down"></i>
                    </div>
                  </div>
                  <div>-</div>
                  <div>기본배송</div>
                  <div>2,500원</div>
                  <div>9,800원</div>
                  <div className="celecter">
                    <button type="submit">주문하기</button>
                    <button type="submit">관심상품등록</button>
                    <button type="submit">x 삭제</button>
                  </div>
                </li>
              </ul>
              <div className="calculator">
                <div className="delivery_box">
                  <div className="delivery_type">[기본배송]</div>
                  <div className="delivery_sum">
                    상품구매금액{21900}+배송비{(2, 500)}-상품할인금액{4200}
                    =합계:
                    {20200}원
                  </div>
                </div>
                <div className="move_item">
                  <div className="move">
                    선택상품을
                    <button>x삭제하기</button>
                    <button>해외배송상품 장바구니로 이동</button>
                  </div>
                  <div className="empty">
                    <button>장바구니비우기</button>
                    <button>견적서출력</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second_box">
          ✅2번 박스
          <div className="sum_categori">
            <div>총 상품금액</div>
            <div>총 배송비</div>
            <div>
              총 할인금액<button>내역보기</button>
            </div>
            <div>결제예상금액</div>
          </div>
          <div className="sum_number">
            <div>{(21, 900)}원</div>
            <div>+2,500원</div>
            <div>-4,200원</div>
            <div>=20,200원</div>
          </div>
        </div>
      </main>
    );
  }
}

export default MainBasket;
