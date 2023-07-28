import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// This is the layout file that wraps all pages.

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nick Huemmer',
  description: 'Nick Huemmer is a software engineer and designer.',
}
// Children is the content of the page. They must added to the layout.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>Layout</div>
        <div>
          {children}
        </div>
        </body>
    </html>
  )
}
