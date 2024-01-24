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
    }
  }
})

export const { setCart } = cart.actions
export default cart.reducer
