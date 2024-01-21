import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import categoriesReducer from './features/categories-slice'

export const store = configureStore({
  reducer: {
    authReducer,
    categoriesReducer
  }
})
