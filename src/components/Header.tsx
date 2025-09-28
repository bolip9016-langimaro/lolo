import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleMenuItemClick = () => {
    closeMenu();
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    handleMenuItemClick();
  };

  return (
    <>
      {/* Top Bar - Hidden on small mobile devices */}
      <div className="bg-black text-white py-2 px-4 animate-slideDown hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>(+92) 318 720 3522</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>info@haidericonsultants.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 hidden md:flex">
            <MapPin className="w-3 h-3" />
            <span>Office 23 Kashif Plaza, Main Sanda Road Lahore</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4 relative">
            {/* Logo - Responsive sizing */}
            <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <img 
                src="/logo.jpg" 
                alt="Haideri Consultants" 
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full mr-2 sm:mr-3 object-cover border-2 border-red-600 shadow-lg"
              />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-black tracking-wider haideri-logo-text leading-tight" style={{fontFamily: 'Montserrat, Arial Black, sans-serif', fontWeight: '900'}}>
                  <span className="text-red-600">HAIDERI</span>
                  <span className="text-black ml-1 sm:ml-2">CONSULTANTS</span>
                </h1>
                <p className="text-xs font-bold text-gray-600 tracking-widest uppercase hidden sm:block" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '2px', fontSize: '9px'}}>
                  INTERNATIONAL GROUP
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link to="/" onClick={handleMenuItemClick} className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/about" onClick={handleMenuItemClick} className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/talent-services" onClick={handleMenuItemClick} className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 relative group">
                Talent Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 flex items-center"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    <Link to="/services/tourist-visa" onClick={handleMenuItemClick} className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Tourist Visa</Link>
                    <Link to="/services/student-visa" onClick={handleMenuItemClick} className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Student Visa</Link>
                    <Link to="/services/work-visa" onClick={handleMenuItemClick} className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Work Visa</Link>
                    <Link to="/services/family-visa" onClick={handleMenuItemClick} className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Family Visa</Link>
                    <Link to="/services/immigration" onClick={handleMenuItemClick} className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Immigration</Link>
                    <Link to="/services/documentation" onClick={handleMenuItemClick} className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Documentation</Link>
                  </div>
                </div>
              </div>
              <Link to="/countries" onClick={handleMenuItemClick} className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 relative group">
                Countries
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/testimonials" onClick={handleMenuItemClick} className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 relative group">
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/contact" onClick={handleMenuItemClick} className="bg-red-600 text-white px-4 xl:px-6 py-2 rounded-full hover:bg-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm xl:text-base">
                Contact Us
              </Link>
            </nav>

            {/* Mobile menu button - Enhanced touch target */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-gray-100 touch-manipulation"
                aria-label="Toggle mobile menu"
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation - Responsive Design */}
          {isMenuOpen && (
            <div className="lg:hidden animate-slideDown">
              {/* Mobile menu container with proper spacing and responsive design */}
              <nav className="mobile-menu-container">
                {/* Main navigation items */}
                <div className="mobile-menu-section">
                  <Link 
                    to="/" 
                    onClick={handleMenuItemClick} 
                    className="mobile-menu-item"
                  >
                    <span className="mobile-menu-icon">🏠</span>
                    Home
                  </Link>
                  
                  <Link 
                    to="/about" 
                    onClick={handleMenuItemClick}
                    className="mobile-menu-item"
                  >
                    <span className="mobile-menu-icon">ℹ️</span>
                    About
                  </Link>
                  
                  <Link 
                    to="/talent-services" 
                    onClick={handleMenuItemClick} 
                    className="mobile-menu-item"
                  >
                    <span className="mobile-menu-icon">👥</span>
                    Talent Services
                  </Link>
                </div>

                {/* Services section with proper spacing */}
                <div className="mobile-menu-section">
                  <div className="mobile-menu-section-title">
                    <span className="mobile-menu-icon">🛠️</span>
                    Our Services
                  </div>
                  
                  <div className="mobile-submenu">
                    <Link to="/services/tourist-visa" onClick={handleMenuItemClick} className="mobile-submenu-item">
                      ✈️ Tourist Visa
                    </Link>
                    <Link to="/services/student-visa" onClick={handleMenuItemClick} className="mobile-submenu-item">
                      🎓 Student Visa
                    </Link>
                    <Link to="/services/work-visa" onClick={handleMenuItemClick} className="mobile-submenu-item">
                      💼 Work Visa
                    </Link>
                    <Link to="/services/family-visa" onClick={handleMenuItemClick} className="mobile-submenu-item">
                      👨‍👩‍👧‍👦 Family Visa
                    </Link>
                    <Link to="/services/immigration" onClick={handleMenuItemClick} className="mobile-submenu-item">
                      🏡 Immigration
                    </Link>
                    <Link to="/services/documentation" onClick={handleMenuItemClick} className="mobile-submenu-item">
                      📄 Documentation
                    </Link>
                  </div>
                </div>

                {/* Additional pages section */}
                <div className="mobile-menu-section">
                  <Link 
                    to="/countries" 
                    onClick={handleMenuItemClick} 
                    className="mobile-menu-item"
                  >
                    <span className="mobile-menu-icon">🌍</span>
                    Countries
                  </Link>
                  
                  <Link 
                    to="/testimonials" 
                    onClick={handleMenuItemClick} 
                    className="mobile-menu-item"
                  >
                    <span className="mobile-menu-icon">⭐</span>
                    Success Stories
                  </Link>
                </div>

                {/* Contact section - Prominent placement */}
                <div className="mobile-menu-section">
                  <Link 
                    to="/contact" 
                    onClick={handleMenuItemClick} 
                    className="mobile-menu-cta"
                  >
                    <span className="mobile-menu-icon">📞</span>
                    Contact Us
                  </Link>
                </div>

                {/* Quick contact info for mobile */}
                <div className="mobile-contact-info">
                  <div className="mobile-contact-item">
                    <Phone className="w-4 h-4" />
                    <span>(+92) 318 720 3522</span>
                  </div>
                  <div className="mobile-contact-item">
                    <Mail className="w-4 h-4" />
                    <span>info@haidericonsultants.com</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;