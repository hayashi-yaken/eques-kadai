import './globals.css'
import React from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'equas-kadai',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='jp'>
      <body>{children}</body>
    </html>
  )
}
