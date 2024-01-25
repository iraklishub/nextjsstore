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
    },
    addFavorite: (state, action) => {
      return {
        value: [...state.value, action.payload]
      }
    },
    removeFavorite: (state, action) => {
      return {
        value: state.value.filter((fav) => fav !== action.payload)
      }
    }
  }
})

export const { setfavorites, addFavorite, removeFavorite } = favorites.actions
export default favorites.reducer
