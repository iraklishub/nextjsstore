'use client'

import { useState } from 'react'
import { HeartIcon } from '..'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '@/src/redux/features/favorites-slice'
import { AuthModal } from '@/src/layout'

const ToggleFavorite = ({ id }) => {
  const [authModalOpen, setAuthModalOpen] = useState(false)

  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favoritesReducer.value)
  const { isLogedIn } = useSelector((state) => state.authReducer.value)

  const isFavorite = favorites.includes(id)

  const handleFavoriteToggle = () => {
    if (isLogedIn) {
      if (isFavorite) {
        dispatch(removeFavorite(id))
      } else {
        dispatch(addFavorite(id))
      }
    } else {
      setAuthModalOpen(true)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleFavoriteToggle}
        className="absolute right-3 top-3 w-[36px] h-[36px] p-2 bg-[#000000]/30 hover:bg-[#000000]/70 flex items-center justify-center z-10"
      >
        <HeartIcon
          fill={isLogedIn && isFavorite && 'red'}
          stroke={isLogedIn && isFavorite ? 'red' : 'white'}
        />
      </button>
      {authModalOpen && <AuthModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} />}
    </>
  )
}

export default ToggleFavorite
