import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    isLogedIn: false,
    userToken: ''
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
          isLogedIn: true,
          userToken: action.payload
        }
      }
    }
  }
})

export const { login, logOut } = auth.actions
export default auth.reducer
