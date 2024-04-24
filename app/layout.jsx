import { ContextProvider } from './context/context'
import { Montserrat } from 'next/font/google'
import Header from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.scss'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['200'] })

export const metadata = {
  title: 'Royal House Makers',
  description: 'Visit Royal House Makerx and Choose Your Dream House',
}

export default async function RootLayout({ children }) {

  return (
    <html lang='en'>
      <body id='body' style={{overflowX:"hidden", margin:"0px", padding:"0px"}} className={montserrat.className}>
        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  )
}
