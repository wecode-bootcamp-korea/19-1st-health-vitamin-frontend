import React, { Component } from 'react';
import './RealReview.scss';

export default class RealReview extends Component {
  render() {
    return (
      <div className="realReview">
        <h1 className="header">REAL REVIEW</h1>
        <div className="reviewList">
          <div className="review">
            <img
              src="//assets4.cre.ma/p/duftndoft-com/reviews/00/00/03/72/05/image1/portrait_1d4e19cf0dab9d8e.jpg"
              alt="review"
              className="reviewImage"
            />
            <p className="content">
              오늘아침에 소피소피 핸드워시로 손을 닦고 소피소피 샴푸로
            </p>
            <div className="userInfo">
              <span className="userId">****9086114@k</span>
              <span className="createdAt">2021.03.25</span>
            </div>
            <div className="forWidLine"></div>
            <div className="product">
              <img
                src="//duftndoft.com/web/product/medium/202104/22ba66e491e3b7d17887529aa11a4e49.jpg"
                alt="product"
                className="productImage"
              />
              <div className="productInfo">
                <p className="name">퍼퓸드 헤어 샴푸 500ml(3종입니다.</p>
                <div className="reviewInfo">
                  <span className="reviewCount">
                    리뷰 <span className="reviewValue">174</span>
                  </span>
                  <span className="grade">
                    평점 <span className="gradeValue">4.8</span>{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
