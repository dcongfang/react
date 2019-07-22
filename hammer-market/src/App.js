import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
  Redirect, NavLink
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Sort from './components/sort/Sort'
import ShopCart from './container/ShopCart'
// import Search from './components/seacrh/Search'
import Personal from './components/personal/Personal'
import Good from './container/Good'
import ShopIndex from './components/shopIndex/ShopIndex.jsx'
import './App.styl'
import store from './redux/store'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="tabbar">
              <div className="tab-item">
                <NavLink className="nav-link" to="/shopIndex">
                  <img src={[require('./assets/images/home.png')]} width="30px" height="30px" alt="" />
                </NavLink>
              </div>
              <div className="tab-item">
                <NavLink className="nav-link" to="/sort">
                  <img src={[require('./assets/images/sort1.png')]} width="30px" height="30px" alt="" />
                </NavLink>
              </div>
              <div className="tab-item">
                <NavLink className="nav-link" to="/shopCart">
                  <img src={[require('./assets/images/cart.png')]} width="30px" height="30px" alt="" />
                </NavLink>
              </div>
              <div className="tab-item">
                <NavLink className="nav-link" to="/personal">
                  <img src={[require('./assets/images/my.png')]} width="30px" height="30px" alt="" />
                </NavLink>
              </div>
            </div>
            <div className="music-view">
              {/* 路由 */}
              <Switch>
                <Route path="/shopIndex" component={ShopIndex} />
                <Route path="/sort" component={Sort} />
                <Route path="/shopCart" component={ShopCart} />
                <Route path="/personal" component={Personal} />
                <Route path="/detail/:id" component={Good}></Route>
                {/* <Route exact path="/search" component={Search}></Route> */}
                {/* <Route path="/" component={Recommend} /> */}
                <Redirect from="/" to="/ShopIndex" />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
