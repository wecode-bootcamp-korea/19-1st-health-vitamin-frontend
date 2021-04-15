import React, { Component } from 'react';
import './SafeNumberService.scss';

export default class SafeNumberService extends Component {
  render() {
    const { isDiplay } = this.props;
    return (
      <>
        {isDiplay && (
          <div className="safeNumberServiceBox">
            <div className="SafeNumberService">
              <div>
                <input
                  type="checkbox"
                  className="safeService"
                  name="safeService"
                />
                <label for="safeService">안심번호 서비스 사용 (무료)</label>
              </div>

              <span>안내 &gt;</span>
            </div>

            <div className="SelectMessage">
              <select name="message" className="message">
                <option value="0">-- 메시지 선택 (선택사항) --</option>
                <option value="1">배송 전에 미리 연락바랍니다.</option>
                <option value="2">부재 시 경비실에 맡겨주세요.</option>
                <option value="3">부재 시 문 앞에 놓아주세요.</option>
                <option value="4">빠른 배송 부탁드립니다.</option>
                <option value="5">택배함에 보관해 주세요.</option>
                <option value="self">직접 입력</option>
              </select>
            </div>

            <div className="SaveDeliveryBasis">
              <input type="checkbox" className="saveBasis" name="saveBasis" />
              <label for="safeService">기본 배송지로 저장</label>
            </div>
          </div>
        )}
      </>
    );
  }
}
