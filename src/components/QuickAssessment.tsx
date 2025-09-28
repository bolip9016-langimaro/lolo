import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const QuickAssessment = () => {
  const openWhatsApp = (message: string) => {
    const phoneNumber = '+923187203522';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
              Your Trusted Partner for 
              <span className="text-red-500"> Visa Success</span>
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Expert visa consultancy services with over 15 years of experience. 
              We make your immigration dreams a reality with personalized guidance and proven success rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => openWhatsApp('Hello! I would like to get a free consultation for my visa requirements. Please guide me.')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => openWhatsApp('Hi! I would like to read some success stories and testimonials from your clients.')}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View Success Stories
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">15+ Years Experience</span>
              </div>
              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">95% Success Rate</span>
              </div>
              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Expert Legal Team</span>
              </div>
              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slideInRight">
            <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-black mb-6">Quick Assessment</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black transition-all duration-300 hover:border-red-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black transition-all duration-300 hover:border-red-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black transition-all duration-300 hover:border-red-300"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black transition-all duration-300 hover:border-red-300">
                    <option>Select Destination Country</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>New Zealand</option>
                    <option>Germany</option>
                  </select>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Get Free Assessment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAssessment;