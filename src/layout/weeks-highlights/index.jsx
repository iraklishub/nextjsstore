import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Divider from '@mui/material/Divider'
import exclusiveShoesImage from '@/public/images/exclusiveshoes.jpg'
import stylesCollectionsImage from '@/public/images/stylescollections.jpg'
import newArrivalsImage from '@/public/images/newarivals.jpg'
import exclusiveItemsImage from '@/public/images/exclusiveitems.jpg'

const WeeksHighlights = ({ className }) => {
  const items = [
    {
      id: 1,
      image: exclusiveShoesImage,
      title: 'Exclusive Shoes',
      price: 'PRICE 20% OFF',
      code: 'DISCOUNT CODE - VATR3920'
    },
    {
      id: 2,
      image: stylesCollectionsImage,
      title: 'Exquisite Styles & Collections',
      price: 'PRICE 20% OFF',
      code: 'DISCOUNT CODE - VATR3920'
    },
    {
      id: 3,
      image: newArrivalsImage,
      title: 'New Arrivals',
      price: 'PRICE 20% OFF',
      code: 'DISCOUNT CODE - VATR3920'
    },
    {
      id: 4,
      image: exclusiveItemsImage,
      title: 'Exclusive Items',
      price: 'PRICE 20% OFF',
      code: 'DISCOUNT CODE - VATR3920'
    }
  ]

  return (
    <section className={`w-full flex flex-col items-center pb-[216px] ${className}`}>
      <p className="text-[#41587B] text-4xl">
        THIS WEEKS <br /> HIGHLIGHTS
      </p>
      <Divider className="mt-8 w-[60px] border-b-1 border-[#374151]" />
      <div className="flex flex-wrap justify-center gap-4 mt-14">
        {items.map(({ id, image, title, price, code }, index) => (
          <Link
            href={{
              pathname: '/products',
              query: { category: '' }
            }}
            key={id}
          >
            <div
              className={clsx(
                'relative h-[383px] flex items-center justify-center',
                (index === 1 || index === 2) && 'w-[654px]',
                (index === 0 || index === 3) && 'w-[400px]'
              )}
            >
              <Image src={image} fill alt="img" className="-z-10" />
              <span className="text-white text-4xl">{title}</span>
              <div className="w-[190px] h-[75px] absolute bottom-[15px] left-[15px] bg-[#000000]/30 text-[#F9FAFB] flex flex-col p-[8px]">
                <span className="text-xs truncate">{title}</span>
                <span className="text-[9px] mt-[6px]">{price}</span>
                <span className="text-[8px] mt-[11px]">{code}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default WeeksHighlights
