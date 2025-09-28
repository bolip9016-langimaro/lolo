import React from 'react';
import { Facebook, Instagram, Youtube, ArrowUp, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/10 to-transparent"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-600/5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-600/5 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-start mb-8">
              <div className="relative flex-shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="Haideri Consultants" 
                  className="h-12 w-12 sm:h-16 sm:w-16 rounded-full mr-3 sm:mr-4 object-cover border-2 sm:border-4 border-red-600 shadow-lg flex-shrink-0"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-wider leading-tight" style={{fontFamily: 'Montserrat, Arial Black, sans-serif', fontWeight: '900', textShadow: '2px 2px 8px rgba(0,0,0,0.3)'}}>
                  <span className="text-red-600">HAIDERI</span>
                  <span className="text-white ml-1 sm:ml-2">CONSULTANTS</span>
                </h3>
                <p className="text-transparent bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text font-bold text-xs sm:text-sm lg:text-base tracking-widest uppercase mt-1" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '2px'}}>
                  INTERNATIONAL GROUP
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl">
              With over 15 years of excellence in immigration services, we are your trusted partner 
              in achieving your global dreams. Our expert team provides comprehensive visa and 
              immigration services with a proven 95% success rate.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-red-600/20 to-transparent p-4 rounded-lg border border-red-600/30">
                <div className="text-2xl font-bold text-red-400">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-gradient-to-r from-green-600/20 to-transparent p-4 rounded-lg border border-green-600/30">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-red-400 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Contact Information
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start group hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-300">
                <MapPin className="h-5 w-5 text-red-400 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Office 23 Kashif Plaza<br />
                    Opposite PSO Pump<br />
                    Main Sanda Road, Lahore, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-300">
                <Phone className="h-5 w-5 text-red-400 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                <div className="space-y-1">
                  <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    (+92) 318 720 3522
                  </p>
                  <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    (+92) 423 715 8088
                  </p>
                  <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    (+92) 321 423 4930
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-300">
                <Mail className="h-5 w-5 text-red-400 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    info@haidericonsultants.com
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-300">
                <Clock className="h-5 w-5 text-red-400 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300">Mon - Sat: 11:00 AM - 7:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-red-400">Our Services</h4>
            <div className="space-y-3">
              {[
                'Tourist Visa',
                'Student Visa', 
                'Work Visa',
                'Family Visa',
                'Immigration',
                'Documentation'
              ].map((service, index) => (
                <div key={index} className="group">
                  <span className="text-gray-300 hover:text-red-400 transition-all duration-300 cursor-pointer flex items-center group-hover:translate-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:bg-red-400 transition-colors"></div>
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4 text-white">Popular Destinations</h5>
              <div className="flex flex-wrap gap-2">
                {['Canada', 'Australia', 'UK', 'USA', 'Germany'].map((country, index) => (
                  <span key={index} className="bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer hover:scale-105">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Back to Top */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h5 className="text-lg font-semibold mb-4 text-white">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://web.facebook.com/haidericonsultants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
                >
                  <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/haidericonsultants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
                >
                  <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.youtube.com/@HaideriConsultants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-red-600 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
                >
                  <Youtube className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.tiktok.com/@haideri.consultan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-black p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-lg"
                >
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-red-600 hover:bg-white hover:text-red-600 p-4 rounded-full transition-all duration-300 hover:scale-110 group shadow-lg hover:shadow-xl"
            >
              <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Haideri Consultants. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Trusted Immigration Partner Since 2009
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-all duration-300 hover:scale-105">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-all duration-300 hover:scale-105">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-all duration-300 hover:scale-105">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;