import React from 'react';

const CyberSecurityInfo = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Cybersecurity Best Practices</h1>

      <div className="space-y-8">
        {/* Password Security */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Password Security</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use strong, unique passwords for each account</li>
            <li>Enable two-factor authentication (2FA) when available</li>
            <li>Avoid using personal information in passwords</li>
            <li>Consider using a password manager</li>
          </ul>
        </section>

        {/* Online Safety */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Online Safety</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Be cautious with links in emails and messages</li>
            <li>Verify website security (look for HTTPS)</li>
            <li>Don't share sensitive information on social media</li>
            <li>Be careful when using public Wi-Fi networks</li>
          </ul>
        </section>

        {/* Data Protection */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Protection</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Regularly backup important data</li>
            <li>Use encryption for sensitive information</li>
            <li>Keep software and systems updated</li>
            <li>Use antivirus software and keep it updated</li>
          </ul>
        </section>

        {/* AI Security */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Chat Safety</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Don't share personal or sensitive information with AI chatbots</li>
            <li>Be aware that AI responses should be verified</li>
            <li>Use AI tools from reputable sources only</li>
            <li>Review and understand privacy policies of AI services</li>
          </ul>
        </section>

        {/* Warning Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Remember: Your security is your responsibility. Always stay vigilant and keep your systems updated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityInfo; 