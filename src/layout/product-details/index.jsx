'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/src/redux/features/cart-slice'
import { SlickSlider } from '@/src/components'
import Skeleton from '@mui/material/Skeleton'
import { Button, CartIcon } from '@/src/components'
import { AuthModal } from '@/src/layout'

const ProductDetails = ({ id }) => {
  const [loading, setLoading] = useState(true)
  const [authModalOpen, setAuthModalOpen] = useState(false)

  const [product, setProduct] = useState({
    id: undefined,
    title: '',
    price: '',
    description: '',
    image: ''
  })

  const images = Array(7).fill(product.image)

  const dispatch = useDispatch()
  const { isLogedIn } = useSelector((state) => state.authReducer.value)
  const cartProducts = useSelector((state) => state.cartReducer.value)

  const [quantity, setQuantity] = useState(1)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    focusOnSelect: true
  }

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(({ data }) => {
        setProduct(data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const increment = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleCartButtonClick = () => {
    if (isLogedIn) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity
        })
      )
    } else {
      setAuthModalOpen(true)
    }
  }

  return (
    <>
      <div className="w-full flex px-32 mt-20 justify-between">
        <div className="w-1/2 flex flex-col items-center">
          <div className="w-[533px] h-[396px] flex justify-center">
            {loading ? (
              <Skeleton variant="rectangular" width={533} height={396} />
            ) : (
              <Image
                src={product.image}
                width={533}
                height={396}
                alt="img"
                className="w-auto h-auto"
              />
            )}
          </div>
          {loading ? (
            <Skeleton variant="rectangular" width={450} height={120} className="mt-4" />
          ) : (
            <SlickSlider settings={settings} className="relative w-[500px] pl-14 pr-8 mt-4">
              {images.map((img, index) => (
                <div className="w-[87px] h-[124px]" key={index}>
                  <Image src={img} width={87} height={124} alt="img" className="cursor-pointer" />
                </div>
              ))}
            </SlickSlider>
          )}
        </div>
        <div className="w-1/2 flex flex-col">
          <span className="text-[#272727] text-2xl font-medium">{product.title}</span>
          <span className="text-[#3E5673] text-2xl font-semibold mt-4">$ {product.price}</span>
          <span className="text-[#000000] text-base font-medium mt-4">{product.description}</span>
          <div className="mt-6">
            <span className="text-base text-[#272727]">Quantity</span>
            <div className="rounded-sm border border-[#3E5673] w-fit mt-2">
              <button type="button" className="p-2" onClick={increment}>
                +
              </button>
              <span className="p-2">{quantity}</span>
              <button type="button" className="p-2" onClick={decrement}>
                -
              </button>
            </div>
          </div>
          <Button
            type="button"
            variant="primary"
            className="mt-10 text-[#3E5673] text-xl flex justify-center w-fit disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={handleCartButtonClick}
            disabled={cartProducts.some((product) => product.id === Number(id))}
          >
            <CartIcon />
            <span className="ml-2">+ Add to cart</span>
          </Button>
        </div>
      </div>
      {authModalOpen && <AuthModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} />}
    </>
  )
}

export default ProductDetails
