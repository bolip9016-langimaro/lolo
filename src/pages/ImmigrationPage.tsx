import React from 'react';
import { Home, CheckCircle, Clock, FileText, Users, Globe } from 'lucide-react';

const ImmigrationPage = () => {
  const openWhatsApp = () => {
    const phoneNumber = '+923187203522';
    const message = 'Hello! I am interested in Immigration services. Can you provide more details about the process and requirements?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const immigrationTypes = [
    { type: 'Skilled Migration', desc: 'For professionals with in-demand skills', icon: '🎯', countries: 'Canada, Australia, NZ' },
    { type: 'Investment Visa', desc: 'For investors and entrepreneurs', icon: '💼', countries: 'USA, UK, Portugal' },
    { type: 'Express Entry', desc: 'Fast-track immigration to Canada', icon: '⚡', countries: 'Canada' },
    { type: 'Provincial Nominee', desc: 'Province-specific immigration programs', icon: '🏛️', countries: 'Canada, Australia' }
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
    { name: 'Australia', flag: '🇦🇺', programs: ['SkillSelect', 'State Nomination', 'Business'], processing: '8-16 months', location: 'Oceania' },
    { name: 'Canada', flag: '🇨🇦', programs: ['Express Entry', 'PNP', 'Quebec'], processing: '6-12 months', location: 'North America' },
    { name: 'France', flag: '🇫🇷', programs: ['Talent Passport', 'Investor', 'EU Blue Card'], processing: '2-6 months', location: 'Europe' },
    { name: 'Germany', flag: '🇩🇪', programs: ['EU Blue Card', 'Self-Employment', 'Investment'], processing: '1-6 months', location: 'Europe' },
    { name: 'New Zealand', flag: '🇳🇿', programs: ['Skilled Migrant', 'Investor', 'Entrepreneur'], processing: '6-12 months', location: 'Oceania' },
    { name: 'United Kingdom', flag: '🇬🇧', programs: ['Global Talent', 'Innovator', 'Investor'], processing: '3-8 weeks', location: 'Europe' },
    { name: 'United States', flag: '🇺🇸', programs: ['EB-1', 'EB-2', 'EB-5 Investor'], processing: '12-36 months', location: 'North America' }
  ];

  const requirements = [
    'Age requirements (typically 18-45 years)',
    'Educational qualifications assessment',
    'Professional work experience',
    'Language proficiency (English/French)',
    'Financial proof and settlement funds',
    'Medical examinations',
    'Police clearance certificates',
    'Skills assessment by relevant authority',
    'Expression of Interest (EOI) submission',
    'Invitation to Apply (ITA) acceptance'
  ];

  const services = [
    { icon: FileText, title: 'Eligibility Assessment', desc: 'Comprehensive evaluation of your immigration prospects' },
    { icon: Clock, title: 'Application Management', desc: 'End-to-end handling of your immigration application' },
    { icon: Users, title: 'Legal Representation', desc: 'Expert immigration lawyers for complex cases' },
    { icon: Globe, title: 'Settlement Services', desc: 'Support for establishing life in your new country' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Home className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Immigration Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Make your new country home. We provide comprehensive immigration solutions for permanent residency and citizenship.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Start Your Immigration Journey
            </button>
          </div>
        </div>
      </section>

      {/* Immigration Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Immigration Programs</h2>
            <p className="text-xl text-gray-600">Various pathways to permanent residency and citizenship</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {immigrationTypes.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{program.type}</h3>
                <p className="text-gray-600 mb-4">{program.desc}</p>
                <p className="text-sm text-red-600 font-semibold">Available in: {program.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Immigration Services</h2>
            <p className="text-xl text-gray-600">Complete support for your immigration journey</p>
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
            <h2 className="text-4xl font-bold text-black mb-4">Immigration Destinations</h2>
            <p className="text-xl text-gray-600">Countries offering permanent residency programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div 
                key={index} 
                className="relative p-6 rounded-xl hover:shadow-lg transition-shadow overflow-hidden min-h-[250px]"
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
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Available Programs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {country.programs.map((program, idx) => (
                      <span key={idx} className="bg-red-600/80 text-white text-xs px-2 py-1 rounded-full">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-200 mb-4">Processing: <span className="font-semibold text-white">{country.processing}</span></p>
                <button 
                  onClick={openWhatsApp}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Learn More →
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
              <h2 className="text-4xl font-bold text-black mb-6">Immigration Requirements</h2>
              <p className="text-xl text-gray-600 mb-8">
                General requirements for most immigration programs worldwide.
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
              <h3 className="text-2xl font-bold text-black mb-6">Why Choose Our Immigration Services?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Expert Immigration Lawyers</h4>
                    <p className="text-gray-600 text-sm">Registered immigration consultants and lawyers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">High Success Rate</h4>
                    <p className="text-gray-600 text-sm">95% approval rate for immigration applications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Global Experience</h4>
                    <p className="text-gray-600 text-sm">15+ years handling immigration cases worldwide</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={openWhatsApp}
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make Your Move?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your immigration journey today. Our experts will guide you through every step towards permanent residency.
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Begin Your Immigration Process
          </button>
        </div>
      </section>
    </div>
  );
};

export default ImmigrationPage;