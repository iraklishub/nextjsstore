'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ProfileIcon, CartIcon, HeartIcon, LogoutIcon } from '@/src/components'
import { AuthModal } from '../..'
import { logOut } from '@/src/redux/features/auth-slice'

const HeaderIconsSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const { isLogedIn } = useSelector((state) => state.authReducer.value)

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <>
      <div className="flex items-center">
        {isLogedIn ? (
          <button type="button" className="" onClick={() => handleLogout()}>
            <LogoutIcon className="flex items-center justify-center" />
          </button>
        ) : (
          <button type="button" className="h-fit" onClick={() => setModalOpen(true)}>
            <ProfileIcon />
          </button>
        )}
        {isLogedIn ? (
          <Link href="/cart" className="ml-4 h-fit">
            <CartIcon />
          </Link>
        ) : (
          <button type="button" className="ml-4 h-fit" onClick={() => setModalOpen(true)}>
            <CartIcon />
          </button>
        )}

        {isLogedIn && (
          <Link
            href={{
              pathname: '/favorites',
              query: { category: '' }
            }}
            className="ml-4 h-fit"
          >
            <HeartIcon />
          </Link>
        )}
      </div>
      {modalOpen && <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  )
}

export default HeaderIconsSection
