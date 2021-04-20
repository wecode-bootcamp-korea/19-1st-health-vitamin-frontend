import React, { Component } from 'react';
import './HotKeyword.scss';

export default class HotKeyword extends Component {
  render() {
    return (
      <div className="hotKeyword">
        <div className="header">
          <h2 className="title">라인별 HOT 키워드</h2>
          <p className="desc">향기 맛집 더프트앤도프트.</p>
          <ul className="categoryList">
            <li className="category">
              <span className="liContent"># 꿈꿔왔던 향기 보습</span>
            </li>
            <li className="category">
              <span className="liContent"># 온몸을 감싸는 다양한 향기</span>
            </li>
            <li className="category">
              <span className="liContent"># 순하고 향기로운</span>
            </li>
            <li className="category">
              <span className="liContent"># 향기 스타일링</span>{' '}
            </li>
            <li className="category">
              <span className="liContent"># 선물세트</span>{' '}
            </li>
          </ul>
        </div>
        <div className="productList">
          <div className="product">
            <img
              className="productImage"
              src="//duftndoft.com/web/product/medium/202104/22ba66e491e3b7d17887529aa11a4e49.jpg"
              alt="product"
            />
            <p className="name">
              포밍 핸드워시+리필2개(선택) <i className="fas fa-search"></i>
            </p>
            <p className="price">10,900원</p>
            <p className="result">
              <span className="applyPrice">7,900원</span>
              <span className="discount">(28%)할인</span>
            </p>
          </div>
          <div className="product">
            <img
              className="productImage"
              src="//duftndoft.com/web/product/medium/202104/22ba66e491e3b7d17887529aa11a4e49.jpg"
              alt="product"
            />
            <p className="name">
              포밍 핸드워시+리필2개(선택) <i className="fas fa-search"></i>
            </p>
            <p className="price">10,900원</p>
            <p className="result">
              <span className="applyPrice">7,900원</span>
              <span className="discount">(28%)할인</span>
            </p>
          </div>
          <div className="product">
            <img
              className="productImage"
              src="//duftndoft.com/web/product/medium/202104/22ba66e491e3b7d17887529aa11a4e49.jpg"
              alt="product"
            />
            <p className="name">
              포밍 핸드워시+리필2개(선택) <i className="fas fa-search"></i>
            </p>
            <p className="price">10,900원</p>
            <p className="result">
              <span className="applyPrice">7,900원</span>
              <span className="discount">(28%)할인</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
