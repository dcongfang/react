import { connect } from "react-redux";
import BestSellers from '../components/bestSellers/BestSellers'

const mapDispatchToProps = (dispatch)=>{
  return {
    addGoods: (good) => {
      dispatch({
        type: 'ADD_GOODS',
        goods: good
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(BestSellers);