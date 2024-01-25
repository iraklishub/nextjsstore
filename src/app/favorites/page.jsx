'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { redirect } from 'next/navigation'
import { AsideCategories, FavoritesList } from '@/src/layout'
import { priceFilterConstants } from '@/src/utils'

export default function Favorites() {
  const { isLogedIn } = useSelector((state) => state.authReducer.value)

  if (!isLogedIn) {
    redirect('/')
  }

  const { minPrice, maxPrice } = priceFilterConstants
  const [priceValue, setPriceValue] = useState([minPrice, maxPrice])

  return (
    <main className="w-[1440px] h-fit flex justify-center">
      <AsideCategories
        priceValue={priceValue}
        setPriceValue={setPriceValue}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <FavoritesList priceValue={priceValue} />
    </main>
  )
}
