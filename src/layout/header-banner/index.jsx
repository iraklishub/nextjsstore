import Image from 'next/image'
import Link from 'next/link'
import headerBannerImage from '@/public/images/headerbanner.png'
import hangerIcon from '@/public/images/hangericon.png'
import { Button } from '@/src/components'

const HeaderBanner = ({ className }) => {
  return (
    <section
      className={`w-[1440px] h-[780px] relative flex items-center justify-center ${className}`}
    >
      <Image src={headerBannerImage} fill alt="headerbanner" className="-z-10 mt-2" />
      <div className="w-[730px] h-[350px] bg-[#f7f8fa]/80 rounded-[20px] flex flex-col items-center">
        <Image src={hangerIcon} width={132} height={100} alt="hangerico" className="mt-4" />
        <p className="text-wrap text-[#41587B] text-4xl font-medium text-center leading-[57px]">
          Start The Day <br />
          With Closet.
        </p>
        <Link
          href={{
            pathname: '/products',
            query: { category: '' }
          }}
        >
          <Button type="button" variant="secondary" className="mt-6">
            Discovery our collection
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default HeaderBanner
