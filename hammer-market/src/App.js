import React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
  Redirect, NavLink
} from 'react-router-dom';
import Sort from './components/sort/Sort'
import ShopCart from './container/ShopCart'
// import Search from './components/seacrh/Search'
import Personal from './components/personal/Personal'
import Good from './container/Good'
import ShopIndex from './container/ShopIndex'
import './App.styl'
class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="App">
            <div className="tabbar">
              <div className="tab-item">
                <NavLink className="nav-link" to="/shopIndex">
                  <img src="data:image/png;base64,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" width="30px" height="30px" alt="" />
                  <p>首页</p>
                </NavLink>
              </div>
              <div className="tab-item">
                <NavLink className="nav-link" to="/sort">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAE5UlEQVR4nO2bzW7TShTHz3zaqXpdp60EO9ggXoHtrUr33L4KEqjZdEMFElteBvoA9w16qy5YI4jiscF2PB+5C9IoCfE4re9FcXt+3bSd4yTnnxnnzPxzABAEQRAEQRAEQRAEQW4A8Q1++PABoih6Esfx2zAMDxljESEEJpMJWGvTsizPkyR5nabplTEGJpPJ73rdv4UkSWa/n56erozhvgeIoujpgwcP/o6iKOacA6V0Nuaci4wxfwVBcAAAz5RSl8aY2TghBIIgACklEOJ9nzaWeQHr8AoYx/FZFEWxlPKXMUopSCkhiqJ4PB6f5Xl+PC9gEASwt7f3Jo7jl4wx2UURHz16BNbaKkmS9wAwWBXjFTAMw0POvSHAOYcwDI+EEFAUxez/UkqI4/hVv99n8zO3azjnJAC8hNsIyDiLKPMnTxkFxtk2oYszjFACXHDWdP2mM83v1yU4xSsgJRSI/3OmNo7M/XQdSuonQbenxwbgFXDdsuSulS/L+PLzCmitzZxz3gd3zoG19vtynHMOjDG26fpNZ5pfVTfuvQeWZXlujHkRBEFtjDEGyrL8ZK1dqPe01qCUegcALznnnSxjAAC01lop9b5u3CugUuokDMM/ASAWQiwX0qC1hizLEqXUSVUtvklVVcG3b98GaZoOulrGfP78uTHGK2CWZf8AwLOyLM96vd5zxtgfc1u5rCiKT0qpkyzLLq21C9c656AsSyjLslUSm45XwKqqIEmSyzzPj1ds5cAYA1VVgbX2zn+Q1OEVcDKZgDEG5rdoyCJeAbt64/+ddPPuvkGggC3BJdwSnIEtQQFb4j8thZ8HpkIIEEIsLOnJZAJaa9Ba3+syxyvg9Mh+LVNJa30vi+m1TaUVe+FIaz0zlZIkWTCVKKUQBAEsX9clhsNhY8xaptKq05hrgdBU8tDr9Q6bbEkpJWxtbR0t3yOllNDv91/t7u523lQihNSaSt7MGGNRU/KUUqCUbi/HUUqBc95p8QB+5sFYvankzW7dZdfF5XkTfPl1e3psAI114E1m4Xzs9d93fXY2mUrpOqaSc67WVFo+qe4a1tp2ptK01quN0VpDURQfl3cj09PsdwDQ2TIGAMAYo6dlzEqaTKVBGIYHhJAmU2mgtV64tqoqGA6HgyzLBl0V7+rqqjHGK2CapjNTaWtr6zmldGYqOeeyPM8/KaVO0jS9XJ6BzjkoimLhC0d3kbVMpR8/fhw3HSbcx30wwBqfwtemUtNM6uoybQvWgS1BAVuCArYETaWW4AxsCQrYksYlzBgDKSXgl4tW4xVQCAE7OztP4jh+2+v1fjGViqI4T5LktVIKTaVV7OzsPH348KHXVArDcGYqze+Hrz0TKWVnTaUvX740xvwnplJZlmd5nh/PCxgEAezv77/p9/udPY15/PgxWGur0Wh0e1NJCOF9EiEE9Hq9o+WOpmtTqd/vM8bYDV/65mCtvX2nEuc8akqeMQac821K6ULdSCkFIQRrahXbdDjnwDlHU6kNaCr9j2Cn0hrculPJGLOWqWSt/b78JNMD1zthKhljbmcqjcfj82lXem3MtFPpozFm4V5RVRUopd4RQu5vp9JoNBqEYXhQU0iD1hrSNE1Go9FgVafS169fB0qpznYqXVxcNMa07lQajUb3ulMJQRAEQRAEQRAEQRDkRvwLPpvbdmc+Ek8AAAAASUVORK5CYII=" width="30px" height="30px" alt="" />
                  <p>分类</p>
                </NavLink>
              </div>
              <div className="tab-item">
                <NavLink className="nav-link" to="/shopCart">
                  <span className="circle">{this.props.list.length}</span>
                  <img src="data:image/png;base64,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" width="30px" height="30px" alt="" />
                  <p>购物车</p>
                </NavLink>
              </div>
              <div className="tab-item">
                <NavLink className="nav-link" to="/personal">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAI1klEQVR4nO1cXagdRx3/7+7szOzMfp2ce69UammTtEZpoIVqTCHEBkUfNAWhRbS1IKKiAS+hkYoBtUiID4GgBAIF8aONIoJtWvLQtD7oU6O1D2qioCIiopjztd97dmfXh+7G0yQ35+TcM7u97fnBfbrD+c/+9vf/mP/MLMASSyyxxBJLLNEOlGkDTp48KXcCigKapoGmaaCqKqiqCpqmASFkp2EYD1JKP44x3qsoSi6E+Pd4PP5tmqavxHH8bJqmf0vTFPI8h6IopMxvfX39hv9HUqxOgaIooKoqYIyBEMIopR/EGO/Vdf1OhFAXIfQuXdffres66LoOqqqCoii4LMvteZ5vF0I8PB6PTyRJ8koYhmeiKPphHMejNE2lEbkRGidQVVUghABj7Fbbtr/OOX+EEGJOKrAiDBTljQ6iKApgjAEAgFIKnPM9tm3vieP420EQPOV53vEwDP87Ho+hLMtGnqdRAhFCwBjTXdf9huM4hxljRq2wm4WiKIAQAoQQEEIszvlhzvnn+/3+4V6v99R4PJbwBNeiMQIRQmDb9kq3233OcZz7KaVzEXc91KpGCJlFUXwzDMPvZ1kmmlDhYp5gCiryuqurq+e73e79hmEsjLxJqKoKjLF3MsYOINSMNqQTWD2U1u12f9bpdO7BGL8hxi3yr05MnPNP6bou+9Fefz7ZBjDG4LruYcdxDmCMr0kMiwZCCAzDOIgx1mTbApBMYJ01Lct63DAM6eQBXImH2wghe5twY6kEVi61E2O8JiPmbQSEEFBKP/SWIFDX9V2apsk0cw0qAvc3YbcJAnc0qb7aLsb4fQgh6XFwqsY3MwFVVQEhdKumaY3EvxqapgHGmGOM79I07ZIQQpot6QpUVbXbJHmTtnVdv0e2+qUTqGnaShsEapoGuq7vkB0HmyikG83AE3YBIXTXllZgtTqw2nJhhNAtsgmUnkRUVTWv15qSjYrAtXrZKM2OtF8GqNeohkwbU2yvyn5xTcRA3IYLV1sFbMsSWDU634EQIrJszDAHUs1Bmg1pBBJCwLbtpwkhtC0FEkJoNQdpdqQlEYyxwTk/oOt64wmkhq7rwDk/gDE2oiiKZdiQpkBVVTvq65BlYpY5QDWHjjQbsn64KIpeURSN7EtshLIsoSgKURRFT5YNaQQKIdIsyy42vU87iaIoIMuyi0KIVJYNaekpz3NIkuRFIcTupjZ4roYQApIkeSnPc2k2pCkwyzKIougnaZo2tsk9ibIsIU1TiKLomSzLpNmR6cIQRdGrQRCcl6mAjZDnOQRBcD6Kole3ZD+wLEuI4xhGo9HRMAyLJmNhURQQhmExGo2OxnEs1QOk1hhCCPA878JgMHgyiqJGDv4URQFRFMFgMHjS87wLMtUHILkbAwAwHo+h3+9/S9O0BCF0nFIqrbCu416v1zvU7/dP1edjtmw3BuD/ihgOhyfCMPyHTBUKISAIgtcGg8GpphTfyDKhIjH3PO+ErKxcq8/zvJNJkjR2TrCxdVaWZeB53ukgCP4qIy4JISAMw0u+75+RWbZcDekxsEaVlcej0ehxxtgvOOcLO6FVFAUkSQKj0ehrSZLkZVk21sBodKVfqfDZ0Wj080WqpPrdc57nPdek+gAaJrCuDYfD4aEgCPqLcOXKdcPhcPjlJEkaX/U03msSQoDv+/8ZDAZfieN4U8G+LEtIkgSGw+ER3/f/Lrvmux5aadZVLve07/vnhBBzH6jM8xx8339xNBqdbvJg+SRaIbAoCojjGDzPe2LesqYqW8rhcLgeRVHZVtustXZxnucQRdHv0zT9yzwPX72E38VxfKmNZkWN1ggsyxKEEJBl2R/nUaAQAsbj8WtZlrXiujUaqwNv8NvpPHaq8VEbpx4m0d6OD1w5vXXbPAV1dfrqvqZPv16N1gisDkGuUUrvm4dAVVWBUvp+QojTJomtEFif3rdt+0uEEDSPCyqKApRSZFnWF5u4PrERGidQURTQdR0cx9nlOM6RzVyIqX7nqOM4d7a1gd9oEqmV57ru7Wtray+Ypsk2s2OHEALLskwhxLmyLB8YjUb/bLqgbmS/sVYdpRQcx/lEp9M5bdv26iK2OxFC4DjOTlVVL2CMv+B53vNJkkBT5Y00Auub6BhjoJRSxtiDlmWtm6b5AcMwYFGBv345ruveQgg5a5rmr4Mg+F4YhmeTJEmzLAMhhDQyF0pgfeGvuuiiGIaxzzTNRxljD1FKHUIIyLjyUL8szjlQSvfZtr0vSZJ+GIZngiD4URzHv0nT9IoqF0nmQgisLz8TQsAwjNs4549xzh8zDGMHxhjmvVQ97zyqF7jNNM1DruseSpLkT0EQ/CAMwx8nSfKv+jsLiyByUwRWdzHAMAyFc/5hy7LWGWMfIYSok9da28DEbXYwTXOXbdvH0zQ9FobhC77vfzcMw5fjON70ByvmIrCOO4wx1bKsR2zbfoIx9h5K6ZWvb7xZULu3YRhACFEZYwdt2z4YRdEfPM875nneT+M4LudNOjdNYOUe4DjORx3HOWaa5r01cW2uSWdBfSG78pq7OednLMs6MhwOv+p53ktJksDNdnZmJrBWnWma27rd7inHcT7JGNsSxF2NOlZWSedexth5zvkzvV7vUBAEw5tR40wEThTA711ZWTnrOM6OOsZtZdREmqYJGONPY4z3XL58+WPD4fDPsxbkM61EdF2HTqdz99ra2i9d111FCG051d0ImqYBpRQQQjs1TfsVADwwGAwuzrLDN1VC1XKps7KyctZ13dU2D43LxERBvra6uvq8ZVnuLMX+VAIxxtDpdL5j2/YdbZ00bRLVJ1q2dzqd47Ncj5hKIOf8Dtu2P0sIeUsq72pU90vAtu3Pcc5vnzZ+FgIfpZRqWz1h3AyqZq3GOf/M1LHTBlBK9zf1EZs3E6ru0f5p46YSqOv67reT+mpURffuaeOmZgWEULfNNW1bqD9XMHXctAFlWfbb3HdtC1Xbqz9t3FQF+r7fUxRl5e3mxkVRgO/7l9uexxJLLLHEEksssRH+BzkQnonzeRzyAAAAAElFTkSuQmCC" width="30px" height="30px" alt="" />
                  <p>我的</p>
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
    );
  }
}

const mapStateToProps =(state)=>{
  return {
    list: state
  }
}
export default connect(mapStateToProps)(App)
