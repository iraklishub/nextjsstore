'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import axios from 'axios'
import Slider from '@mui/material/Slider'
import Checkbox from '@mui/material/Checkbox'
import { useSelector, useDispatch } from 'react-redux'
import { setCategories } from '@/src/redux/features/categories-slice'
import { LoadingSpinner } from '@/src/components'

const AsideCategories = ({ priceValue, setPriceValue, minPrice, maxPrice }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const categories = useSelector((state) => state.categoriesReducer.value)

  useEffect(() => {
    setLoading(true)
    if (!categories.length) {
      axios
        .get('https://fakestoreapi.com/products/categories')
        .then(({ data }) => {
          dispatch(setCategories(data))
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    setLoading(false)
  }, [])

  const router = useRouter()
  const pathname = usePathname()

  const searchParams = useSearchParams()
  const categoriesToFilter = searchParams.get('category')

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handleCheckedChange = (check, category) => {
    let newFilter

    // Convert the string to an array by splitting it using the delimiter
    const currentCategories = categoriesToFilter.split(',')

    if (check) {
      // Add category to the filter array if checkbox is checked
      newFilter = [...currentCategories, category]
    } else {
      // Remove category from the filter array if checkbox is unchecked
      newFilter = currentCategories.filter((c) => c !== category)
    }

    // Join the array back into a string using the delimiter
    const newFilterString = newFilter.join(',')

    router.push(pathname + '?' + createQueryString('category', newFilterString))
  }

  return (
    <aside className="w-[255px] bg-[#F9FAFB] p-4">
      <div className="flex flex-col">
        <span className="text-[#1F2937] text-xs">PRICES</span>
        <span className="flex justify-between text-[10px] text-[#4B5563] mt-4">
          <span>Range</span>
          <span>
            ₾{priceValue[0]} - ₾{priceValue[1]}
          </span>
        </span>
        <Slider
          value={priceValue}
          onChange={(e, newValue) => setPriceValue(newValue)}
          valueLabelDisplay="auto"
          max={maxPrice}
          min={minPrice}
          size="medium"
          className="mt-2"
        />
      </div>
      <div className="flex flex-col mt-10">
        <span className="text-[#1F2937] text-xs">CATEGORIES</span>
        {loading ? (
          <LoadingSpinner className="w-full h-full flex justify-center items-center" />
        ) : (
          <div className="flex flex-col">
            {categories.map((category) => {
              const isCategoryChecked = categoriesToFilter.split(",").map(cat => cat.trim()).includes(category)
              
              return (
                <label key={category} className="text-[10px] text-[#1F2937]">
                  <Checkbox
                    id={category}
                    name={category}
                    key={category}
                    checked={isCategoryChecked}
                    onChange={(e) => handleCheckedChange(e.target.checked, category)}
                  />
                  {category}
                </label>
              )
            })}
          </div>
        )}
      </div>
    </aside>
  )
}

export default AsideCategories
