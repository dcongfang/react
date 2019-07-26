import React, { Component } from 'react';
import './personal.styl'
class Personal extends Component {
  state = {}
  render() {
    return (
      <div>
        <div className="title-bar">
          <h1 className="nav-title">个人中心</h1>
        </div>
        <div className="main-wrapper">
          <div className="page-for-center">
            <div className="wrapper">
              <div className="avatar">
                <img src={[require('../../assets/images/avatar.png')]} width="100%" height="100%" alt="" />
              </div>
              <div className="box-userinfo">登录/注册</div>
              <div className="arrow-right-icon">></div>
            </div>
            <div className="menu-list-parallel">
              <div className="icon-order">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA2CAYAAAC4PKvBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMDYxZGE2Yi03MDM3LTQ0YWUtYmU3OS1iZDc3MDY4YmM1NDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzEwQUU0MzlBQzAyMTFFN0ExMkRDRDE4QzY1Rjk3QTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzEwQUU0MzhBQzAyMTFFN0ExMkRDRDE4QzY1Rjk3QTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEI5NjNBOUE2MTExMUU3ODM4RkY3MTYzM0NFQUY1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEI5NjNBQUE2MTExMUU3ODM4RkY3MTYzM0NFQUY1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtoOezoAAAGNSURBVHja7JpPboJQEMYHIV3xJ8oB4CD2BFyhLrt11+56gfYK3XkAVpzA9h5wACz/kq6AzjSa6JNGqCIPM18yRh8v4Qd+znwJKkEQ3AHAG9YD1gzk1hfWCutJw5dX0zSXlmWBqqpSU5dlOU3TdJll2fcEPy/GAE0iRmJFPRL4bAzQ+/DErIkH4jiGPM+lgjUMA2zbPlg7At9CK0NBep53tIYNpBbBJzBSMfi1pdV1DVQ77b+XRU2MbBWZwdf0LQm1HszjHfbOXdc9WAjDcN5kyTN4lD7AW0u8wDbCm9D9jrftJJfe17Wz9H7HoyiSyuMfCCR6+vMcn14L/J77OGcVzipsFc4qv1nFcRxx0NxWVhEvsI9p26mriMf+2vufznTqvCIjZxXOKjzyeeSzVTircFbplFX6GPmXzio31VU4q3BW4azCWYWtwuByDCBd16EoisF+ob7vQxPTSXB62C8+8JfVKpuqqkZjkS3rhsBXSZLAGOCJkVhR7zSAnrMsU7AWuDCVnH33Z7KXHwEGAOooDNu/ggqFAAAAAElFTkSuQmCC" alt=""/>
                <p>全部订单</p>
              </div>
              <div className="icon-order">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAArCAYAAAApMZsWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMDYxZGE2Yi03MDM3LTQ0YWUtYmU3OS1iZDc3MDY4YmM1NDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzEwQUU0M0RBQzAyMTFFN0ExMkRDRDE4QzY1Rjk3QTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzEwQUU0M0NBQzAyMTFFN0ExMkRDRDE4QzY1Rjk3QTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NDk1NEUzNEE2MTExMUU3ODM4RkY3MTYzM0NFQUY1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NDk1NEUzNUE2MTExMUU3ODM4RkY3MTYzM0NFQUY1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PruJOloAAAEZSURBVHja7Ne9joJQEAXgUYgVf4H4VjzDVrutnbUWdvsEbqx8BngqQ4QLzRZwnTFCWBubbe54TnIMGJsvuTPgoizLFRF9cz+4CelKzT1ztz5/HKIo2sRxTJ7nqVL2fZ80TbMxxvwu+f5LI1IiJrGJUaCJRuQcK8YlvUkA1RbfWkvSMVVVUdu2TqPCMKQsy6Z78fnPP3ogF67h8jyfrouisHMoZhRQl5fROKza8mzC0QXU5RmdJwgC6rrOuaHlZ+cfw8s3ozRN79W0jOQaMwqoln8vGoMZBRRQLCMsIxxdQDGjmFHMKKBYRlhGOLqAAvp/0OswDGqBD9tVoMe6rkkjVkxi4/zI42VnjLHcT/5ircx64Z64+5sAAwDVnoYgXIN1OgAAAABJRU5ErkJggg==" alt=""/>
                <p>待付款</p>
              </div>
              <div className="icon-order">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAzCAYAAAAtg6DjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMDYxZGE2Yi03MDM3LTQ0YWUtYmU3OS1iZDc3MDY4YmM1NDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUMxNzE1RENBQzAyMTFFN0ExMkRDRDE4QzY1Rjk3QTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUMxNzE1REJBQzAyMTFFN0ExMkRDRDE4QzY1Rjk3QTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RUZDMkI2NUE2MTExMUU3ODM4RkY3MTYzM0NFQUY1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RUZDMkI2NkE2MTExMUU3ODM4RkY3MTYzM0NFQUY1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqQHWooAAAQxSURBVHja7FpLT1NBFJ6WAi2UR6AQq0ETTUx8JKIbSXwFFwasC5aGuDG+4sZE/4gbjZLATsOahEYWRheCNSYSMaAbo4FEMeURyqOFFlrPd3uGlMul3j6uvY6c5GTmzp17T7+ZM9+cObeOYDDYKYToI/WL0so06Q3SF8V+sQsAm5ub/VVVVSVFGI1G/eFwGIO9t9jvdmIGSw0Qwr/BEm9yiv9AdkHugrRAampqUKTy0J+kndnY1TbS2NioabGZWQl3BTO73W4wc7vhTKZSKQG1g8zNzYmlpSXT/T0ej+biAIl6LBYLUPNrW88kA3SYVQJ1SQ4KzSSKDhXd9T0B3YAnVlRUCJfLdYza9qsGMkI6nkgkNt2XJKAi8bxbW1vLDA2VBDmyurqqVSorK1FcQFU1kKF4PJ4G43TCZb0MdCtIuY2UWvOUr7Qmw+vr69o7mGUDKsauI3JdMvl0qAhyk3zKy8uxlRym6iHVQA5L8jHaSlQBOUrkE5frmkFeVg0kpvGDZFneSs4DrwbSLsxaBA3BZVF3OBxgWQ/VL+JapczAW0k++nWpEsgRA/LpsF1mwOv1iuXl5byiAkQ7nD7RBC6LExjSIkqkP4ykrKxMNDU1+WdmZvqUztbJhLWt0h8rKytadiCTQLAdwA2rq6vzeqft2JUBnstMceA6l7yP7dMfPIPD+pAtc2b/eZAcqZzVNZ9B/qYQsRW78hbwJnPmALC2tlYdkCCXfAkmK0g7sasVItl1OhaLqbxdau56kz+W7JGRAtZGXV3dts44ylDYJRAjIqeivcDl0vIqCMkKJQir7Dj0DQMDA8hAT7S0tHgRD0qj2KvI8Ge67BXpPy9850cOciB8k37AUQxQvmCtsDM5OWkI8nl9fX23nMloNCoo/sNp9AHpE9Jklu3oFulDn8/nyZVArLIDkE4dwANUXJWUjZFlwziXPWb3vkcaQoDCGuI23OshvTI7OxuXp3SzM2ilHZeOiQBwMxe7uLiI8j5dviTdRzpIbtKK0UNWDJJIJNoo5mwjN7sOw6SvMBv07COzJwor7RjFru2cnJWLf4JHDc4/SG7c2tDQoEUmWK9Q1NGGe9QnKNIp+qd41swo/w07epDH5WIGu2Hxd3V1bVB5ByNrxLhScI/6nKDqbVI808vvyCrSDj9jiR09SJ9kVE4lDHF7txki4T7dfDmUmY7YMc1moR3e/39tC+umpqYyL79xecoMXXOfk/JZfDcEu5kQq+z8wIxvAUmu6S40hAJHyOVmtA8XK1TLxY7Zo9aoGRLhL77jBfx+S+w4TY5cPxb3nxK83Ke/gASxJXbMzmQP7U9jkUhkxw64R30+8VaQr1hixyxInGIDCwsLH+fn57W9LZlMaoo62ujemEh/ZCkkV2GJnVwOzWCq0zSKd0mvUf0It38hfcbxZrwIvFJ0O78FGADVEfpG0DJCIwAAAABJRU5ErkJggg==" alt=""/>
                <p>待收货</p>
              </div>
              <div className="icon-order">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA2CAYAAAC4PKvBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMDYxZGE2Yi03MDM3LTQ0YWUtYmU3OS1iZDc3MDY4YmM1NDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzEwQUU0MzVBQzAyMTFFN0ExMkRDRDE4QzY1Rjk3QTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzEwQUU0MzRBQzAyMTFFN0ExMkRDRDE4QzY1Rjk3QTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RjRGMTU0MkE2MTExMUU3ODM4RkY3MTYzM0NFQUY1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RjRGMTU0M0E2MTExMUU3ODM4RkY3MTYzM0NFQUY1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrCWZR0AAALfSURBVHja7JrLbxJRFMbvlOERGF5FDTsSF9pd/wRZdYMKiYkru9DEpdU00YWJSde6UeNSu+lSDdCERXf0v2hcmLACGqkwvOUxno9cDGKBsQz0Tjsn+WC494T8mJz73XOnlTKZjIMx9ob0gLTKxI6fpD3Sc5leXvt8vi2/389sNpvQ1L1eL1ipVLZUVW2u0OdNM0AjwAhWiscAXzUD9Cg8mOXxiVKpxKrVqlCwXq+XhUKhv8b+AQd0LBaTJn0JLealgxOTNg6+wkwaFviyQ9Y0jUHDGL0+LWbMXyFtk26TbvCxI9I+6T3px1lBxxllA2/CPdIn8lm/x+Nhdrt9MNjpdNbr9fo6bRxP6eMj0leRSgXQn8PhsD8YDDKHw8EkSRoI1xijOR9yeK4Q4FdJuwQmuVyuiUmYQw5ySddEAH9C1eGbBj0KHwgEcOefiQB+FzWtN9xuN+OLdz5X0eMkM2JNlmXd34FcipvzuMq5+DgH+CVCqRyR5elO7na7ePsuAvh+o9HQncxzMyKAf6DNRW21WjMTkYNcunwrAvgxdsRisahNg8cccvjueSxKr4Jt/H6hUNglT/fC8rDlIxf132w2cadxOnl41i1/kb3KF1KWALdJd7jlwT2+8Zp+N0+TdaqPGxgAe8llqn78ACdw0nUS2kNsqWt87MDQftxg8A1FUTawEOHX6A6xUzqdTlar1ZjI4IPTOPXff54U4ISOXsZwcINPQCyfz7N2u31IlzvcBndUVb01Zz+0UFdBHBI0gLMjY1Eaiw5/iKilEp0wnp0yZz2euJSPJxbdx///4kyn08silgxfnJFIZKHEuVzuEtT4ou6IMODxeFzitW65yjyucvFrPJVKWXZo2aEp7VCvqyQSiUHtJZNJy1WsftwCPw9XURQFC1ATCRJMM8HxXGT8D/6ilspJv983TYlw1hOA75XLZWYGeDCCleIjNqAXqqpKpE0aCArOPvxnsle/BRgANeJolxbgE9UAAAAASUVORK5CYII=" alt=""/>
                <p>售后</p>
              </div>
            </div>
          </div>
          <div className="menu-list-vertical">
            <div className="arrow-right-icons">
              <div className="text-con">
                地址管理
              </div>
              <div className="arrow-right-icon">></div>
            </div>
            <div className="arrow-right-icons">
              <div className="text-con">
                我的优惠券
              </div>
              <div className="arrow-right-icon">></div>
            </div>
            <div className="arrow-right-icons">
              <div className="text-con">
                优先购买码
              </div>
              <div className="arrow-right-icon">></div>
            </div>
            <div className="arrow-right-icons">
              <div className="text-con">
                提货兑换卡
              </div>
              <div className="arrow-right-icon">></div>
            </div>
          </div>
          <div className="menu-list-vertical1">
          <div className="arrow-right-icons">
              <div className="text-con">
                常见问题
              </div>
              <div className="arrow-right-icon">></div>
            </div>
            <div className="arrow-right-icons">
              <div className="text-con">
                服务支持
              </div>
              <div className="arrow-right-icon">></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;