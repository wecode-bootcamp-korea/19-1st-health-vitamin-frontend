import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { prImg, prTitle, prPrice, prDiscount, prCount } = this.props;
    return (
      <li className="item">
        <input type="checkbox" />
        <img className="item_img" src={prImg} alt="히히힣" />
        <div>{prTitle}</div>
        <div>{prPrice}</div>
        <div className="item_count">
          <input type="text" value={prCount} />
          <div className="count_box">
            <i className="fas fa-sort-up"></i>
            <i className="fas fa-sort-down"></i>
          </div>
        </div>
        <div>-</div>
        <div>기본배송</div>
        <div>2,500원</div>
        <div>{Number(prPrice) * Number(prCount)}원</div>
        <div className="select">
          <button type="submit">주문하기</button>
          <button type="submit">관심상품등록</button>
          <button type="submit">x 삭제</button>
        </div>
      </li>
    );
  }
}

export default Item;
