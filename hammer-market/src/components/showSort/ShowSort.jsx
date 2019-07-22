import React, { Component } from 'react';
import './showSort.styl'
class ShowSort extends Component {
  constructor(props) {
    super()
    this.state = {
      open: props.open,
      shops: [
        {
          img: 'shop',
          title: '锤子商城'
        },
        {
          img: 'sj',
          title: '坚果Pro 2s'
        },
        {
          img: 'sj1',
          title: '坚果r1'
        },
        {
          img: 'tv',
          title: '坚果TNT'
        },
        {
          img: 'sj',
          title: '坚果r3'
        },
        {
          img: 'chuiz',
          title: 'Smartisan OS'
        },
        {
          img: 'yy',
          title: '应用'
        },
        {
          img: 'lt',
          title: '论坛'
        },
        {
          img: 'ej',
          title: '服务支持'
        }
      ]
    }
  }
  componentWillMount() {
   
  }
  render() {
    const { shops } = this.state
    const {open} = this.props
    // console.log(open)
    // console.log(open)nav-drawer
    return (
      <div className={open? 'show': 'pos'}>
          <div className="nav-aside">
          {
            shops.map((shop, i) => {
              return (
                    <div className="nav-shop" key={i}>
                      <div className="nav-img">
                        <img src={[require(`../../assets/images/${shop.img}.png`)]} alt=""/>
                      </div>
                      <div className="nav-title1">
                        {shop.title}
                      </div>
                    </div>
              )
            })
          } 
          </div>
        </div>
    );
  }
}

export default ShowSort;