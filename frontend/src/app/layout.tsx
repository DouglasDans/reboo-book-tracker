import type { Metadata } from 'next'
import { Open_Sans, Poppins } from 'next/font/google'
import '@/styles/global.scss'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["600"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
