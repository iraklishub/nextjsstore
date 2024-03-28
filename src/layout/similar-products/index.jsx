'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { setProducts } from '@/src/redux/features/products-slice'
import { useSelector, useDispatch } from 'react-redux'
import { ProductCard, ToggleFavorite, SlickSlider } from '@/src/components'
import { SliderSkeleton } from '@/src/skeletons'

const SimilarProducts = () => {
  const [loading, setLoading] = useState(true)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4
  }

  const dispatch = useDispatch()
  const products = useSelector((state) => state.productsReducer.value)

  useEffect(() => {
    setLoading(true)
    if (!products.length) {
      axios
        .get('https://fakestoreapi.com/products')
        .then(({ data }) => {
          dispatch(setProducts(data))
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
    <div className="w-full h-fit flex flex-col pl-32 mt-28 mb-12">
      <span className="text-[#41587B] text-2xl">Similar products</span>
      {loading ? (
        <SliderSkeleton />
      ) : (
        <div className="w-full mt-4">
          <SlickSlider settings={settings} className="relative">
            {products.map((product) => {
              const { id, image, price, rating, title } = product

              return (
                <div key={id} className="relative">
                  <ToggleFavorite id={id} className="top-[0.5rem] right-[3rem]" />
                  <Link href={`${id}`}>
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
          </SlickSlider>
        </div>
      )}
    </div>
  )
}

export default SimilarProducts
