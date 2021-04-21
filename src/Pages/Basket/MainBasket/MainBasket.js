import React, { Component } from 'react';
import Item from './Item';
import './MainBasket.scss';

class MainBasket extends Component {
  constructor() {
    super();
    this.state = {
      allCheck: false,
    };
  }

  switchCheckBtn = () => {
    let { allCheck } = this.state;
    this.setState({
      // itemCheck: allCheck ? false : true,
      itemCheck: !allCheck,
    });
  };

  render() {
    const { odList } = this.props;
    return (
      <main className="main_basket">
        <div className="products_basket">
          {/* 표 시작 */}
          <div className="basket_top">일반상품 ({odList.length})</div>
          <div className="check">
            <div className="check_info">
              {/* Info 카테고리  */}
              <div className="info_list">
                <input
                  // onClick={this.}
                  // checked={this.}
                  className="bk_check check_list"
                  type="checkbox"
                />
                <div className="bk_img check_list">이미지</div>
                <div className="bk_pdInfo check_list">상품정보</div>
                <div className="bk_price check_list">판매가</div>
                <div className="bk_count check_list">수량</div>
                <div className="bk_plus check_list">적립금</div>
                <div className="bk_dilivery_type check_list">배송 구분</div>
                <div className="bk_dilivery check_list">배송비</div>
                <div className="bk_sum check_list">합계</div>
                <div className="bk_choose check_list">선택</div>
              </div>
              {/* 여러 개의 물건들 */}
              <ul className="basket_items">
                {odList.map(item => {
                  return (
                    <Item
                      switchCheckBtn={this.switchCheckBtn}
                      deleteBasketItem={this.props.deleteBasketItem}
                      changeCount={this.props.changeCount}
                      key={item.id}
                      id={item.id}
                      prImg={item.image}
                      prTitle={item.name}
                      prPrice={item.price}
                      prDiscount={item.discount}
                      prCount={item.count}
                    />
                  );
                })}
              </ul>
              {/* [기본배송] 합계 */}
              <div className="calculator">
                <div className="delivery_box">
                  <div className="delivery_type">[기본배송]</div>
                  <div className="delivery_sum">
                    {`상품구매금액 ${1} + 배송비 {if ()} - 상품할인금액 ${1} = 합계:`}
                    {}
                    {1} 원
                  </div>
                </div>
                {/* 선택 상품을 btns */}
                <div className="move_item">
                  <div className="move">
                    선택상품을{'  '}
                    <button>
                      <i className="fas fa-times"></i> 삭제하기
                    </button>
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
          <div className="sum_categori">
            <div className="sum_all">총 상품금액</div>
            <div className="sum_dilivery">총 배송비</div>
            <div className="sum_discount">
              총 할인금액 <button>내역보기</button>
            </div>
            <div className="sum_expect">결제예정금액</div>
          </div>
          <div className="result">
            <div className="sum_all">{(21, 900)}원</div>
            <div className="sum_dilivery">+2,500원</div>
            <div className="sum_discount">-4,200원</div>
            <div className="sum_expect">=20,200원</div>
          </div>
        </div>
      </main>
    );
  }
}

export default MainBasket;
