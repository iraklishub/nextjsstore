'use client'

import { useState, Suspense } from 'react'
import { AsideCategories, ProductsList } from '@/src/layout'
import { priceFilterConstants } from '@/src/utils'
import { LoadingSpinner } from '@/src/components'

export default function Products() {
  const { minPrice, maxPrice } = priceFilterConstants
  const [priceValue, setPriceValue] = useState([minPrice, maxPrice])

  return (
    <main className="w-[1440px] h-fit flex justify-center">
      <Suspense
        fallback={<LoadingSpinner className="w-full h-full flex justify-center items-center" />}
      >
        <AsideCategories
          priceValue={priceValue}
          setPriceValue={setPriceValue}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <ProductsList priceValue={priceValue} />
      </Suspense>
    </main>
  )
}
