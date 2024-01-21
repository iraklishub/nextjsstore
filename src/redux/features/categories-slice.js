import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      return {
        value: [...action.payload]
      }
    }
  }
})

export const { setCategories } = categories.actions
export default categories.reducer
