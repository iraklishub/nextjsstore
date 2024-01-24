import clsx from 'clsx'
import Image from 'next/image'
import { HeartIcon } from '..'

const ProductCard = ({ title, image, price, orders, isFavorite, className }) => {
  return (
    <div className={clsx('w-[224px] h-[370px] flex flex-col border relative', className)}>
      <button
        type="button"
        className="absolute right-3 top-3 w-[36px] h-[36px] p-2 bg-[#000000]/30 hover:bg-[#000000]/70 flex items-center justify-center"
      >
        <HeartIcon fill={isFavorite && 'red'} stroke={isFavorite ? 'red' : 'white'} />
      </button>
      <Image src={image} width={224} height={258} alt="prodimg" className="w-[224px] h-[258px]" />
      <div className="w-full h-flex flex-col p-3">
        <p className="text-sm truncate">{title}</p>
        <span className="mt-4 text-sm flex justify-between">
          <span>${price}</span>
          <span>{orders} Orders</span>
        </span>
      </div>
    </div>
  )
}

export default ProductCard
