"use client"

import Link from "next/link"
import { Globe } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          {/* Logo */}
          <Globe className="h-6 w-6 text-[#ff3141]" />
          <span>WeGo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-[#ff3141]">
            Home
          </Link>
          <Link href="/tours" className="hover:text-[#ff3141]">
            Tours
          </Link>
          <Link href="/contact" className="hover:text-[#ff3141]">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="hover:text-[#ff3141]">
              Home
            </Link>
            <Link href="/tours" className="hover:text-[#ff3141]">
              Tours
            </Link>
            <Link href="/contact" className="hover:text-[#ff3141]">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

