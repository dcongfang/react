import React, { Component } from 'react';
import axios from 'axios'
import './listShow.styl'
import {Icon} from 'antd-mobile'
class ListShow extends Component {
  state = {
    lists: [],
    show: true
  }
  componentDidMount() {
    let that = this
    axios.get('https://www.easy-mock.com/mock/5d293ec131ae7d5eda233151/hammerMarket/lists/listInfo')
      .then(res => {
        // console.log(res)
        that.setState({
          lists: res.data.data.lists,
          show: false
        })
      })
  }
  render() {
    const {lists} = this.state
    // console.log(lists)
    return (
      <div className="select">
        {
          lists.map((list, i) => {
            return (
              <div key={i}>
                <div className="floor-container">
                  <div className="best-seller">
                    <div className="title">{list.title}</div>
                    <div className="icon-right">
                      <Icon type="right" size='xs' width="100%" height="100%"></Icon>
                    </div>
                  </div>
                {
                  list.list.map((item, j) => {
                    return (
                      <div className="product-box-item" key={j}>
                        <div className="item-img">
                          <img src={item.imgUrl} alt=""/>
                        </div>
                        <div className="item-content">
                          <h4>{item.text}</h4>
                          <p>{item.description}</p>
                          <div className="item-price">
                          ￥{item.price}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                </div>
                <div className="bg-color"></div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default ListShow;