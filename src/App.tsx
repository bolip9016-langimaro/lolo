import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickAssessment from './components/QuickAssessment';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import UniversityLogos from './components/UniversityLogos';

// Individual Service Pages
import TouristVisaPage from './pages/TouristVisaPage';
import StudentVisaPage from './pages/StudentVisaPage';
import WorkVisaPage from './pages/WorkVisaPage';
import FamilyVisaPage from './pages/FamilyVisaPage';
import ImmigrationPage from './pages/ImmigrationPage';
import DocumentationPage from './pages/DocumentationPage';

// Other Pages
import CountriesPage from './pages/CountriesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import TalentServicesPage from './pages/TalentServicesPage';
import AboutPage from './pages/AboutPage';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const HomePage = () => (
  <>
    <Hero />
    <QuickAssessment />
    {/* Talent Import/Export Section with updated theme colors */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Talent Import & Export Services
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Bridging global talent gaps with our comprehensive import and export services. 
            Connecting skilled professionals with international opportunities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Import Countries */}
          <div className="bg-black p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70 z-10"></div>
            <div className="relative z-20">
            <h3 className="text-3xl font-bold mb-8 text-center text-red-400">
              🌍 Import Talent From These Countries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Pakistan', flag: '🇵🇰', image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Bangladesh', flag: '🇧🇩', image: 'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Bhutan', flag: '🇧🇹', image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Philippines', flag: '🇵🇭', image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Kenya', flag: '🇰🇪', image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Nepal', flag: '🇳🇵', image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' }
              ].map((country, index) => (
                <div 
                  key={index} 
                  className="relative bg-gray-800 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-red-600/20 transition-all duration-300 cursor-pointer hover:scale-105 group border border-red-600/30 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${country.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="relative z-10 mb-3">
                    <img 
                      src={country.image} 
                      alt={`${country.name} landscape`}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{country.flag}</div>
                  </div>
                  <h4 className="relative z-10 font-bold text-lg text-red-300 group-hover:text-white transition-colors">{country.name}</h4>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Export Countries */}
          <div className="bg-red-600 border-2 border-red-800 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 via-red-600/80 to-red-600/70 z-10"></div>
            <div className="relative z-20">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">
              🚀 Export Talent To These Countries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Saudi Arabia', flag: '🇸🇦', image: 'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Oman', flag: '🇴🇲', image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Qatar', flag: '🇶🇦', image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Maldives', flag: '🇲🇻', image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'UAE', flag: '🇦🇪', image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Japan', flag: '🇯🇵', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Bahrain', flag: '🇧🇭', image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' }
              ].map((country, index) => (
                <div 
                  key={index} 
                  className="relative bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white transition-all duration-300 cursor-pointer hover:scale-105 group border border-white overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.9)), url(${country.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="relative z-10 mb-3">
                    <img 
                      src={country.image} 
                      alt={`${country.name} landscape`}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{country.flag}</div>
                  </div>
                  <h4 className="relative z-10 font-bold text-lg text-gray-800 group-hover:text-black transition-colors">{country.name}</h4>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => {
              const phoneNumber = '+923187203522';
              const message = 'Hello! I am interested in your talent import/export services. Can you provide more details about the process and requirements?';
              const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            🤝 Connect for Talent Services
          </button>
        </div>
      </div>
    </section>
    <About />
    <Services />
    <Countries />
    <UniversityLogos />
    <Testimonials />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/tourist-visa" element={<TouristVisaPage />} />
          <Route path="/services/student-visa" element={<StudentVisaPage />} />
          <Route path="/services/work-visa" element={<WorkVisaPage />} />
          <Route path="/services/family-visa" element={<FamilyVisaPage />} />
          <Route path="/services/immigration" element={<ImmigrationPage />} />
          <Route path="/services/documentation" element={<DocumentationPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/talent-services" element={<TalentServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;