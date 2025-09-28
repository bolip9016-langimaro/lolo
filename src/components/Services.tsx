import React from 'react';
import { Plane, GraduationCap, Briefcase, Heart, Home, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const openWhatsApp = (service: string) => {
    const phoneNumber = '+923187203522';
    const message = `Hello! I'm interested in ${service} services. Can you provide more details and guidance?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      icon: Plane,
      title: 'Tourist Visa',
      link: '/services/tourist-visa',
      description: 'Complete assistance for tourist and visitor visas to explore your dream destinations.',
      features: ['Document preparation', 'Application filing', 'Interview coaching', 'Follow-up support']
    },
    {
      icon: GraduationCap,
      title: 'Student Visa',
      link: '/services/student-visa',
      description: 'Expert guidance for student visas to pursue education in top universities worldwide.',
      features: ['University selection', 'Admission assistance', 'Visa processing', 'Pre-departure briefing']
    },
    {
      icon: Briefcase,
      title: 'Work Visa',
      link: '/services/work-visa',
      description: 'Professional work visa services to help you advance your career internationally.',
      features: ['Job search assistance', 'Work permit processing', 'Employer liaison', 'Settlement support']
    },
    {
      icon: Heart,
      title: 'Family Visa',
      link: '/services/family-visa',
      description: 'Reunite with your loved ones through our comprehensive family visa services.',
      features: ['Spouse visa', 'Dependent visa', 'Parent visa', 'Relationship documentation']
    },
    {
      icon: Home,
      title: 'Immigration',
      link: '/services/immigration',
      description: 'Complete immigration solutions for permanent residency and citizenship applications.',
      features: ['PR applications', 'Citizenship process', 'Investment visas', 'Skilled migration']
    },
    {
      icon: FileText,
      title: 'Documentation',
      link: '/services/documentation',
      description: 'Professional document preparation and attestation services for all visa types.',
      features: ['Document verification', 'Translation services', 'Attestation assistance', 'Legal documentation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive visa and immigration services tailored to meet your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 group block">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div 
                className="mt-6 text-red-600 font-semibold hover:text-black transition-colors inline-flex items-center"
              >
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;