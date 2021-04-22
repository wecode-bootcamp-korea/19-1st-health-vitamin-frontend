import React, { Component } from 'react';
import './HotKeyword.scss';

const nameList = [
  '# 우리 아이 성장에 쑥쑥! 도움이 되는!',
  '# 수험생인 우리 아이, 집중력을 높이고 싶을 땐?',
  '# 탄력 있는 피부를 원해요! (비타민 a)',
  '# 눈이 침침해졌다고 느낄 땐?(비타민 c)',
];

export default class HotKeyword extends Component {
  constructor() {
    super();
    this.state = {
      tagCategoryList: {},
      curruntCategory: '',
    };
  }

  componentDidMount() {
    // fetch('localhost:8000/products/main-hashtag')
    fetch('/data/MainData/Hashtag.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          tagCategoryList: data,
          curruntCategory: Object.keys(data)[0],
        });
      });
  }

  categoryClickHandler = category => {
    this.setState({
      curruntCategory: category,
    });
  };

  render() {
    const { tagCategoryList, curruntCategory } = this.state;
    console.log(tagCategoryList);
    return (
      <div className="hotKeyword">
        <div className="content">
          <div className="header">
            <h2 className="title">라인별 HOT 키워드</h2>
            <p className="desc">향기 맛집 더프트앤도프트.</p>
            <ul className="categoryList">
              {Object.keys(tagCategoryList).map((category, i) => {
                return (
                  <li
                    key={category}
                    className="category"
                    onClick={() => this.categoryClickHandler(category)}
                  >
                    <span
                      className={
                        'liContent ' +
                        (category === curruntCategory && ' select')
                      }
                    >
                      {nameList[i]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="productList">
            {tagCategoryList[curruntCategory] &&
              tagCategoryList[curruntCategory].map(product => {
                const { image, name, price, product_id, discount } = product;
                return (
                  <div key={product_id} className="product">
                    <img className="productImage" src={image} alt="product" />
                    <p className="name">
                      {name}
                      <i className="fas fa-search" />
                    </p>
                    <p className="price">{price.toLocaleString()}원</p>
                    <p className="result">
                      <span className="applyPrice">
                        {(price - (price * discount) / 100).toLocaleString()}원
                      </span>
                      <span className="discount">({discount}%)할인</span>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
