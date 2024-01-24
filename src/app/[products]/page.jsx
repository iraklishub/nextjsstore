'use client'

import { useState } from 'react'
import { AsideCategories, ProductsList } from '@/src/layout'

export default function Products({ params }) {
  const minPrice = 0
  const maxPrice = 1500
  const [priceValue, setPriceValue] = useState([minPrice, maxPrice])

  return (
    <main className="w-[1440px] h-fit flex justify-center">
      <AsideCategories
        priceValue={priceValue}
        setPriceValue={setPriceValue}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <ProductsList priceValue={priceValue} />
    </main>
  )
}
