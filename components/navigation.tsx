"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-md shadow-md z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 font-playfair text-2xl font-bold text-[#FF6B6B] select-none">
            Yahtan Impex
          </Link>

          <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
            <Link href="/#products" className="hover:text-[#FF6B6B] transition-colors duration-300">
              Products
            </Link>
            <Link href="/#about" className="hover:text-[#FF6B6B] transition-colors duration-300">
              About Us
            </Link>
            <Link href="/#contact" className="hover:text-[#FF6B6B] transition-colors duration-300">
              Contact
            </Link>
            <Link href="/#testimonials" className="hover:text-[#FF6B6B] transition-colors duration-300">
              Testimonials
            </Link>
            <Link href="/#news" className="hover:text-[#FF6B6B] transition-colors duration-300">
              News
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 shadow-inner">
          <Link
            href="/#products"
            className="block px-4 py-2 text-gray-700 hover:bg-[#FF6B6B] hover:text-white transition"
          >
            Products
          </Link>
          <Link href="/#about" className="block px-4 py-2 text-gray-700 hover:bg-[#FF6B6B] hover:text-white transition">
            About Us
          </Link>
          <Link
            href="/#contact"
            className="block px-4 py-2 text-gray-700 hover:bg-[#FF6B6B] hover:text-white transition"
          >
            Contact
          </Link>
          <Link
            href="/#testimonials"
            className="block px-4 py-2 text-gray-700 hover:bg-[#FF6B6B] hover:text-white transition"
          >
            Testimonials
          </Link>
          <Link href="/#news" className="block px-4 py-2 text-gray-700 hover:bg-[#FF6B6B] hover:text-white transition">
            News
          </Link>
        </div>
      )}
    </nav>
  )
}
