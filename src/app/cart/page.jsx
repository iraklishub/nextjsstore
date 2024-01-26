'use client'

import { redirect } from 'next/navigation'
import { removeFromCart, changeQuantity, setCart } from '@/src/redux/features/cart-slice'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@/src/components'

export default function Cart() {
  const { isLogedIn } = useSelector((state) => state.authReducer.value)

  if (!isLogedIn) {
    redirect('/')
  }

  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state.cartReducer.value)

  const increment = (id, quantity) => {
    dispatch(changeQuantity({ id, quantity: quantity + 1 }))
  }

  const decrement = (id, quantity) => {
    if (quantity > 1) {
      dispatch(changeQuantity({ id, quantity: quantity - 1 }))
    }
  }

  // const [total, setTotal] = useState(second)

  return !cartProducts.length ? (
    <span>cart is empty</span>
  ) : (
    <>
      <main className="w-[1440px] flex flex-col items-center">
        <div className="w-[1180px] flex justify-end mt-4">
          <button type="button" className="text-red-600" onClick={() => dispatch(setCart([]))}>
            Clear Cart
          </button>
        </div>
        <div className="w-full flex flex-col items-center">
          {cartProducts.map(({ id, title, image, price, quantity }) => {
            return (
              <div key={id} className="flex w-[1180px] border-b border-[#3E5572] py-[50px]">
                <div className="w-3/5 flex items-center">
                  <Image
                    src={image}
                    width={226}
                    height={202}
                    alt="img"
                    className="w-[226px] h-[202px]"
                  />

                  <div className="flex flex-col ml-10">
                    <span className="text-[#3E5572] text-xl">{title}</span>
                    <span className="text-[#3E5674] text-2xl font-semibold mt-6">
                      $ {quantity * price}
                    </span>
                  </div>
                </div>
                <div className="w-2/5 flex items-center justify-between pr-8">
                  <div className="ml-4">
                    <span className="text-base text-[#272727]">Quantity</span>
                    <div className="rounded-sm border border-[#3E5673] w-fit mt-2">
                      <button type="button" className="p-2" onClick={() => increment(id, quantity)}>
                        +
                      </button>
                      <span className="p-2">{quantity}</span>
                      <button type="button" className="p-2" onClick={() => decrement(id, quantity)}>
                        -
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-red-600 mt-4"
                    onClick={() => dispatch(removeFromCart({ id }))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <section className="w-[1180px] py-16 flex justify-between">
        <span className="text-[#3E5673] text-4xl">
          Total: ${' '}
          {cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
          }, 0)}
        </span>
        <Button
          type="button"
          variant="secondary"
          className="mt-28"
          onClick={() => console.log('payment')}
        >
          Check-out
        </Button>
      </section>
    </>
  )
}
