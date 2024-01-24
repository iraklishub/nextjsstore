import Link from 'next/link'
import Image from 'next/image'
import { DividerIcon } from '@/src/components'
import fbLogo from '@/public/images/fblogo.png'
import igLogo from '@/public/images/iglogo.png'
import visaLogo from '@/public/images/visa.png'
import mastercardLogo from '@/public/images/mastercard.png'
import amexpressLogo from '@/public/images/amexpress.png'

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] w-[1440px] flex justify-between px-20 pt-11 pb-40">
      <div>
        <span className="text-xl">Navigation</span>
        <DividerIcon className="mt-4" />
        <nav className="mt-5 text-[#41587B] text-lg">
          <ul>
            <li>
              <Link href="/">product</Link>
            </li>
            <li className="mt-4">
              <Link href="/">categories</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-16 flex items-center">
          <Link href="https://facebook.com">
            <Image src={fbLogo} width={30} height={30} alt="fblogo" />
          </Link>
          <Link href="https://instagram.com" className="ml-5">
            <Image src={igLogo} width={28} height={28} alt="iglogo" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xl">Payments</span>
        <DividerIcon className="mt-4" />
        <div className="mt-10 flex items-center">
          <Link href="/">
            <Image src={mastercardLogo} width={50} height={30} alt="mastercardlogo" />
          </Link>
          <Link href="/" className="ml-5">
            <Image src={visaLogo} width={50} height={30} alt="visalogo" />
          </Link>
          <Link href="/" className="ml-5">
            <Image src={amexpressLogo} width={50} height={23} alt="amexpresslogo" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
