import { Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#5C4B8A] p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FIC40F]"
          >
            <Instagram />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FIC40F]"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

