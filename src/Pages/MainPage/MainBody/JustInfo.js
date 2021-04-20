import React, { Component } from 'react';
import './JustInfo.scss';

export default class JustInfo extends Component {
  render() {
    return (
      <div className="justInfo">
        <div className="heightLine"></div>
        <p className="desc">라이프 큐레이션 코스메틱</p>
        <h1 className="brand">DUFT&DOFT</h1>
        <p className="subDesc">
          아침부터 저녁까지 쉴 틈 없이 돌아가는
          <br />
          현대 도시인의 삶.
          <br />
          문장에도 쉼표가 필요하듯
          <br />
          우리의 삶에도 쉼이 필요해요.
          <br />
          <br />
          좋아하는 향의 제품으로 케어해보세요.
          <br />
          지친 하루 끝, 향기로운 위로로 다가갈게요.
        </p>
        <p className="viewMore">VIEW MORE</p>
        <img
          className="productImage"
          src="//duftndoft.com/web/product/medium/202103/9655f27038725ecf16a260a7965532d4.jpg"
          alt="product"
        />
      </div>
    );
  }
}
