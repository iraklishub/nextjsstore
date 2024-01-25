'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { ProductCard, PagePagination, ToggleFavorite } from '@/src/components'

const FavoritesList = ({ priceValue }) => {
  const [page, setPage] = useState(1)

  const searchParams = useSearchParams()
  const categoriesToFilter = searchParams.get('category')
  const categoriesToFilterArray = categoriesToFilter ? categoriesToFilter.split(',') : []

  const minPrice = priceValue[0]
  const maxPrice = priceValue[1]

  const favorites = useSelector((state) => state.favoritesReducer.value)
  const products = useSelector((state) => state.productsReducer.value)

  return (
    <div className="w-full">
      <div className="flex flex-col items-end">
        <div className="flex w-full flex-wrap gap-4 px-32 mt-3.5 mb-12">
          {!favorites.length ? (
            <span>no favorites found</span>
          ) : (
            products
              .filter((p) => favorites.includes(p.id))
              .filter((p) => {
                if (categoriesToFilterArray.length) {
                  // Filter by both price and category when categories are checked
                  return (
                    p.price >= minPrice &&
                    p.price <= maxPrice &&
                    categoriesToFilterArray.includes(p.category)
                  )
                } else {
                  // Filter only by price when no categories are checked
                  return p.price >= minPrice && p.price <= maxPrice
                }
                // return p.price >= minPrice && p.price <= maxPrice
              })
              .map((product) => {
                const { id, image, price, rating, title } = product

                return (
                  <div key={id} className="relative">
                    <ToggleFavorite id={id} />
                    <Link href={`products/${id}`}>
                      <ProductCard
                        id={id}
                        title={title}
                        image={image}
                        price={price}
                        orders={rating.count}
                        className=""
                      />
                    </Link>
                  </div>
                )
              })
          )}
        </div>
        <PagePagination className="mr-32 mb-24" page={page} onChange={(e, p) => setPage(p)} />
      </div>
    </div>
  )
}

export default FavoritesList
