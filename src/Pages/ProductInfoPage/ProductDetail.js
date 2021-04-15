import React, { Component } from 'react';
import ProductSub from './ProductSub';
import ProductCountBox from './ProductCountBox';
import ProductTotalBox from './ProductTotalBox';
import ProductInfoButtonBox from './ProductInfoButtonBox';
import ProductImageBox from './ProductImageBox';
import ProductDescript from './ProductDescript';
import './ProductDetail.scss';

const BUTTONS = [
  {
    id: 1,
    name: '바로 구매하기',
    className: 'btnBuy btn',
  },
  {
    id: 2,
    name: '장바구니',
    className: 'btnBasket btn',
  },
  {
    id: 3,
    name: '관심상품',
    className: 'btnInterest btn',
  },
];

export default class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      imageList: [],
      currentImageUrl: '',
      subItemList: [],
      subItemAddList: [],
      price: 0,
    };
  }

  componentDidMount() {
    fetch('/data/ProductInfoData/productDetail.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          imageList: data.imageList,
          currentImageUrl: data.imageList[0].imageUrl,
          subItemList: data.subItemList,
          price: data.price,
        });
      });
  }

  changeCurrentImage = id => {
    this.setState({
      currentImageUrl: this.state.imageList[id - 1].imageUrl,
    });
  };

  // TODO: 배열의 값이 중복이 없으면 추가하는로직인데,
  // 뭔가 더 단축시킬 수 있는 방법은 없는지 궁금합니다!
  addSubItemList = item => {
    let { subItemAddList } = this.state;

    if (!subItemAddList.includes(item.id)) {
      this.setState({
        subItemAddList: [...subItemAddList, item.id],
      });
    }
  };

  updateSubItemList = (count, index) => {
    let { subItemList } = this.state;

    this.setState({
      subItemList: subItemList.map(el => {
        el.count = el.id === index ? count : el.count;
        return el;
      }),
    });
  };

  deleteSubItemList = index => {
    let { subItemList, subItemAddList } = this.state;
    this.setState({
      subItemAddList: subItemAddList.filter(el => el !== index),
      subItemList: subItemList.map(el => {
        el.count = el.id === index ? 1 : el.count;
        return el;
      }),
    });
  };

  render() {
    return (
      <div className="productDetail">
        <div className="imageBox">
          <img
            className="productImage"
            src={this.state.currentImageUrl}
            alt="main"
          ></img>

          <ProductImageBox
            imageList={this.state.imageList}
            changeCurrentImage={this.changeCurrentImage}
          />
          <div className="expandImageBox">
            <i className="fas fa-search"></i>&nbsp;
            <span className="expandImageSpan">확대보기</span>
          </div>
        </div>
        <div className="infoBox">
          <ProductDescript />
          <p className="guideArea">(최소주문수량 1개 이상)</p>
          <ProductSub
            subItemList={this.state.subItemList}
            addSubItemList={this.addSubItemList}
          />
          <p className="alertCount">
            <span className="alertCountSpan">!</span>
            &nbsp;&nbsp;수량을 선택해주세요.
          </p>
          {this.state.subItemList
            .filter(el => this.state.subItemAddList.includes(el.id))
            .map(el => {
              return (
                <ProductCountBox
                  key={el.id}
                  item={el}
                  updateSubItemList={this.updateSubItemList}
                  deleteSubItemList={this.deleteSubItemList}
                />
              );
            })}
          <ProductTotalBox
            totalPrice={
              this.state.price +
              this.state.subItemList
                .filter(el => this.state.subItemAddList.includes(el.id))
                .reduce((acc, cur) => {
                  if (!cur.count) cur.count = 1;
                  return acc + cur.price * cur.count;
                }, 0)
            }
          />
          <ProductInfoButtonBox BUTTONS={BUTTONS} />
        </div>
      </div>
    );
  }
}
