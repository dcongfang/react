import React, { Component } from 'react';
import './personal.styl'
class Personal extends Component {
  state = {}
  render() {
    return (
      <div>
        <div className="title-bar">
          <h1 className="nav-title">个人中心</h1>
        </div>
        <div className="main-wrapper">
          <div className="page-for-center">
            <div className="wrapper">
              <div className="avatar">
                <img src={[require('../../assets/images/avatar.png')]} width="100%" height="100%" alt="" />
              </div>
              <div className="box-userinfo">登录/注册</div>
              <div className="arrow-right-icon">></div>
            </div>
            <div className="menu-list-parallel">
              <div className="icon-order">
                <img src={[require('../../assets/images/qbdd.png')]} alt=""/>
                <p>全部订单</p>
              </div>
              <div className="icon-order">
                <img src={[require('../../assets/images/dfk.png')]} alt=""/>
                <p>待付款</p>
              </div>
              <div className="icon-order">
                <img src={[require('../../assets/images/dsh.png')]} alt=""/>
                <p>待收货</p>
              </div>
              <div className="icon-order">
                <img src={[require('../../assets/images/sh.png')]} alt=""/>
                <p>售后</p>
              </div>
            </div>
          </div>
          <div className="menu-list-vertical">
            <div className="arrow-right-icons">
              <div className="text-con">
                地址管理
              </div>
              <div className="arrow-right-icon">></div>
            </div>
            <div className="arrow-right-icons">
              <div className="text-con">
                我的优惠券
              </div>
              <div className="arrow-right-icon">></div>
            </div>
            <div className="arrow-right-icons">
              <div className="text-con">
                优先购买码
              </div>
              <div className="arrow-right-icon">></div>
            </div>
            <div className="arrow-right-icons">
              <div className="text-con">
                提货兑换卡
              </div>
              <div className="arrow-right-icon">></div>
            </div>
          </div>
          <div className="menu-list-vertical1">
          <div className="arrow-right-icons">
              <div className="text-con">
                常见问题
              </div>
              <div className="arrow-right-icon">></div>
            </div>
            <div className="arrow-right-icons">
              <div className="text-con">
                服务支持
              </div>
              <div className="arrow-right-icon">></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;