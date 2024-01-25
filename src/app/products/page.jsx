'use client'

import { useState } from 'react'
import { AsideCategories, ProductsList } from '@/src/layout'
import { priceFilterConstants } from '@/src/utils'

export default function Products() {
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
      <ProductsList priceValue={priceValue} />
    </main>
  )
}
