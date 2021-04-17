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
      name: '',
      detail: '',
      price: 0,
      shipping_fee: 0,
      discount: 0,
      minimum_free: 0,
      imageList: [],
      subItemList: [],

      currentImageUrl: '',
      subItemAddList: [],
    };
  }

  componentDidMount() {
    // this.fetchProductDetailItem();
    this.fetchProductDetailItemForTest();
  }

  fetchProductDetailItem = () => {
    fetch('/data/ProductInfoData/productDetail.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          imageList: data.imageList,
          currentImageUrl: data.imageList[0].imageUrl,
          subItemList: data.subItemList,
          price: data.price,
        });
      });
  };

  fetchProductDetailItemForTest = () => {
    fetch('/data/ProductInfoData/testDetail.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          imageList: data.result.detail_images,
          currentImageUrl: data.imageList[0].imageUrl,
          subItemList: data.subItemList,
          price: data.price,
        });
      });
  };

  changeCurrentImage = index => {
    this.setState({
      currentImageUrl: this.state.imageList[index - 1].imageUrl,
    });
  };

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
      subItemList: subItemList.map(item => {
        item.count = item.id === index ? count : item.count;
        return item;
      }),
    });
  };

  deleteSubItemList = index => {
    let { subItemList, subItemAddList } = this.state;
    this.setState({
      subItemAddList: subItemAddList.filter(item => item !== index),
      subItemList: subItemList.map(item => {
        item.count = item.id === index ? 1 : item.count;
        return item;
      }),
    });
  };

  render() {
    const {
      currentImageUrl,
      imageList,
      subItemList,
      subItemAddList,
      price,
    } = this.state;

    const {
      changeCurrentImage,
      addSubItemList,
      updateSubItemList,
      deleteSubItemList,
    } = this;

    return (
      <div className="productDetail">
        <div className="imageBox">
          <img className="productImage" src={currentImageUrl} alt="main" />
          <ProductImageBox
            imageList={imageList}
            changeCurrentImage={changeCurrentImage}
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
            subItemList={subItemList}
            addSubItemList={addSubItemList}
          />
          <p className="alertCount">
            <span className="alertCountSpan">!</span>
            &nbsp;&nbsp;수량을 선택해주세요.
          </p>
          {subItemList
            .filter(el => subItemAddList.includes(el.id))
            .map(el => {
              return (
                <ProductCountBox
                  key={el.id}
                  item={el}
                  updateSubItemList={updateSubItemList}
                  deleteSubItemList={deleteSubItemList}
                />
              );
            })}
          <ProductTotalBox
            totalPrice={
              price +
              subItemList
                .filter(el => subItemAddList.includes(el.id))
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
