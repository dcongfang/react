import {connect} from 'react-redux';
import ShopIndex from '../components/shopIndex/ShopIndex'
const mapStateToProps =(state)=>{
  return {
    list: state
  }
}
export default connect(mapStateToProps)(ShopIndex)