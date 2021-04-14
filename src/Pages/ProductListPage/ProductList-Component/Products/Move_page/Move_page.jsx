import React, { Component } from 'react';
import './Move_page.scss';

class Move_page extends Component {
  render() {
    return (
      <div className="change_page">
        <div className="change left">
          <div className="change-btn">
            <button>
              <i class="change-icon fas fa-angle-left"></i>
            </button>
          </div>
          <div className="change-btn">
            <button>
              <i class="change-icon fas fa-angle-double-left"></i>
            </button>
          </div>
        </div>
        <div className="page">1</div>
        <div className="change right">
          <div className="change-btn">
            <button>
              <i class="change-icon fas fa-angle-right"></i>
            </button>
          </div>
          <div className="change-btn">
            <button>
              <i class="change-icon fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Move_page;
