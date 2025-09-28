import React from 'react';
import { GraduationCap, CheckCircle, Clock, FileText, Users, Globe } from 'lucide-react';

const StudentVisaPage = () => {
  const openWhatsApp = () => {
    const phoneNumber = '+923187203522';
    const message = 'Hello! I am interested in Student Visa services. Can you provide more details about the process and requirements?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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
    { name: 'Australia', flag: '🇦🇺', processing: '4-8 weeks', location: 'Oceania', popular: true },
    { name: 'Canada', flag: '🇨🇦', processing: '4-12 weeks', location: 'North America', popular: true },
    { name: 'France', flag: '🇫🇷', processing: '10-15 days', location: 'Europe' },
    { name: 'Germany', flag: '🇩🇪', processing: '6-12 weeks', location: 'Europe' },
    { name: 'New Zealand', flag: '🇳🇿', processing: '4-6 weeks', location: 'Oceania' },
    { name: 'United Kingdom', flag: '🇬🇧', processing: '3-8 weeks', location: 'Europe', popular: true },
    { name: 'United States', flag: '🇺🇸', processing: '2-8 weeks', location: 'North America', popular: true }
  ];

  const requirements = [
    'Letter of acceptance from educational institution',
    'Valid passport with sufficient validity',
    'Academic transcripts and certificates',
    'English proficiency test results (IELTS/TOEFL)',
    'Financial proof (bank statements, sponsorship)',
    'Statement of Purpose (SOP)',
    'Medical examination (if required)',
    'Police clearance certificate'
  ];

  const services = [
    { icon: FileText, title: 'University Selection', desc: 'Guidance on choosing the right institution and program' },
    { icon: Clock, title: 'Application Support', desc: 'Complete assistance with university applications' },
    { icon: Users, title: 'Visa Processing', desc: 'Expert handling of student visa applications' },
    { icon: Globe, title: 'Pre-departure', desc: 'Comprehensive briefing before you travel' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <GraduationCap className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Student Visa Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your gateway to world-class education. We help you secure student visas for top universities worldwide.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Student Visa Services</h2>
            <p className="text-xl text-gray-600">End-to-end support for your educational journey abroad</p>
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
            <h2 className="text-4xl font-bold text-black mb-4">Study Destinations</h2>
            <p className="text-xl text-gray-600">Popular countries for international students</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div 
                key={index} 
                className={`relative p-6 rounded-xl hover:shadow-lg transition-shadow overflow-hidden min-h-[200px] ${country.popular ? 'ring-2 ring-red-600' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${getCountryImage(country.name)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                {country.popular && (
                  <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-full inline-block mb-3 self-start">
                    Most Popular
                  </div>
                )}
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
                  <p className="text-gray-200 mb-4">Processing Time: <span className="font-semibold text-white">{country.processing}</span></p>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Student Visa Requirements</h2>
              <p className="text-xl text-gray-600 mb-8">
                Essential documents and requirements for student visa applications across different countries.
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
              <h3 className="text-2xl font-bold text-black mb-6">Why Choose Our Services?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">University Partnerships</h4>
                    <p className="text-gray-600 text-sm">Direct connections with top universities worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Expert Counselors</h4>
                    <p className="text-gray-600 text-sm">Certified education consultants with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">High Success Rate</h4>
                    <p className="text-gray-600 text-sm">95% visa approval rate for student applications</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={openWhatsApp}
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Study Abroad?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards your international education. Our experts are here to guide you through every step of the process.
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Contact Our Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudentVisaPage;