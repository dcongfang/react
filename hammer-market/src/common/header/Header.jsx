import React, { Component } from 'react';
import './header.styl'
class Header extends Component {
  state = { 
   
   }

  render() { 
    return ( 
      <div className="header">
          <div className="icon-font">  
            <img src={[require("../../assets/images/sort.png")]} width="20px" height="20px" alt="" />
          </div>
          <div className="icon-font1">
            <img src={[require("../../assets/images/chuiz.png")]} width="30px" height="30px" alt="" />
          </div>
          <div className="icon-font2">
            <img src={[require("../../assets/images/search.png")]} width="30px" height="30px" alt="" />
          </div>
        </div>
     );
  }
}
 
export default Header;