import type { Metadata, Viewport } from 'next'
import { Questrial, Roboto } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const questrial = Questrial({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-questrial',
})

const roboto = Roboto({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Jonathan Wu',
  description: "Jonathan Wu's personal website",
  authors: [{ name: 'Jonathan Paul Wu' }],
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#1f1f1f',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${questrial.variable} ${roboto.variable}`}>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/imgs/portrait.webp" as="image" />
        <link rel="preload" href="/imgs/external.svg" as="image" />
        <link rel="preload" href="/Jonathan Wu Resume.pdf" as="document" />
        <link rel="preload" href="/imgs/yume.webp" as="image" />
      </head>
      <body className="bg-background min-h-screen m-0 p-0">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
