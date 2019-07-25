import React, { Component } from 'react';
import Scroll from '../../common/scroll/Scroll'
// import ShowSort from '../showSort/ShowSort'
import './sort.styl'
class Sort extends Component {
  state = { }
  render() {
    return (
      <div>
        <Scroll>
          <div>
            <div className="header1">
              <div className="icon-font" onClick={this.handleChange}>
                <img src={[require("../../assets/images/st.png")]} width="20px" height="20px" alt="" />
              </div>
              <div className="icon-font1">
                分类
          </div>
              <div className="icon-font2" onClick={this.handleToSearch}>
                <img src={[require("../../assets/images/ss.png")]} width="30px" height="30px" alt="" />
              </div>
            </div>
            <div className="main-wrapper1">
              <div className="title-wrapper1">
                手机
            </div>
              <div className="image-shadow">
                <img src="https://resource.smartisan.com/resource/b1d887c9246cee3a8ba7a7a7c57d5a50.png?x-oss-process=image/resize,w_660/format,webp" alt="" />
              </div>
              <div className="layout-oneone">
                <div className="skus-img">
                  <img src="https://resource.smartisan.com/resource/25cc6e783a664fbdf83c3c34774a9826.png?x-oss-process=image/resize,w_125/format,webp" alt="" />
                </div>
                <div className="nav-text">坚果Pro2s</div>
              </div>
              <div className="layout-oneone">
                <div className="skus-img">
                  <img src="https://resource.smartisan.com/resource/25cc6e783a664fbdf83c3c34774a9826.png?x-oss-process=image/resize,w_125/format,webp" alt="" />
                </div>
                <div className="nav-text">坚果Pro2s</div>
              </div>
            </div>
            <div className="bgc1"></div>
            <div className="section-floor">
              <div className="title-wrapper">
                手机配件
          </div>
              <div className="image-shadow">
                <img src="https://resource.smartisan.com/resource/092ccb4ad40c623954fddef7e2ad44d6.png?x-oss-process=image/resize,w_660/format,webp" alt="" />
              </div>
              <div className="category-onethree-container">
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/d4480234a2f24b0ff5acd98288fd902d.jpg?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/33954b3f6a2f1614c5482ef130af9cc8.jpg?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/ce632bd67465027861707ec221b37c2d.jpg?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/c44f0ab4da5591fc3d0f82b7ac0f4f65.jpg?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/dc53bd870ee64d2053ecc51750ece43a.jpg?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bgc1"></div>
            <div className="section-floor">
              <div className="title-wrapper">
                鞋服
          </div>
              <div className="image-shadow">
                <img src="https://resource.smartisan.com/resource/790e2855df8a62dfbabea0130a3fdacf.png?x-oss-process=image/resize,w_660/format,webp" alt="" />
              </div>
              <div className="category-onethree-container">
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/d4480234a2f24b0ff5acd98288fd902d.jpg?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/22f9e824c1cf7e8fad3d432ee494b932.png?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/e9cd634b62470713f6b9c5a6065f4a10.jpg?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/25cd192a66e0dbd0f12dd723d1ea53f2.jpg?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/db4895e45ee6f3339037dbf7200e63f2.png?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
                <div className="category-onethree">
                  <div className="skus-layout">
                    <div className="image-container">
                      <img src="https://resource.smartisan.com/resource/9960e83a55544fbf7b046013a6f7f414.jpg?x-oss-process=image/resize,w_210/format,webp" alt="" />
                    </div>
                    <span className="title">Smartisan 双口 &amp; 快充车载充电器</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg2"></div>
          </div>
        </Scroll>
      </div>
    );
  }
}

export default Sort;