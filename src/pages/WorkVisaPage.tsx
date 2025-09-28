import React from 'react';
import { Briefcase, CheckCircle, Clock, FileText, Users, Globe } from 'lucide-react';

const WorkVisaPage = () => {
  const openWhatsApp = () => {
    const phoneNumber = '+923187203522';
    const message = 'Hello! I am interested in Work Visa services. Can you provide more details about the process and requirements?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const getCountryImage = (countryName: string) => {
    const countryImages: { [key: string]: string } = {
      'Australia': 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'Canada': 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'France': 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'Germany': 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'Saudi Arabia': 'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'UAE': 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'United Kingdom': 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'United States': 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    };
    return countryImages[countryName] || 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';
  };

  const countries = [
    { name: 'Australia', flag: '🇦🇺', processing: '3-8 months', type: 'Skilled Migration', location: 'Oceania' },
    { name: 'Canada', flag: '🇨🇦', processing: '2-6 months', type: 'Express Entry, LMIA', location: 'North America' },
    { name: 'France', flag: '🇫🇷', processing: '1-3 months', type: 'Work Permit', location: 'Europe' },
    { name: 'Germany', flag: '🇩🇪', processing: '1-3 months', type: 'EU Blue Card', location: 'Europe' },
    { name: 'Saudi Arabia', flag: '🇸🇦', processing: '2-6 weeks', type: 'Work Permit', location: 'Middle East' },
    { name: 'UAE', flag: '🇦🇪', processing: '2-4 weeks', type: 'Employment Visa', location: 'Middle East' },
    { name: 'United Kingdom', flag: '🇬🇧', processing: '3-8 weeks', type: 'Skilled Worker Visa', location: 'Europe' },
    { name: 'United States', flag: '🇺🇸', processing: '2-8 months', type: 'H1B, L1 Visa', location: 'North America' }
  ];

  const requirements = [
    'Valid passport with minimum 6 months validity',
    'Job offer letter from employer',
    'Educational certificates and transcripts',
    'Professional experience certificates',
    'Skills assessment (if required)',
    'English proficiency test results',
    'Medical examination reports',
    'Police clearance certificates',
    'Passport-size photographs',
    'Completed visa application forms'
  ];

  const services = [
    { icon: FileText, title: 'Job Search Assistance', desc: 'Help finding suitable employment opportunities abroad' },
    { icon: Clock, title: 'Visa Processing', desc: 'Complete handling of work visa applications' },
    { icon: Users, title: 'Employer Liaison', desc: 'Communication with employers and immigration authorities' },
    { icon: Globe, title: 'Settlement Support', desc: 'Guidance for settling in your new country' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Briefcase className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Work Visa Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Advance your career internationally. We help professionals secure work visas for global opportunities.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Explore Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Work Visa Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for your international career journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Work Destinations</h2>
            <p className="text-xl text-gray-600">Popular countries for international professionals</p>
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
                  <p className="text-gray-200 mb-2">Visa Type: <span className="font-semibold text-white">{country.type}</span></p>
                  <p className="text-gray-200 mb-4">Processing: <span className="font-semibold text-white">{country.processing}</span></p>
                  <button 
                    onClick={openWhatsApp}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Apply Now →
                  </button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Work Visa Requirements</h2>
              <p className="text-xl text-gray-600 mb-8">
                Common documents and requirements for work visa applications across different countries.
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
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Our Success Stories</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-gray-600 italic mb-2">"Haideri Consultants helped me secure a job in Canada. Their support was invaluable throughout the entire process."</p>
                  <p className="font-semibold text-black">- Ahmed Hassan, Software Engineer</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-gray-600 italic mb-2">"Professional service and expert guidance. I got my UK work visa approved in just 4 weeks!"</p>
                  <p className="font-semibold text-black">- Sarah Khan, Marketing Manager</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Why Choose Us?</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 95% visa approval rate</li>
                  <li>• Direct employer connections</li>
                  <li>• Expert immigration lawyers</li>
                  <li>• Post-arrival support</li>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the next step in your professional journey. Our work visa experts are ready to help you secure international employment.
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkVisaPage;