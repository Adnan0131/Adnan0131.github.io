import Link from 'next/link'
import { Instagram, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <Link href="https://www.instagram.com/_a_d_n_a_n_8?igsh=MzhnMmpzdTcyN3Ru" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-gray-600 hover:text-gray-800" />
          </Link>
          <Link href="mailto:Adnan.ahamed3101@gmail.com">
            <Mail className="text-gray-600 hover:text-gray-800" />
          </Link>
        </div>
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Adnan Ahamed. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

