import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">Adnan Ahamed</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
          <li><Link href="/projects" className="text-gray-600 hover:text-gray-800">Projects</Link></li>
          <li><Link href="/activities" className="text-gray-600 hover:text-gray-800">Activities</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

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
          Portfolio
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

