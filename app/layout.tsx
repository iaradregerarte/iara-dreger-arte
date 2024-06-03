"use client";
import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname.startsWith('www.')) {
      router.replace(window.location.href.replace(/^https?:\/\/(?:www\.)?(.+)$/, 'https://$1'));
    }
  }, [router]);

  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
