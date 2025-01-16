import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Loader from '@/components/Loader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '403Labs - Web Development Experts',
  description: 'We create stunning websites that drive results',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <Loader />
        {children}
      </body>
    </html>
  )
}

