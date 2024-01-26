'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setCategories } from '@/src/redux/features/categories-slice'
import { SlickSlider } from '@/src/components'
import { SliderSkeleton } from '@/src/skeletons'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
}

const CategoriesSlider = ({ className }) => {
  const [loading, setLoading] = useState(false)

  const categories = useSelector((state) => state.categoriesReducer.value)
  const dispatch = useDispatch()

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

  return (
    <section className={`w-full text-center flex flex-col items-center ${className}`}>
      <h2 className="text-[#41587B] text-4xl">Categories</h2>
      <div className="w-full mt-16 px-20">
        {loading ? (
          <SliderSkeleton />
        ) : (
          <SlickSlider settings={settings} className="relative px-14">
            {categories.map((category) => (
              <Link
                href={{
                  pathname: '/products',
                  query: { category }
                }}
                key={category}
              >
                <div className="flex flex-col items-center">
                  <Image src={undefined} width={230} height={140} alt="image" />
                  <span className="mt-5 text-2xl font-medium tracking-[5px]">{category}</span>
                </div>
              </Link>
            ))}
          </SlickSlider>
        )}
      </div>
    </section>
  )
}

export default CategoriesSlider
