'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ProfileIcon, CartIcon, HeartIcon } from '@/src/components'
import { AuthModal } from '../..'

const HeaderIconsSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const { isLogedIn } = useSelector((state) => state.authReducer.value)

  return (
    <>
      <div className="flex items-center">
        {isLogedIn ? (
          // todo logout
          <button type="button" className="h-fit" onClick={() => console.log('logout todo')}>
            logout
          </button>
        ) : (
          <button type="button" className="h-fit" onClick={() => setModalOpen(true)}>
            <ProfileIcon />
          </button>
        )}
        <Link href="/cart" className="ml-4 h-fit">
          <CartIcon />
        </Link>
        {isLogedIn && (
          <Link href="/favorites" className="ml-4 h-fit">
            <HeartIcon />
          </Link>
        )}
      </div>
      {modalOpen && <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  )
}

export default HeaderIconsSection
