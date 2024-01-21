import Link from 'next/link'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { ProfileIcon, CartIcon } from '@/src/components'

const roboto = Roboto({ weight: '400', subsets: ['latin'], display: 'swap' })

const Header = () => {
  return (
    <header className="flex justify-around items-center w-[1440px] h-[76px]">
      <Link href="/">
        <Image src={logo} width={126} height={34} alt="logo" />
      </Link>
      <nav className={roboto.className}>
        <ul className="flex text-[#272727]">
          <li className="w-[85px] h-[25px] text-center">
            <Link href="/">Discovery</Link>
          </li>
          <li className="w-[85px] h-[25px] text-center">
            <Link href="/">About</Link>
          </li>
          <li className="w-[85px] h-[25px] text-center">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <button type="button" className="h-fit">
          <ProfileIcon />
        </button>
        <button type="button" className="ml-4 h-fit">
          <CartIcon />
        </button>
        {false && <button type="button">heart</button>}
        {/* todo favorites page/hearticon */}
      </div>
    </header>
  )
}

export default Header
