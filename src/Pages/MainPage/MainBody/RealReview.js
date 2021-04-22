import React, { Component } from 'react';
import './RealReview.scss';

export default class RealReview extends Component {
  constructor() {
    super();

    this.state = {
      reviewList: [],
    };
  }

  componentDidMount() {
    fetch('/data/MainData/Review.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data.REAL_REVIEW,
        });
      });
  }

  makeAnonymousAccount = user_account => {
    return '****' + user_account.slice(4, user_account.length);
  };

  getReviewValue = () => {
    return Math.round(Math.random() * 50 + 150);
  };

  getGradeValue = () => {
    return Math.round(Math.random() * 10 + 40) / 10;
  };

  render() {
    const { reviewList } = this.state;
    return (
      <div className="realReview">
        <h1 className="header">REAL REVIEW</h1>
        <div className="reviewList">
          {reviewList.map(review => {
            const {
              product_image,
              product_name,
              review_id,
              uploaded_at,
              user_account,
              user_review,
              user_review_image,
            } = review;

            return (
              <div key={review_id} className="review">
                {user_review_image ? (
                  <img
                    src={user_review_image}
                    alt="review"
                    className="reviewImage"
                  />
                ) : (
                  <i className="fas fa-exclamation-circle" />
                )}
                <p className="content">{user_review}</p>
                <div className="userInfo">
                  <span className="userId">
                    {this.makeAnonymousAccount(user_account)}
                  </span>
                  <span className="createdAt">{uploaded_at.slice(0, 10)}</span>
                </div>
                <div className="forWidLine"></div>
                <div className="product">
                  <img
                    src={product_image}
                    alt="product"
                    className="productImage"
                  />
                  <div className="productInfo">
                    <p className="name">{product_name}</p>
                    <div className="reviewInfo">
                      <span className="reviewCount">
                        리뷰
                        <span className="reviewValue">
                          {this.getReviewValue()}
                        </span>
                      </span>
                      <span className="grade">
                        평점
                        <span className="gradeValue">
                          {this.getGradeValue()}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
