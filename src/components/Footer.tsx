import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-blue-100 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="h-10 w-auto bg-white p-1 rounded-full" />
              <span className="ml-3 text-xl font-bold text-white">Tech Link Solutions</span>
            </div>
            <p className="text-blue-200 mb-6 max-w-xs">
              Your strategic growth partner, helping brands scale through data-driven marketing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {['Social Media', 'Performance Marketing', 'SEO', 'E-Commerce', 'Content Creation'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#twitter" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors" aria-label="Twitter">
                <FaTwitter className="text-white" />
              </a>
             
              <a href="#instagram" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors" aria-label="Instagram">
                <FaInstagram className="text-white" />
              </a>
              <a href="#linkedin" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-blue-300 mb-4 md:mb-0">
              &copy; {currentYear} Tech Link Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <a key={link} href="#" className="text-blue-300 hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
