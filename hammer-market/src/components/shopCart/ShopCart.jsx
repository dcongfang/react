import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Checkbox} from 'antd-mobile'
import './shopCart.styl'
class ShopCart extends Component {
  state = { 
    totalPrice: 0,
    num: 0,
    list: [],
    allChecked: false,
    status: true,
    bgcolor: false
   }
   componentWillMount() { 
    let lists = this.uniq(this.props.list)
      this.setState({
      list: lists
      })
      localStorage.setItem('carts', JSON.stringify(lists))
      // window.localStorage.removeItem('carts')
  }
  computedTotalPrice = () => {
    let num = 0
    let list = this.state.list
    // console.log(list)
    let totalPrice = 0
    for (let i = 0;i < list.length;i++) {
      if(list[i].isChecked) {
        totalPrice += parseInt(list[i].price) * parseInt(list[i].count)
        num += parseInt(list[i].count)
      }
    }
    this.setState({
      totalPrice:totalPrice,
      num: num
    })
  }
  selectCheck = (index) => {
    let list = this.state.list
    list[index].isChecked = !list[index].isChecked
    // if(list.find((el) => el.isChecked = true)){
    //   this.setState({
    //     bgcolor: 'blue'
    //   })
    // }
    let allChecked = true;
    for(let i = 0;i < list.length;i++) {
      if(!list[i].isChecked) {
        allChecked = false
      }
    }
    this.setState({
      allChecked: allChecked
    })
    this.computedTotalPrice()
  }
  allCheckf = () => {
    let allChecked = !this.setState.allChecked
    let list = this.state.list
    for(let i = 0;i < list.length;i++) {
      list[i].isChecked = allChecked
    }
    this.setState({
      allChecked: allChecked
    })
    this.computedTotalPrice()
  }
 uniq(state) {
    let arr = state.map(el => {
      el.count = 1;
      el.isChecked = false;
      return el;
    })
    if (arr.length > 1) {
      for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i+1; j < arr.length; j++) {
          if (i !== j) {
            if (arr[i].id === arr[j].id) {
              arr.splice(j, 1)
              j = j - 1
              arr[i].count += 1
            }
          }
        }
      }
    }
    return arr
  }
  handleStatus = () => {
    let list = this.state.list
    list.map((el) => {
      el.isChecked = false
      return el
    })
    this.setState({
      list: list,
      allChecked: false,
      num: 0,
      status: !this.state.status
    })
  }
  deleteItem = () => {
    let list = this.state.list
    // if (list.some((el) => el.isChecked===true)) {
    //   this.setState({
    //     bgcolor:true
    //   })
    // }
    for(let i=0,len = list.length;i<len;i++){
      if(list[i].isChecked) {
        list.splice(i,1)
      }
      return list
    }
    
  }
  renderGoodList = () => {
    if (this.props.list.length=== 0) {
      return (
        <div className="empty-container">
          <div className="img-container">
            <img src={[require('../../assets/images/cart.png')]} width="100%" height="100%" alt=""/>
          </div>
          <h3>购物车暂时没有商品</h3>
          <p>添加到购物车的商品将会显示在这里</p>
          <Link to="/shopIndex">
            <button className="buy-btn">现在选购</button>
          </Link>
        </div>
      )
    }else { 
      const {list} = this.state
      return (
        <>
          {
            this.state.status?<div className="receive-coupon">
            <div className="label">
              点击获取优惠券
            </div>
            <div className="right">
              >
            </div>
          </div>:''
          }
          <div className={`item-margin ${this.state.status?'':'up'}`}>
        {
          list.map((item, index) => {
            return (
              <div className="cart-item" key={index}>
                <div className="checkbox-container">
                  <Checkbox checked={list[index].isChecked} onChange={() => this.selectCheck(index)}></Checkbox>
                </div>
                <div className="item-wrapper">
                  <div className="item-thumb">
                    <img src={item.imgUrl[0].img}  width="100%" height="100%" alt=""/>
                  </div>
                  <div className="item-info-container">
                    <div className="colorful-tag-container">
                      限时优惠
                    </div>
                    <div className="item-info">
                      {item.title}
                    </div>
                    <div className="item-price">
                      {item.price} * {item.count}
                    </div>
                  </div>
                </div>
              </div>
                
            )
          })
        }
        <div className="liubai"></div>
        </div>
        <div className="bottom-bar">
            <div className="select-info">
              <div className="checkbox-container">
                <Checkbox checked={this.state.allChecked} onChange={this.allCheckf}></Checkbox>
              </div>
              <p>已选<span>{this.state.num}</span>件</p>
            </div>
            {
              this.state.status?<div className="sum-info">
              <div className="totalPrice">
                <p>合计:</p> 
                <span>￥ {this.state.totalPrice}</span>
              </div>
              <div className="desc">
                应付总额不含运费
              </div>
            </div>:''
            }
            <div className={list.find((el) => el.isChecked===true)? 'btn-disabled1':'btn-disabled'}>
              {
                this.state.status?<button>现在结算</button>:<button className={this.state.bgcolor?'bgc':''} onClick={this.deleteItem}>删除所选</button>
              }
            </div>
          </div>
        </>
      )
    }
  } 
  render() {
    return (
      <div>
        <div className="title-bar">
          <div className="nav-title">购物车</div>
          <div className="nav-edit" onClick={this.handleStatus}>{this.state.status?'编辑':'完成'}</div>
        </div>
        {this.renderGoodList()}
      </div>
     );
  }
}
 
export default ShopCart;