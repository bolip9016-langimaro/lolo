import React from 'react';
import { Users, Award, Globe, Clock, CheckCircle, Star, Heart } from 'lucide-react';

const AboutPage = () => {
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

  const services = [
    { title: 'Professional Manpower Supply', desc: 'Connecting skilled talent with reputable employers globally' },
    { title: 'Student Counseling', desc: 'Guiding students towards top international universities' },
    { title: 'Immigration Services', desc: 'Supporting individuals in achieving their migration goals' },
    { title: 'Career Guidance', desc: 'Helping professionals advance their international careers' }
  ];

  const values = [
    { icon: CheckCircle, title: 'Quality', desc: 'We maintain the highest standards in all our services' },
    { icon: Star, title: 'Transparency', desc: 'Clear communication and honest guidance throughout' },
    { icon: Heart, title: 'Ethical Practices', desc: 'We operate with integrity and moral principles' },
    { icon: Users, title: 'Personalized Solutions', desc: 'Tailored services to meet individual client needs' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Haideri Consultants</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner in recruitment, education, and overseas employment consultancy
            </p>
          </div>
        </div>
      </section>

      {/* CEO Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-black mb-6">Meet Our Leadership</h2>
              <div className="bg-red-50 p-6 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-red-600 mb-2">Mr. Syed Adnan Abbas</h3>
                <p className="text-lg text-gray-700 font-semibold mb-4">CEO & Managing Director</p>
                <p className="text-gray-600 leading-relaxed">
                  Under the visionary leadership of Mr. Syed Adnan Abbas, Haideri Consultants has grown to become 
                  one of Pakistan's most trusted consultancy firms. With his extensive experience in international 
                  recruitment and immigration services, he has guided thousands of clients toward achieving their 
                  global career and education aspirations.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 text-white p-3 rounded-full">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Experienced Leadership</h4>
                  <p className="text-gray-600 text-sm">15+ years in international consultancy</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-gradient-to-r from-red-600 to-black p-1 rounded-2xl">
                  <img 
                    src="/aboutus picture owner.jpg" 
                    alt="Mr. Syed Adnan Abbas - CEO & Managing Director"
                    className="w-full h-96 object-contain rounded-2xl shadow-2xl bg-white"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">About Haideri Consultants</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>Haideri Consultants (SMC-Private) Limited</strong> is a trusted recruitment, education, and overseas 
                employment consultancy based in Pakistan. We specialize in providing professional manpower supply, student 
                counseling, and immigration services to clients across the globe.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                With a strong commitment to quality, transparency, and ethical practices, we connect skilled talent with 
                reputable employers, guide students towards top international universities, and support individuals in 
                achieving their career and migration goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our experienced team ensures every client receives personalized solutions tailored to their needs, 
                making us a reliable partner for success in the global marketplace.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
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

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your international career and education needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-red-600 text-white p-3 rounded-lg mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-black mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide comprehensive, reliable, and ethical immigration and recruitment services that help 
                individuals and families achieve their dreams of living, working, and studying abroad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to maintaining the highest standards of professionalism and client satisfaction 
                while building bridges to global opportunities.
              </p>
            </div>
            
            <div className="bg-black text-white p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed mb-6">
                To be the leading consultancy firm in Pakistan, recognized globally for our excellence in 
                connecting talent with opportunities and making international dreams accessible to all.
              </p>
              <p className="text-lg leading-relaxed">
                We envision a world where geographical boundaries don't limit career and educational aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have achieved their international goals with Haideri Consultants. 
            Let us help you turn your dreams into reality.
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

export default AboutPage;