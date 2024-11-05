import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWordpress } from 'react-icons/fa';
import { SiArduino } from 'react-icons/si';
import { BsCodeSquare, BsRobot } from 'react-icons/bs';
import { PiGraduationCapBold } from 'react-icons/pi';
import Link from 'next/link';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Profile Image & Header Section */}
      <div className="text-center mb-12">
        <div className="mb-6 flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-indigo-600 shadow-xl">
            <Image
              src="/images/falah.jpg"
              alt="Falah Gatea Saleh"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Falah Gatea Saleh</h1>
        <p className="text-xl text-gray-600">AI Researcher | Educator | Full Stack Developer</p>
      </div>

      {/* Bio Section */}
      <div className="prose lg:prose-xl mx-auto mb-12">
        <p className="text-gray-700 leading-relaxed">
          I am an educator and programmer passionate about bridging the gap between technology and education. 
          With expertise in AI, machine learning, and web development, I focus on creating innovative solutions 
          that enhance learning experiences and make technology accessible to Arabic-speaking audiences.
        </p>
      </div>

      {/* Expertise Areas */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <BsRobot className="text-2xl text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold">AI & Machine Learning</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Deep Learning Projects</li>
            <li>Computer Vision Applications</li>
            <li>Natural Language Processing</li>
            <li>AI in Education</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <BsCodeSquare className="text-2xl text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold">Programming & Development</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Full Stack Web Development</li>
            <li>Arduino & Electronics</li>
            <li>Technical Writing</li>
            <li>Educational Software Development</li>
          </ul>
        </div>
      </div>

      {/* Blog & Education Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg shadow-lg mb-12">
        <div className="flex items-center mb-4">
          <PiGraduationCapBold className="text-2xl text-indigo-600 mr-3" />
          <h2 className="text-xl font-semibold">Blog & Educational Content</h2>
        </div>
        <p className="text-gray-700 mb-4">
          I maintain an active blog "مدونة المبرمج العراقي" where I share insights about:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Latest AI and ML developments</li>
          <li>Programming tutorials and guides</li>
          <li>Educational technology insights</li>
          <li>E-learning systems and tools</li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6">
        <Link 
          href="https://github.com/falahgs" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaGithub size={28} />
        </Link>
        <Link 
          href="https://twitter.com/FalahGatea" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaTwitter size={28} />
        </Link>
        <Link 
          href="https://linkedin.com/in/falah-gatea-060a211a7" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaLinkedin size={28} />
        </Link>
        <Link 
          href="https://instagram.com/falah.g.saleih/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaInstagram size={28} />
        </Link>
        <Link 
          href="https://facebook.com/falahgs" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaFacebook size={28} />
        </Link>
        <Link 
          href="https://iraqprogrammer.wordpress.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaWordpress size={28} />
        </Link>
      </div>
    </div>
  );
};

export default AboutMe; 