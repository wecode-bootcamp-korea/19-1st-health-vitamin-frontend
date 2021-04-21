import React, { Component } from 'react';
import './HotKeyword.scss';

export default class HotKeyword extends Component {
  constructor() {
    super();
    this.state = {
      tagCategoryList: {},
      curruntCategory: '',
      i: 0,
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
  rotate = () => {
    const { tagCategoryList, i, curruntCategory } = this.state;
    const list = Object.keys(tagCategoryList);
    if (list.length === 0) return;
    const tick = setTimeout(() => {
      this.setState({
        curruntCategory: list[i + 1],
        i: list.length - 1 < i ? i + 1 : 0,
      });
    }, 1000);
    return () => clearTimeout(tick);
  };
  componentWillUnmount() {}
  // changeOneSecond = (list, i) => {
  //   if (i >= list.length) i = 0;
  //   // this.setState({
  //   //   curruntCategory: list[i],
  //   // });
  //   console.log(i);
  //   i++;
  // };
  render() {
    // this.rotate();
    const { tagCategoryList, curruntCategory } = this.state;
    return (
      <div className="hotKeyword">
        <div className="content">
          <div className="header">
            <h2 className="title">라인별 HOT 키워드</h2>
            <p className="desc">향기 맛집 더프트앤도프트.</p>
            <ul className="categoryList">
              {Object.keys(tagCategoryList).map(category => {
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
                      {category}
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
