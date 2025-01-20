"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-[#5C4B8A] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Your Name
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-[#FIC40F]">
            Home
          </Link>
          <Link href="/extracurricular" className="hover:text-[#FIC40F]">
            Extracurricular
          </Link>
          <Link href="/academic" className="hover:text-[#FIC40F]">
            Academic
          </Link>
          <Link href="/contact" className="hover:text-[#FIC40F]">
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-2">
          <Link href="/" className="hover:text-[#FIC40F]">
            Home
          </Link>
          <Link href="/extracurricular" className="hover:text-[#FIC40F]">
            Extracurricular
          </Link>
          <Link href="/academic" className="hover:text-[#FIC40F]">
            Academic
          </Link>
          <Link href="/contact" className="hover:text-[#FIC40F]">
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header

