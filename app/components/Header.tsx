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

