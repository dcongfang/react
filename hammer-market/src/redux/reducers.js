// const initState = JSON.parse(localStorage.getItem('cartList')) || []
// window.localStorage.removeItem('cartList')

function addToCart(state = [], action) {
  switch (action.type) {
    case 'ADD_CART':
      let copyState = [...state.splice(0), action.good]
      let newState = copyState
      // localStorage.setItem('cartList', JSON.stringify(newState))
      return newState
    case 'DELETE_CART':
      return [...action.item]
    default:
      return state
  }
}

export default addToCart
