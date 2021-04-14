import React, { Component } from 'react';
import ProductSub from './ProductSub';
import ProductCountBox from './ProductCountBox';
import ProductTotalBox from './ProductTotalBox';
import ProductInfoButtonBox from './ProductInfoButtonBox';
import ProductImageBox from './ProductImageBox';
import ProductDescript from './ProductDescript';
import './ProductDetail.scss';

export default class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      imageList: [],
      currentImageUrl: '',
      subItemList: [],
      subItemAddList: [],
      originPrice: 0, //
      totalPrice: 0,
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
          originPrice: data.price,
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
    let isDistint = false;

    for (let i = 0; i < subItemAddList.length; i++) {
      if (subItemAddList[i].id === item.id) {
        isDistint = true;
        break;
      }
    }

    if (!isDistint) {
      this.setState({
        subItemAddList: [...subItemAddList, item],
      });
    }
  };

  updateSubItemList = (count, index) => {
    let { subItemAddList } = this.state;

    this.setState({
      subItemAddList: subItemAddList.map(el => {
        if (el.id === index) {
          el.count = count;
        }
        return el;
      }),
    });
  };

  deleteSubItemList = index => {
    let { subItemAddList } = this.state;
    this.setState({
      subItemAddList: subItemAddList.filter(el => el.id !== index),
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
          {this.state.subItemAddList.map(el => {
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
              this.state.originPrice +
              this.state.subItemAddList.reduce((acc, cur) => {
                return acc + cur.price * cur.count;
              }, 0)
            }
          />
          <ProductInfoButtonBox />
        </div>
      </div>
    );
  }
}

// updateTotalPrice = subList => {
//   let tp = this.state.originPrice;
//   subList.forEach(el => {
//     tp += el.price;
//   });
//   this.setState({
//     totalPrice: tp,
//   });
// };
