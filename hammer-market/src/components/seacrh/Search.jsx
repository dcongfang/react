import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'
import './search.styl'
class Search extends Component {
  state = {
    history: [],
    show: false,
    searchShow: false
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
    this.setState({
      show: true
    })
  }
  commitValue = this.debounce((e) => {
    const history = this.state.history
    if (e.target.value !== '' && history.indexOf(e.target.value) === -1) {
      history.push(e.target.value)
    }
    this.setState({
      history
    })
  })
  backTo = () => {
    this.props.history.goBack()
    this.setState({
      searchShow:true
    })
  }
  render() {
    const { history } = this.state
    // console.log(this.props.searchShow)
    // console.log(history) 
    return (
      <CSSTransition in={this.state.show} timeout={300}
        classNames="translate">
        <Fragment>
          <div className="module-form-row-m">
            <div className="form-item">
              <div className="btn-box">
                <div className="search-btn"><img src={[require('../../assets/images/search.png')]} width="70%" height="70%" alt="" /></div>
                <input type="text" maxLength={8} onChange={this.commitValue} name="searchValue" placeholder="请输入要搜索的内容" className="input-box1" />
              </div>
              <div className="cancel" onClick={this.backTo}>返回</div>
            </div>
            <div className="hot-list">
              <h4>历史搜索</h4>
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