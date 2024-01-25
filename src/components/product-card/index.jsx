import clsx from 'clsx'
import Image from 'next/image'

const ProductCard = ({ title, image, price, orders, className }) => {
  return (
    <div className={clsx('w-[224px] h-[370px] flex flex-col border', className)}>
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
