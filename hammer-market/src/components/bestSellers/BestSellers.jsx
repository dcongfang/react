import React, { Component } from 'react';
import {Icon} from 'antd-mobile'
import axios from 'axios';
import Loading from '../../common/loading/Loading'
import { Link } from "react-router-dom";
import './bestSellers.styl'
import Geox from '../geox/Geox'
class BestSellers extends Component {
  state = { 
    goods: [],
    show: true
   }
   handleToGoodDetail = (url)=>{
    return ()=>{
      this.props.history.replace({
        pathname: url,
        state: {
          goods: this.state.goods
        }
      })
    }
  }
  componentDidMount() {
    let that = this
     axios.get('https://www.easy-mock.com/mock/5d293ec131ae7d5eda233151/hammerMarket/goodInfo')
     .then(res => {
      //  console.log(res)
         that.setState({
           goods: res.data.data.goods,
           show: false
         })
     })
  }
  render() {
    // const { match } = this.props
    // console.log(match)
    const { goods } = this.state
     return ( 
      <div>
        <div className="best-seller">
          <div className="title">热销商品</div>
          <div className="icon-right">
            <Icon type="right" size='xs' width="100%" height="100%"></Icon>
          </div>
        </div>
        <div className="goods">
          {
            goods.map((good) => {
              return (
                <div className="good-item" key={good.id} onClick={this.handleToGoodDetail(`/detail/${good.id}`,good)}>
                  <Link  to={`/detail/${good.id}`} className="skip">
                    <div className="mask">
                      <img src={good.imgUrl[0].img} width="100%" height="100%" alt=""/>
                    </div>
                  </Link>
                  <div className="content">
                    <h4>{good.title}</h4>
                    <p>{good.text}</p>
                    <div className="price">
                      <span>￥{good.price}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="bg-color"></div>
        <div className="best-seller">
          <div className="title">服饰箱包</div>
          <div className="icon-right">
            <Icon type="right" size='xs' width="100%" height="100%"></Icon>
          </div>
        </div>
        <Geox></Geox>
        <Loading title='正在加载...' show={this.state.show}></Loading>
      </div>
     );}
}
 
export default BestSellers;