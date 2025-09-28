import React from 'react';
import { Users, Award, Globe, Clock } from 'lucide-react';

const About = () => {
  const openWhatsApp = () => {
    const phoneNumber = '+923187203522';
    const message = 'Hello! I would like to know more about Haideri Consultants and your services. Can you help me?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const stats = [
    { icon: Users, number: '5000+', label: 'Happy Clients' },
    { icon: Award, number: '95%', label: 'Success Rate' },
    { icon: Globe, number: '25+', label: 'Countries' },
    { icon: Clock, number: '15+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Haideri Consultants</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of excellence in immigration services, we are your trusted partner 
            in achieving your global dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">Our Expertise</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">Expert Legal Team</h4>
                  <p className="text-gray-600">Our certified immigration lawyers and consultants have extensive experience in visa processing.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">Global Reach</h4>
                  <p className="text-gray-600">We handle visa applications for 25+ countries with specialized knowledge of each destination.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 text-white p-2 rounded-lg mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">Personalized Service</h4>
                  <p className="text-gray-600">Every client receives individual attention with customized solutions for their unique situation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide comprehensive, reliable, and ethical immigration services that help individuals 
              and families achieve their dreams of living, working, and studying abroad. We are committed 
              to maintaining the highest standards of professionalism and client satisfaction.
            </p>
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-lg font-semibold text-black">
                "Your success is our success. We don't just process visas; we build bridges to your future."
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;