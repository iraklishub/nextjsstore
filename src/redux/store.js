import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import categoriesReducer from './features/categories-slice'
import productsReducer from './features/products-slice'
import cartReducer from './features/cart-slice'
import favoritesReducer from './features/favorites-slice'

export const store = configureStore({
  reducer: {
    authReducer,
    categoriesReducer,
    productsReducer,
    cartReducer,
    favoritesReducer
  }
})
