import React, { Component } from 'react';
import BScroll from 'better-scroll'
import './scroll.styl'
class Scroll extends Component {
    state = {  }
    // componentDidUpdate=()=>{
    //     // console.log('update')
    //     if(this.bscroll && this.props.refresh){
    //         this.bscroll.refresh()
    //     }
    // }
    componentDidMount=()=>{
        if(!this.bscroll){
            this.bscroll = new BScroll(this.refs.scrollView,{
                probeType: 3,
                click: true
            })
        }
    }
    componentWillUnmount=()=>{
        this.bscroll = null;
    }
    render() { 
        return ( 
            <div ref="scrollView" className="scroll-view">
                {
                    this.props.children
                }
            </div>
        );
    }
}

export default Scroll;