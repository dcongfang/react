const initState = JSON.parse(localStorage.getItem('cartList')) || []
// window.localStorage.removeItem('cartList')

function addToCart(state = initState, action) {
  switch (action.type) {
    case 'ADD_CART':
      let copyState = [...state.splice(0), action.good]
      // let arr = copyState.map(el => {
      //   el.count = 1
      //   return el;
      // })
      // console.log(arr.filter((item) => item.id = action.id))
      // let len = arr.length
      // console.log(arr.length)
      // let map = new Map()
      // let result = []
      // if (arr.length > 1) {
      //   for (let i = 0; i < arr.length; i++) {
      //     if (map.has(arr[i])) {
      //       map.set(arr[i], true)
      //     } else {
      //       map.set(arr[i], false)
      //       result.push(arr[i])
      //     }
      //     return result
      //   }
      // }else {
        
      // }
      // arr.find((item) => item.id === action.id)
      // if (arr.length > 1) {
      //   for (var i = 0; i < arr.length - 1; i++) {
      //     for (var j = i+1; j < arr.length; j++) {
      //       if (i !== j) {
      //         if (arr[i].id === arr[j].id) {
      //           arr.splice(j, 1)
      //           j = j - 1
      //           arr[i].count += 1
      //         }
      //       }
      //     }
      //   }
      // }
      // let newArr = arr.filter((item) => item.id = action.id)
      let newState = copyState
      localStorage.setItem('cartList', JSON.stringify(newState))
      return newState
    default:
      return state
  }
}

export default addToCart
