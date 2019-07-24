import {connect} from 'react-redux';
import ShopCart from '../components/shopCart/ShopCart'
const mapStateToProps =(state)=>{
  return {
    list: state
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    deleteGoods: (arr) => {
      dispatch({
        type:'DELETE_CART',
        item: arr
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart)
