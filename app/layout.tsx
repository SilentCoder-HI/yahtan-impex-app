import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Yahtan Impex - Premium Quality Clothing",
  description: "Your premier destination for high-quality clothing that combines comfort, style, and durability.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${playfair.variable} ${montserrat.variable} font-montserrat bg-gradient-to-b from-[#f7fff7cc] to-[#e4e8edcc] relative min-h-screen overflow-x-hidden`}
      >
        <div className="fixed inset-0 w-full h-full opacity-20 -z-10">
          <img src="/background.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        {children}
      </body>
    </html>
  )
}
