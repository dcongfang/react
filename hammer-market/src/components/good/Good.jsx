import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Icon, Toast} from 'antd-mobile'
import Swiper from 'swiper/dist/js/swiper.js'
import './good.styl'
class Good extends Component {
  state = {
    good: []
  }
  componentWillMount() {
    const id = this.props.match.params.id;
    this.setState({
      good: this.props.location.state.goods[id]
    })
  }
  componentDidMount() {
    if (this.state.good !== []) {
      new Swiper('#swiper1', {
        loop: true,
        spaceBetween : 20,
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'my-bullet-active',
        }
      });
    }
  }
  handleAddToCart = (good) => {
      return () => {
        this.props.addToGoods(good)
      }
  }
  successToast = () => {
    Toast.success('添加成功', 1);
  }
  render() {
    const {good} = this.state
    // console.log(good)
    return (
      <div>
        <div className="title-bar">
          <Link to="/shopIndex" className="nav-back">
            <Icon type="left" size="xs" className="icon-left"></Icon>
            <div className="nav-text">返回</div>
          </Link>
          <h2 className="nav-title">{good.title}</h2>
        </div>
        <div className="fix-header-tabbox">
          <div className="box-line">
            <div>商品</div>
          </div>
          <div className="box-line">
            <div>详情</div>
          </div>
          <div className="box-line">
            <div>参数</div>
          </div>
          <div className="box-line">
            <div>推荐</div>
          </div>
        </div>
        <div className="swiper-container" id="swiper1">
          <div className="swiper-wrapper" >
            {
              good.imgUrl.map((item, i) => {
                return (
                  <div className="swiper-slide" key={i}>
                    <img src={item.img} width="100%" height="100%" alt=""/>
                  </div>
                )
              })
            }
            </div>
          <div className='swiper-pagination'></div>
        </div>
        <div className="bg-color"></div>
        <div className="item-titlebox">
          <div className="title-content">
            <h4>{good.title}</h4>
            <p>{good.text}</p>
            <div className="price">
              {good.price}
            </div>
          </div>
        </div>
        <div className="activities">
          <div className="activities-title">优惠信息</div>
          <div className="activities-list">
            <div className="activities-item">
              秒杀
            </div>
            <div className="special-num-words">
                人气好物限量秒杀，仅此一天
            </div>
          </div>
        </div>
        <div className="footer-line">
        <div className="cart-entry">
          <Link to="/cart" className="tag-img">
            <div className="tag">
              <span>{this.props.list.length}</span>
            </div>
            <div className="cart-img">
              <img src={[require('../../assets/images/shop.png')]} width="100%" height="100%" alt=""/>
            </div>
          </Link>
        </div>
        <div className="btn" onClick={this.successToast}>
          <button className="btn1" onClick={this.handleAddToCart(good)}>加入购物车</button>
        </div>
        <div className="btn">
          <button className="btn2">现在购买</button>
        </div>
      </div>
      </div>
     );
  }
}
 
export default Good;