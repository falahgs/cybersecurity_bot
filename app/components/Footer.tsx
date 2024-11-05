import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram ,FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <Link 
              href="https://github.com/falahgs" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaGithub size={24} />
            </Link>
            <Link 
              href="https://twitter.com/FalahGatea" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaTwitter size={24} />
            </Link>
            <Link 
              href="https://linkedin.com/in/falah-gatea-060a211a7" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link 
              href="https://instagram.com/falah.g.saleih/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaInstagram size={24} />
            </Link>
            <Link 
              href="https://facebook.com/falahgs" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaFacebook size={24} />
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Falahgs4AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 