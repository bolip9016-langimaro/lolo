import React from 'react';
import { Heart, CheckCircle, Clock, FileText, Users, Globe } from 'lucide-react';

const FamilyVisaPage = () => {
  const openWhatsApp = () => {
    const phoneNumber = '+923187203522';
    const message = 'Hello! I am interested in Family Visa services. Can you provide more details about the process and requirements?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const visaTypes = [
    { type: 'Spouse Visa', desc: 'For married couples to reunite', processing: '3-12 months', icon: '💑' },
    { type: 'Dependent Visa', desc: 'For children and dependents', processing: '2-8 months', icon: '👨‍👩‍👧‍👦' },
    { type: 'Parent Visa', desc: 'For parents of citizens/residents', processing: '6-24 months', icon: '👴👵' },
    { type: 'Fiancé Visa', desc: 'For engaged couples', processing: '4-12 months', icon: '💍' }
  ];

  const getCountryImage = (countryName: string) => {
    const countryImages: { [key: string]: string } = {
      'Australia': 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'Canada': 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'France': 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'Germany': 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'New Zealand': 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'United Kingdom': 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'United States': 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    };
    return countryImages[countryName] || 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';
  };

  const countries = [
    { name: 'Australia', flag: '🇦🇺', processing: '9-18 months', location: 'Oceania' },
    { name: 'Canada', flag: '🇨🇦', processing: '12-20 months', location: 'North America' },
    { name: 'France', flag: '🇫🇷', processing: '3-6 months', location: 'Europe' },
    { name: 'Germany', flag: '🇩🇪', processing: '3-6 months', location: 'Europe' },
    { name: 'New Zealand', flag: '🇳🇿', processing: '6-12 months', location: 'Oceania' },
    { name: 'United Kingdom', flag: '🇬🇧', processing: '2-6 months', location: 'Europe' },
    { name: 'United States', flag: '🇺🇸', processing: '8-33 months', location: 'North America' }
  ];

  const requirements = [
    'Proof of relationship (marriage certificate, birth certificates)',
    'Sponsor\'s citizenship or permanent residence proof',
    'Financial support documents and income proof',
    'Medical examinations for all applicants',
    'Police clearance certificates',
    'Completed application forms',
    'Passport-size photographs',
    'English proficiency test (if required)',
    'Statutory declarations and affidavits',
    'Travel history and previous visa records'
  ];

  const services = [
    { icon: FileText, title: 'Document Preparation', desc: 'Complete assistance with all required documentation' },
    { icon: Clock, title: 'Application Processing', desc: 'Expert handling of family visa applications' },
    { icon: Users, title: 'Relationship Assessment', desc: 'Guidance on proving genuine relationships' },
    { icon: Globe, title: 'Settlement Support', desc: 'Help with integration and settlement services' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Heart className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Family Visa Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Reunite with your loved ones. We help families come together through our comprehensive family visa services.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Reunite Your Family
            </button>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Family Visa Types</h2>
            <p className="text-xl text-gray-600">Different visa categories to bring your family together</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-4">{visa.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{visa.type}</h3>
                <p className="text-gray-600 mb-4">{visa.desc}</p>
                <p className="text-sm text-red-600 font-semibold">Processing: {visa.processing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Family Visa Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support throughout your family reunion journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Family Visa Destinations</h2>
            <p className="text-xl text-gray-600">Countries where we help families reunite</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div 
                key={index} 
                className="relative p-6 rounded-xl hover:shadow-lg transition-shadow overflow-hidden min-h-[200px]"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${getCountryImage(country.name)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{country.flag}</span>
                    <h3 className="text-xl font-bold text-white">{country.name}</h3>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {country.location}
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-gray-200 mb-4">Average Processing: <span className="font-semibold text-white">{country.processing}</span></p>
                  <button 
                    onClick={openWhatsApp}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Get Information →
                  </button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Family Visa Requirements</h2>
              <p className="text-xl text-gray-600 mb-8">
                Essential documents and requirements for family visa applications.
              </p>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-black mb-6">Success Stories</h3>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-600 italic mb-2">"After 2 years apart, Haideri Consultants helped me bring my wife to Canada. Professional and caring service."</p>
                  <p className="font-semibold text-black">- Muhammad Ali</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-600 italic mb-2">"They guided us through the complex UK spouse visa process. Now we're happily reunited!"</p>
                  <p className="font-semibold text-black">- Fatima Sheikh</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-black mb-2">Our Promise</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Personalized case handling</li>
                  <li>• Regular application updates</li>
                  <li>• Expert legal guidance</li>
                  <li>• Emotional support throughout</li>
                </ul>
              </div>
              <button 
                onClick={openWhatsApp}
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Reunite Your Family?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let distance keep your family apart. Contact our family visa experts today and start your reunion journey.
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default FamilyVisaPage;