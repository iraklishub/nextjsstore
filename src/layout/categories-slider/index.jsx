'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setCategories } from '@/src/redux/features/categories-slice'
import { SlickSlider } from '@/src/components'
import { SliderSkeleton } from '@/src/skeletons'
import exclusiveShoesImage from '@/public/images/exclusiveshoes.jpg'
import stylesCollectionsImage from '@/public/images/stylescollections.jpg'
import newArrivalsImage from '@/public/images/newarivals.jpg'
import exclusiveItemsImage from '@/public/images/exclusiveitems.jpg'

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

  const images = [exclusiveShoesImage, stylesCollectionsImage, newArrivalsImage, exclusiveItemsImage]

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
            {categories.map((c, index) => {
              const category = { name: c, image: images[index] }
              return (
                <Link
                  href={{
                    pathname: '/products',
                    query: { category: category.name }
                  }}
                  key={category.name}
                >
                  <div className="flex flex-col items-center">
                    <Image src={category.image} width={230} height={140} alt="image" className='h-[140px]'/>
                    <span className="mt-5 text-2xl font-medium tracking-[5px]">{category.name}</span>
                  </div>
                </Link>
              )
            })}
          </SlickSlider>
        )}
      </div>
    </section>
  )
}

export default CategoriesSlider
