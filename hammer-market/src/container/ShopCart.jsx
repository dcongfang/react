import {connect} from 'react-redux';
import ShopCart from '../components/shopCart/ShopCart'
const mapStateToProps =(state)=>{
  return {
    list: state
  }
}
// const mapDispatchToProps = (dispatch)=>{
//   return {
//     addToGoods: (good) => {
//       dispatch({
//         type:'ADD_CART',
//         good
//       });
//     }
//   }
// }

export default connect(mapStateToProps)(ShopCart)
