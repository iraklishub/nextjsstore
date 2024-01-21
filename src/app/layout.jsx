import { Poppins } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ReduxProvider } from '../redux/provider'
import '@/src/style/globals.css'

import { Header, Footer } from '@/src/layout'

const poppins = Poppins({ weight: '400', subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'softx',
  description: 'softx: test project'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <div className="flex flex-col items-center">
              <Header />
              {children}
              <Footer />
            </div>
          </AppRouterCacheProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
