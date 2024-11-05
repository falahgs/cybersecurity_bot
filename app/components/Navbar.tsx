import Link from 'next/link'
import { FaQuestionCircle, FaHome, FaInfoCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-16 border-r border-gray-200 bg-white">
      <div className="flex h-full flex-col items-center justify-start pt-8 space-y-6">
        <Link
          href="/"
          className="rounded-lg p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          title="Home"
        >
          <FaHome size={20} />
        </Link>
        <Link
          href="/help"
          className="rounded-lg p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          title="Cybersecurity Info"
        >
          <FaQuestionCircle size={20} />
        </Link>
        <Link
          href="/about"
          className="rounded-lg p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          title="About Me"
        >
          <FaInfoCircle size={20} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar 