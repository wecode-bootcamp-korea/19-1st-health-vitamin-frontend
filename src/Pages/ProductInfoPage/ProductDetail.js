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
      id: 0,
      name: '',
      detail: '',
      price: 0,
      count: 1,
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
    this.fetchProductDetailItem();
  }

  fetchProductDetailItem = () => {
    // fetch('/data/ProductInfoData/testDetail.json')
    fetch('http://10.167.105.102:8000/products/detail/2')
      .then(res => res.json())
      .then(data => {
        const {
          id,
          name,
          detail,
          price,
          shipping_fee,
          discount,
          minimum_free,
          detail_images,
          option_items,
        } = data.RESULT[0];
        this.setState({
          id,
          name,
          detail,
          price,
          shipping_fee,
          discount,
          minimum_free,
          imageList: detail_images,
          subItemList: option_items.filter(item => {
            item.count = 1;
            return item;
          }),
          currentImageUrl: detail_images[0].image_url,
        });
      });
  };

  changeCurrentImage = index => {
    this.setState({
      currentImageUrl: this.state.imageList[index].image_url,
    });
  };

  addSubItemList = id => {
    let { subItemAddList } = this.state;

    if (!subItemAddList.includes(id)) {
      this.setState({
        subItemAddList: [...subItemAddList, id],
      });
    }
  };

  updateSubItemList = (type, value, id) => {
    let { subItemList } = this.state;

    if (type === 'main') {
      this.setState({
        count: value,
      });
      return;
    }

    this.setState({
      subItemList: subItemList.map(item => {
        item.count = item.id === id ? value : item.count;
        return item;
      }),
    });
  };

  deleteSubItemList = (type, id) => {
    if (type === 'main') {
      alert('main 제품은 삭제할 수 없습니다.');
      return;
    }
    let { subItemList, subItemAddList } = this.state;
    this.setState({
      subItemAddList: subItemAddList.filter(item => item !== id),
      subItemList: subItemList.map(item => {
        item.count = item.id === id ? 1 : item.count;
        return item;
      }),
    });
  };

  render() {
    const {
      id,
      currentImageUrl,
      imageList,
      subItemList,
      subItemAddList,
      name,
      price,
      count,
      discount,
      shipping_fee,
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
          <img className="productImage" src={currentImageUrl} alt="product" />
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
          <ProductDescript
            name={name}
            price={price}
            count={count}
            discount={discount}
            shipping_fee={shipping_fee}
          />
          <p className="guideArea">(최소주문수량 1개 이상)</p>
          <ProductSub
            subItemList={subItemList}
            addSubItemList={addSubItemList}
          />
          <p className="alertCount">
            <span className="alertCountSpan">!</span>
            &nbsp;&nbsp;수량을 선택해주세요.
          </p>
          <ProductCountBox
            id={id}
            type={'main'}
            count={count}
            price={price}
            name={name}
            discount={discount}
            updateSubItemList={updateSubItemList}
            deleteSubItemList={deleteSubItemList}
          />
          {subItemList
            .filter(product => subItemAddList.includes(product.id))
            .map(product => {
              return (
                <ProductCountBox
                  key={product.id}
                  id={product.id}
                  type={'sub'}
                  name={product.name}
                  count={product.count}
                  price={product.price}
                  updateSubItemList={updateSubItemList}
                  deleteSubItemList={deleteSubItemList}
                />
              );
            })}
          <ProductTotalBox
            totalPrice={
              price * count -
              price * (discount / 100) * count +
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
