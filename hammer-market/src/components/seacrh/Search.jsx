import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'
import './search.styl'
class Search extends Component {
  state = {
    history: [],
    value: '',
    show: false
  }
  debounce(fn) {
    let timer = null
    return (event) => {
      if (timer) clearTimeout(timer)
      event.persist && event.persist()
      timer = setTimeout(() => {
        fn(event)
      }, 1000)
    }
  }
  componentDidMount() {
    // console.log()
    if(!JSON.parse(localStorage.getItem('history'))) {
      this.setState({
        show: true,
        history:[]
      })
    }else {
    this.setState({
      show: true,
      history: JSON.parse(localStorage.getItem('history'))
    })
  }
  }
  commitValue(e) {
      this.setState({
        value: e.target.value
      })
  }
  backTo = () => {
    this.props.history.goBack()
  }
  deleteHis = () => {
    window.localStorage.removeItem('history')
    this.setState({
      history:[]
    })
  }
  onKeyup = (e) => {
    let history = this.state.history
    if(e.keyCode === 13) {
      if (this.state.value !== '' && this.state.history.indexOf(this.state.value) === -1) {
        history.push(this.state.value)
      }
      this.setState({
        history
      })
      localStorage.setItem('history', JSON.stringify(this.state.history))
    }
  } 
  render() {
    const { history } = this.state
    return (
      <CSSTransition in={this.state.show} timeout={300}
        classNames="translate">
        <Fragment>
          <div className="module-form-row-m">
            <div className="form-item">
              <div className="btn-box">
                <div className="search-btn"><img src={[require('../../assets/images/search.png')]} width="70%" height="70%" alt="" /></div>
                <input type="text" maxLength={8} onKeyUp={this.onKeyup} onChange={(e) => this.commitValue(e)} placeholder="请输入要搜索的内容" value={this.state.value} className="input-box1" />
              </div>
              <div className="cancel" onClick={this.backTo}>返回</div>
            </div>
            <div className="hot-list">
              <h4>历史搜索</h4><div className="deleteHis" onClick={this.deleteHis}><img src={[require('../../assets/images/sc.png')]} width="30px" height="30px" alt=""/></div>
              <div className="his-btn">
                {
                  history.map((item, i) => {
                    return (
                      <div className="history" key={i}>
                        <button>{item}</button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </Fragment>
      </CSSTransition>
    );
  }
}

export default Search;