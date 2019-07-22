import React, { Component } from 'react';
import './geox.styl'
// import {Icon} from 'antd-mobile'
class Geox extends Component {
  state = { 
    goodList: [
      {
        imgUrl: 'https://resource.smartisan.com/resource/25cd192a66e0dbd0f12dd723d1ea53f2.jpg?x-oss-process=image/resize,w_270/format,webp',
        title: '地平线 8 号 全功能城市背包 Atlas X',
        text: '一款通行城市的全功能双肩包',
        price: '￥ 299.00'
      },
      {
        imgUrl: 'https://resource.smartisan.com/resource/c892f825c80767c2bef15081352d2aa4.png?x-oss-process=image/resize,w_270/format,webp',
        title: 'Smartisan T恤 皇帝的新装',
        text: '一款通行城市的全功能双肩包',
        price: '￥ 299.00'
      },
      {
        imgUrl: 'https://resource.smartisan.com/resource/66b25ef2a60c262b6c2de2e2b60acb09.png?x-oss-process=image/resize,w_270/format,webp',
        title: '地平线 8 号 全功能城市背包 Atlas X',
        text: '一款通行城市的全功能双肩包',
        price: '￥ 299.00'
      },
      {
        imgUrl: 'https://resource.smartisan.com/resource/c892f825c80767c2bef15081352d2aa4.png?x-oss-process=image/resize,w_270/format,webp',
        title: '地平线 8 号 全功能城市背包 Atlas X',
        text: '一款通行城市的全功能双肩包',
        price: '￥ 299.00'
      },
      {
        imgUrl: 'https://resource.smartisan.com/resource/fc092e830c0420b5d8db2871fec82b35.png?x-oss-process=image/resize,w_270/format,webp',
        title: '地平线 8 号 全功能城市背包 Atlas X',
        text: '一款通行城市的全功能双肩包',
        price: '￥ 299.00'
      }
    ]
   }
  render() { 
    const { goodList } = this.state
    return ( 
      <div className="list">
        {
          goodList.map((good, i) => {
            return (
              <div className="goodList" key={i}>
                <div className="good-img">
                  <img src={good.imgUrl} width="100%" height="100%" alt=""/>
                </div>
                <div className="content">
                  <h5>{good.title}</h5>
                  <p>{good.text}</p>
                  <div className="price">{good.price}</div>
                </div>
              </div>
            )
          })
        }
        <div className="bg-color"></div>        
      </div>
     );
  }
}
 
export default Geox;