import React from 'react';

const UniversityLogos = () => {
  const universities = [
    {
      name: 'Harvard University',
      logo: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      type: 'USA'
    },
    {
      name: 'Stanford University',
      logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      type: 'USA'
    },
    {
      name: 'MIT',
      logo: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      type: 'USA'
    },
    {
      name: 'Oxford University',
      logo: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      type: 'Europe'
    },
    {
      name: 'Cambridge University',
      logo: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      type: 'Europe'
    },
    {
      name: 'ETH Zurich',
      logo: 'https://images.pexels.com/photos/1559821/pexels-photo-1559821.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      type: 'Europe'
    },
    {
      name: 'Sorbonne University',
      logo: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      type: 'Europe'
    },
    {
      name: 'Technical University of Munich',
      logo: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      type: 'Europe'
    }
  ];

  const openWhatsApp = (university: string) => {
    const phoneNumber = '+923187203522';
    const message = `Hello! I'm interested in studying at ${university}. Can you help me with the admission process and visa requirements?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Partner Universities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have partnerships with prestigious universities across USA and Europe to help you achieve your academic dreams
          </p>
        </div>

        {/* USA Universities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-900">
            Universities
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {universities.filter(uni => uni.type === 'USA').map((university, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="mb-4">
                  <img 
                    src={university.logo} 
                    alt={`${university.name} campus`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center">
                  <span className="text-xl mr-2">{university.country}</span>
                  {university.name}
                </h4>
                <button 
                  onClick={() => openWhatsApp(university.name)}
                  className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* European Universities */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-green-900">
            European Universities
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {universities.filter(uni => uni.type === 'Europe').map((university, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="mb-4">
                  <img 
                    src={university.logo} 
                    alt={`${university.name} campus`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors flex items-center">
                  <span className="text-lg mr-1">{university.country}</span>
                  {university.name}
                </h4>
                <button 
                  onClick={() => openWhatsApp(university.name)}
                  className="text-green-600 font-semibold text-xs hover:text-green-800 transition-colors"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to study at a specific university? We can help with admissions and visa processes!</p>
          <button 
            onClick={() => openWhatsApp('Hello! I would like to know more about university admissions and student visa processes. Can you guide me?')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get University Guidance
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversityLogos;