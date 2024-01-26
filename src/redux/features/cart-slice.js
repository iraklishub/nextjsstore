import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      return {
        value: [...action.payload]
      }
    },
    addToCart: (state, action) => {
      return {
        value: [...state.value, action.payload]
      }
    },
    removeFromCart: (state, action) => {
      return {
        value: state.value.filter((cart) => cart.id !== action.payload.id)
      }
    },
    changeQuantity: (state, action) => {
      return {
        value: state.value.map((fav) => {
          if (fav.id === action.payload.id) {
            // Modify the quantity for the specific item with matching id
            return {
              ...fav,
              quantity: action.payload.quantity // Update quantity with new value
            }
          }
          return fav // Return unchanged item for other items in the array
        })
      }
    }
  }
})

export const { setCart, addToCart, removeFromCart, changeQuantity } = cart.actions
export default cart.reducer
