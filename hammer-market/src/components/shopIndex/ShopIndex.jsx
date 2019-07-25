import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css';
import BestSellers from '../../container/BestSellers'
import ShowSort from '../showSort/ShowSort'
import ListShow from '../listShow/ListShow'
import Search from '../seacrh/Search'
import {Route} from 'react-router-dom'
// import Scroll from '../../common/scroll/Scroll'
import './shopIndex.styl'
class ShopIndex extends Component {
  state = {
    slideList: ['https://resource.smartisan.com/resource/fda5c3e61a71c0f883bbd6c76516cd85.png',
      'https://resource.smartisan.com/resource/a/app1008420.png',
      'https://resource.smartisan.com/resource/c1cf16d2c7a96f43e4e94cf96568c36a.png',
      'https://resource.smartisan.com/resource/75f29073a66cf866d34ad09a405e4ddf.png'
    ],
    show: true,
    open: false
  }
  handleChange = () => {
    this.setState({
      open: !this.state.open
    })
  }
  componentDidMount() {
    new Swiper('.swiper2', {
      autoplay: true,
      loop: true,
      spaceBetween : 20,
      pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: 'my-bullet-active',
      }
    });
  }
  handleToSearch = () => {
    this.props.history.push({
      pathname: '/shopIndex/search',
      state: {
        searchShow: this.state.searchShow
      }
    })
    this.setState({
      searchShow: !this.state.searchShow
    })
  }
  render() {
    const {slideList, goods} = this.state
    const { match } = this.props
    // console.log(list.length)
    return (
      <div>
        {/* 头部 */}
        {/* <Header></Header> */}
        <ShowSort open={this.state.open}></ShowSort>
        <div className="header">
          <div className="icon-font" onClick={this.handleChange}>  
            <img src={[require("../../assets/images/st.png")]} width="20px" height="20px" alt="" />
          </div>
          <div className="icon-font1">
            <img src={[require("../../assets/images/czi.png")]} width="30px" height="30px" alt="" />
          </div>
            <div className="icon-font2" onClick={this.handleToSearch}>
              <img src={[require("../../assets/images/ss.png")]} width="30px" height="30px" alt="" />
            </div>
        </div>
        {/* 轮播 */}
        <div className="swiper-container swiper2">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={slideList[0]} width="100%" height="100%" alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={slideList[1]} width="100%" height="100%" alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={slideList[2]} width="100%" height="100%" alt=""/>
          </div>
          <div className="swiper-slide">
            <img src={slideList[3]} width="100%" height="100%" alt=""/>
          </div>
        </div>
        <div className='swiper-pagination'></div>
        </div>
        <div className="bg-color"></div>
          <BestSellers goods={goods} match={match} history={this.props.history}></BestSellers>
        {/* <Loading title='正在加载...' show={this.state.show}></Loading> */}
        <ListShow></ListShow>
        <div className="white"></div>
        
        <Route path={`${match.url}/search`} component={Search}></Route>
      </div>
    );
  }
}

export default ShopIndex;