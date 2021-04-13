import React, { Component } from 'react';
import './ProductSub.scss';
import ProductSubHeader from './ProductSubHeader';
import ProductSubItem from './ProductSubItem';

export default class ProductSub extends Component {
  render() {
    return (
      <div className="productSub">
        <ProductSubHeader />
        <div className="subItemBox">
          {this.props.subItemList.map(el => {
            return (
              <ProductSubItem
                key={el.name}
                subItem={el}
                addSubItemList={this.props.addSubItemList}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
