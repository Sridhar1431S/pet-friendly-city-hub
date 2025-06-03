
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    switch (platform) {
      case 'facebook':
        window.open('https://facebook.com/pawcity', '_blank');
        break;
      case 'instagram':
        window.open('https://instagram.com/pawcity', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/pawcity', '_blank');
        break;
      default:
        alert(`Visit our ${platform} page to stay updated with our latest activities! 🐾`);
    }
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@pawcity.org';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleLocationClick = () => {
    alert('📍 Visit us at Tech Hub, Bangalore! We\'d love to meet you and your furry friends! 🐾');
  };

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
              <button 
                onClick={() => handleSocialClick('facebook')}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Facebook size={24} />
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')}
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Instagram size={24} />
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Twitter size={24} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-300">Quick Links 🔗</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavClick('#home')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">Home</button></li>
              <li><button onClick={() => handleNavClick('#impact')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">About Us</button></li>
              <li><button onClick={() => handleNavClick('#volunteer')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">Volunteer</button></li>
              <li><button onClick={() => handleNavClick('#impact')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">Impact Stories</button></li>
              <li><button onClick={() => alert('🐾 Pet Adoption portal coming soon! For now, check out our pet carousel above!')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">Pet Adoption</button></li>
              <li><button onClick={() => alert('📚 Resources page coming soon! Stay tuned for pet care guides and tips!')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">Resources</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-300">Get in Touch 📱</h4>
            <div className="space-y-3">
              <button 
                onClick={handleEmailClick}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-left"
              >
                <Mail size={18} className="mr-3 text-purple-400" />
                <span>hello@pawcity.org</span>
              </button>
              <button 
                onClick={handlePhoneClick}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-left"
              >
                <Phone size={18} className="mr-3 text-purple-400" />
                <span>+91 98765 43210</span>
              </button>
              <button 
                onClick={handleLocationClick}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-left"
              >
                <MapPin size={18} className="mr-3 text-purple-400" />
                <span>Tech Hub, Bangalore</span>
              </button>
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
            <button onClick={() => alert('📋 Privacy Policy coming soon! We value your privacy and data security.')} className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</button>
            <button onClick={() => alert('📄 Terms of Service coming soon! Fair and transparent terms for all users.')} className="hover:text-purple-400 transition-colors duration-300">Terms of Service</button>
            <button onClick={() => alert('🍪 Cookie Policy coming soon! Learn about how we use cookies responsibly.')} className="hover:text-purple-400 transition-colors duration-300">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
