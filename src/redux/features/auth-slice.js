import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    isAuth: false,
    username: ''
  }
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    login: (state, action) => {
      return {
        value: {
          isAuth: true,
          username: action.payload
        }
      }
    }
  }
})

export const { login, logOut } = auth.actions
export default auth.reducer
