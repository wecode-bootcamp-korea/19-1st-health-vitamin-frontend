import React, { Component } from 'react';
import Item from './Item';
import './MainBasket.scss';

class MainBasket extends Component {
  render() {
    const { odList } = this.props;
    return (
      <main className="main_basket">
        <div className="products_basket">
          <span>✅</span>
          <span>1번 박스</span>
          <div className="basket_top">일반상품 ({odList.length})</div>
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
                {odList.map(item => {
                  return (
                    <Item
                      key={item.id}
                      prImg={item.image}
                      prTitle={item.name}
                      prPrice={item.price}
                      prDiscount={item.discount}
                      prCount={item.many}
                    />
                  );
                })}
              </ul>

              <div className="calculator">
                <div className="delivery_box">
                  <div className="delivery_type">[기본배송]</div>
                  <div className="delivery_sum">
                    {`상품구매금액 ${1} + 배송비 ${1} - 상품할인금액 ${1} = 합계:`}
                    {}
                    {1} 원
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

        <div className="products_sum">
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
