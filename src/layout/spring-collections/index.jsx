import Image from 'next/image'
import Link from 'next/link'
import springCollectionsImage from '@/public/images/springcollections.jpg'
import { Button, SmallArrowIcon, Timer } from '@/src/components'

const SpringCollections = ({ className }) => {
  return (
    <section className={`w-[1200px] h-[533px] relative ${className}`}>
      <Image src={springCollectionsImage} fill alt="springcollections" className="-z-10" />
      <div className="absolute right-36 top-16">
        <span className="text-3xl">
          <span className="text-[#3E5673]">SPRING</span>{' '}
          <span className="text-[#DE4F46]">COLLECTIONS</span>
        </span>
        <Link
          href={{
            pathname: '/products',
            query: { category: '' }
          }}
        >
          <Button type="button" variant="primary" className="text-[#EB5757] flex items-center mt-6">
            <span>SHOP NOW</span>
            <SmallArrowIcon className="ml-6" />
          </Button>
        </Link>
      </div>
      <Timer className="absolute right-52 top-56" />
    </section>
  )
}

export default SpringCollections
