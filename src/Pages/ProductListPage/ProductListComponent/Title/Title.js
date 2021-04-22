import React, { Component } from 'react';
import SubTitle from './SubTitle';
import './Title.scss';

class Title extends Component {
  render() {
    console.log(this.props.categoryList);
    const { categoryList } = this.props;
    return (
      <header className="title">
        <div className="category_title">{categoryList.main_category_name}</div>
        <ul className="category_sub">
          {categoryList.main_category_list.map(cate => {
            return (
              <SubTitle
                key={cate.category_id}
                categoryName={cate.category_name}
              />
            );
          })}

          {/* <li className="sub_title">
            비타민A <span>(10)</span>
          </li>

          <li className="sub_title">
            비타민C <span>(10)</span>
          </li>

          <li className="sub_title">
            비타민D <span>(10)</span>
          </li>

          <li className="sub_title">
            비타민E <span>(10)</span>
          </li> */}
        </ul>
      </header>
    );
  }
}

export default Title;
