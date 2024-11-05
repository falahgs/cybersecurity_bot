import React from 'react';
import { FaCode, FaMusic, FaBrain, FaMapMarkerAlt } from 'react-icons/fa';

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <h1 className="text-3xl font-bold mb-2">Falah GS</h1>
          <p className="text-xl opacity-90">AI & Machine Learning Developer</p>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Experience & Expertise */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaCode className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold">Professional Background</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              With over 10 years of experience in AI and Machine Learning development, 
              I've dedicated my career to advancing artificial intelligence technologies 
              and creating innovative solutions. My expertise spans across various domains 
              of machine learning, deep learning, and AI application development.
            </p>
          </section>

          {/* Location */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold">Location</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Based in Iraq, I bring a unique perspective to AI development, combining 
              global technological advances with local insights and applications.
            </p>
          </section>

          {/* AI Expertise */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FaBrain className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold">AI Expertise</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Deep Learning & Neural Networks</li>
              <li>Natural Language Processing</li>
              <li>Machine Learning Algorithms</li>
              <li>AI System Architecture</li>
              <li>Predictive Modeling</li>
              <li>Data Analysis & Visualization</li>
            </ul>
          </section>

          {/* Personal Interests */}
          <section>
            <div className="flex items-center mb-4">
              <FaMusic className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Beyond the world of AI and technology, I have a deep appreciation for 
              classical music. The mathematical precision and emotional depth of classical 
              compositions resonate with my approach to AI development - finding harmony 
              between technical precision and creative expression.
            </p>
          </section>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 p-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700">
            Interested in AI collaboration or have questions about machine learning? 
            Feel free to reach out through any of my social media channels linked 
            in the footer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 