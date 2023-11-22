import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400','500', '700', '900']})

export const metadata = {
  title: 'Birthday Page',
  description: 'Special page for the person their birthday',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
