import React, { Component } from 'react';
import './ProductSub.scss';
import ProductSubHeader from './ProductSubHeader';
import ProductSubItem from './ProductSubItem';

export default class ProductSub extends Component {
  render() {
    const { subItemList, addSubItemList } = this.props;
    return (
      <div className="productSub">
        <ProductSubHeader />
        <div className="subItemBox">
          {subItemList.map((el, index) => {
            return (
              <ProductSubItem
                key={el.image_id}
                subItem={el}
                id={el.id}
                addSubItemList={addSubItemList}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
