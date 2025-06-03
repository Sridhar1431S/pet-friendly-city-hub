
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PawCity 🐾
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Making cities paw-some, one street at a time! Join our tech-savvy community 
              of pet lovers transforming urban spaces into pet paradise. 🌆❤️
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-300">Quick Links 🔗</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#volunteer" className="text-gray-300 hover:text-white transition-colors duration-300">Volunteer</a></li>
              <li><a href="#impact" className="text-gray-300 hover:text-white transition-colors duration-300">Impact Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Pet Adoption</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-300">Get in Touch 📱</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail size={18} className="mr-3 text-purple-400" />
                <span>hello@pawcity.org</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={18} className="mr-3 text-purple-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-3 text-purple-400" />
                <span>Tech Hub, Bangalore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            Made with 💜 by the PawCity Community | Transforming cities, one paw at a time! 🐾
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
            <span>© 2024 PawCity. All rights reserved.</span>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
