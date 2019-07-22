import {connect} from 'react-redux';
import Good from '../components/good/Good'

const mapStateToProps =(state)=>{
  return {
    list: state
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    addToGoods: (good) => {
      dispatch({
        type:'ADD_CART',
        id: good.id,
        good
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Good)