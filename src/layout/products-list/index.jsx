'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '@/src/redux/features/products-slice'
import { ProductCard, LoadingSpinner, PagePagination, ToggleFavorite } from '@/src/components'

import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

const ProductsList = ({ priceValue }) => {
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState('asc')
  const [page, setPage] = useState(1)

  const searchParams = useSearchParams()
  const categoriesToFilter = searchParams.get('category')
  const categoriesToFilterArray = categoriesToFilter ? categoriesToFilter.split(',') : []

  const minPrice = priceValue[0]
  const maxPrice = priceValue[1]

  const pathname = usePathname()
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productsReducer.value)

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://fakestoreapi.com/products', { params: { sort } })
      .then(({ data }) => {
        dispatch(setProducts(data))
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [sort])

  const handleChange = (event) => {
    setSort(event.target.value)
  }

  return (
    <div className="w-full">
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}
        className="flex flex-row w-fit mx-32"
      >
        <InputLabel id="sort-label" className="text-xs">
          Sort by:
        </InputLabel>
        <Select
          labelId="sort-label"
          id="sort-label"
          value={sort}
          onChange={handleChange}
          label="sort"
          className="w-[140px]"
        >
          <MenuItem value="desc">Descending</MenuItem>
          <MenuItem value="asc">Ascending</MenuItem>
        </Select>
      </FormControl>
      {loading ? (
        <LoadingSpinner className="w-full h-full flex justify-center items-center p-32" />
      ) : (
        <div className="flex flex-col items-end">
          <div className="flex w-full flex-wrap gap-4 px-32 mt-3.5 mb-12">
            {products
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
                    <Link href={`${pathname}/${id}`}>
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
              })}
          </div>
          <PagePagination className="mr-32 mb-24" page={page} onChange={(e, p) => setPage(p)} />
        </div>
      )}
    </div>
  )
}

export default ProductsList
