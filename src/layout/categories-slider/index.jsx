'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setCategories } from '@/src/redux/features/categories-slice'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CategoriesSliderSkeleton } from '@/src/skeletons'

import { ArrowIcon } from '@/src/components'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const CustomLeftArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-0 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-sm shadow-gray-500"
  >
    <ArrowIcon className="rotate-180" />
  </button>
)
const CustomRightArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-0 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-sm shadow-gray-500"
  >
    <ArrowIcon />
  </button>
)

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
      <div className="mt-16">
        {loading ? (
          <CategoriesSliderSkeleton />
        ) : (
          <Carousel
            responsive={responsive}
            infinite
            keyBoardControl
            autoPlay={false}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            slidesToSlide={1}
            className="h-fit w-[1200px]"
          >
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
          </Carousel>
        )}
      </div>
    </section>
  )
}

export default CategoriesSlider
