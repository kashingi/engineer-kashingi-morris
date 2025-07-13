import React from 'react';
import { personalInfo, navigationLinks } from '../constants/data';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Eng <span className="text-blue-500">Morris</span></h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              Building exceptional digital experiences that solve real business problems. Let's create something amazing together.
            </p>
            <div className="flex space-x-4 mt-4">
              {personalInfo.socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;