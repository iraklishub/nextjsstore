import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setfavorites: (state, action) => {
      return {
        value: [...action.payload]
      }
    }
  }
})

export const { setfavorites } = favorites.actions
export default favorites.reducer
