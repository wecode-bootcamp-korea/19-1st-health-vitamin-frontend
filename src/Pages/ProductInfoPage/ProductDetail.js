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
    };
  }

  componentDidMount() {
    fetch('/data/ProductInfoData/mainImageList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          imageList: data,
          currentImageUrl: data[0].imageUrl,
        });
      });

    // subItemList
    fetch('/data/ProductInfoData/subItemList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          subItemList: data,
        });
      });
  }

  changeCurrentImage = id => {
    this.setState({
      currentImageUrl: this.state.imageList[id - 1].imageUrl,
    });
  };

  addSubItemList = item => {
    this.setState(
      {
        subItemAddList: [...this.state.subItemAddList, item],
      },
      () => {
        let example = this.state.subItemAddList;
        this.setState(
          {
            subItemAddList: example.filter((item, i) => {
              return (
                example.findIndex((item2, j) => {
                  return item.id === item2.id;
                }) === i
              );
            }),
          },
          () => {
            // console.log(this.state.subItemAddList);
          }
        );
      }
    );
  };

  updateSubItemList = (count, index) => {};

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
            return <ProductCountBox key={el.id} item={el} />;
          })}
          <ProductTotalBox />
          <ProductInfoButtonBox />
        </div>
      </div>
    );
  }
}
