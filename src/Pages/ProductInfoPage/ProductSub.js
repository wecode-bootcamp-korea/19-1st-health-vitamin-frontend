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
          {subItemList.map(el => {
            return (
              <ProductSubItem
                key={el.name}
                subItem={el}
                addSubItemList={addSubItemList}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
