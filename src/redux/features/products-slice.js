import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return {
        value: [...action.payload]
      }
    }
  }
})

export const { setProducts } = products.actions
export default products.reducer
