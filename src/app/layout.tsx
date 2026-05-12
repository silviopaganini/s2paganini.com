import type { Metadata } from 'next'
import { Fraunces, JetBrains_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dmsans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Silvio Paganini — Director of Software Engineering · Applied AI & LLM Systems',
  description:
    'Silvio Paganini is a Director of Software Engineering at BCG X, leading applied AI, LLM systems, and enterprise engineering delivery across LATAM. 25 years of building — from creative technology to production AI.',
  keywords:
    'applied AI, LLM systems, RAG, agentic workflows, software engineering director, BCG X, enterprise AI, generative AI, creative technology, WebGL, three.js, React, Python, LangChain, FastAPI, MLOps, São Paulo',
  authors: [{ name: 'Silvio Paganini' }],
  openGraph: {
    title: 'Silvio Paganini — Director of Software Engineering · Applied AI & LLM Systems',
    description:
      'Silvio Paganini is a Director of Software Engineering at BCG X, leading applied AI, LLM systems, and enterprise engineering delivery across LATAM. 25 years of building — from creative technology to production AI.',
    url: 'https://s2paganini.com',
    siteName: 's2paganini.com',
    images: [{ url: 'https://static.fluuu.id/share2.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silvio Paganini — Director of Software Engineering · Applied AI & LLM Systems',
    description:
      'Silvio Paganini is a Director of Software Engineering at BCG X, leading applied AI, LLM systems, and enterprise engineering delivery across LATAM.',
    images: ['https://static.fluuu.id/share2.png'],
  },
  icons: { icon: '/favicon.ico' },
  verification: { google: 'WpukxYhyFW_25sgpg_fPkc0ZJLHgc-EGXYtuItG3C-4' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
