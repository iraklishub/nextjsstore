import Link from 'next/link'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import HeaderIconsSection from './icons-section'

const roboto = Roboto({ weight: '400', subsets: ['latin'], display: 'swap' })

const Header = () => {
  return (
    <header className="flex justify-around items-center w-[1440px] h-[76px] border-b">
      <Link href="/">
        <Image src={logo} width={126} height={34} alt="logo" />
      </Link>
      <nav className={roboto.className}>
        <ul className="flex text-[#272727]">
          <li className="w-[85px] h-[25px] text-center">
            <Link
              href={{
                pathname: '/products',
                query: { category: '' }
              }}
            >
              Discovery
            </Link>
          </li>
          <li className="w-[85px] h-[25px] text-center">
            <Link href="/">About</Link>
          </li>
          <li className="w-[85px] h-[25px] text-center">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <HeaderIconsSection />
    </header>
  )
}

export default Header
