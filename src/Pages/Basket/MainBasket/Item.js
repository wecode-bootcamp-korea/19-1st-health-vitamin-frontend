import React, { Component } from 'react';
import SalePrice from '../../../Components/SalePrice/SalePrice';
import ItemHide from '../../../Components/SalePrice/SalePrice';
class Item extends Component {
  upClick = () => {
    this.props.changeCount(this.props.id, this.props.prCount + 1);
  };

  downClick = () => {
    this.props.changeCount(this.props.id, this.props.prCount - 1);
  };

  countOnChange = () => {};

  deleteItem = () => {
    this.props.deleteBasketItem(this.props.id);
  };

  // 계산식
  calculate = (prDiscount, prPrice, prCount) => {
    if (prDiscount !== 0) {
      const sales = (prPrice - prPrice * 0.01 * prDiscount) * prCount;
      return sales;
    } else {
      const noSales = prPrice * prCount;
      return noSales;
    }
  };

  render() {
    const { prImg, prTitle, prPrice, prDiscount, prCount } = this.props;

    return (
      <li className="item">
        <input
          className="bk_check"
          onChange={this.allChecked}
          type="checkbox"
          value={this.props.allChecked}
        />
        <img className="bk_img item_img" src={prImg} alt="히히힣" />
        <div className="bk_pdInfo">{prTitle}</div>
        <div>
          <div
            className={
              prDiscount === 0
                ? 'info item_price_noDiscount bk_price'
                : 'info item_price bk_price'
            }
          >
            {prPrice.toLocaleString('en-US')}원
          </div>
          <div>
            {prDiscount !== 0 && (
              <SalePrice price={prPrice} discount={prDiscount} />
            )}
          </div>
        </div>

        <div className="bk_count item_count">
          <input type="number" value={prCount} onChange={this.countOnChange} />
          <div className="count_box">
            <i onClick={this.upClick} className="fas fa-sort-up"></i>
            <i onClick={this.downClick} className="fas fa-sort-down"></i>
          </div>
        </div>
        <div className="bk_plus">-</div>
        <div className="bk_dilivery_type">기본배송</div>
        <div className="bk_dilivery">2,500원</div>
        <div className="bk_sum">
          {(prDiscount !== 0
            ? (prPrice - prPrice * 0.01 * prDiscount) * prCount
            : prPrice * prCount
          ).toLocaleString('en-US')}
          원
        </div>
        <div className="bk_choose">
          <button type="submit">주문하기</button>
          <button type="submit">관심상품등록</button>
          <button onClick={this.deleteItem} type="submit">
            x 삭제
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
