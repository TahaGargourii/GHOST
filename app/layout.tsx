import type React from "react"
import type { Metadata } from "next"
import { Rajdhani, Outfit, Syncopate } from "next/font/google"
import "./globals.css"

// Sleek, modern, slightly eerie font for headings
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

// Clean, readable font for body text
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

// Futuristic, tech-like font for accents
const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
})

export const metadata: Metadata = {
  title: "GHOST | The Wolf is Back",
  description:
    "GHOST is a memecoin born from science fiction turned reality — inspired by the resurrection of the extinct dire wolf through cutting-edge genetics.",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dire-RU7KCaEc3IqMIxUgWWJ0ZVVGkLUMZa.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dire-RU7KCaEc3IqMIxUgWWJ0ZVVGkLUMZa.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dire-RU7KCaEc3IqMIxUgWWJ0ZVVGkLUMZa.png",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rajdhani.variable} ${outfit.variable} ${syncopate.variable}`}>{children}</body>
    </html>
  )
}


import './globals.css'