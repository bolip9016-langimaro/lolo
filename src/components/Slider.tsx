import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Home, Briefcase, Plane, Star } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Function to get relevant images for each slide
  const getSlideImage = (slideIndex: number) => {
    const slideImages = [
      'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Study Abroad
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Immigration Settlement
      'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Gulf Europe Work
      'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', // Travel Abroad
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'  // Google Reviews
    ];
    return slideImages[slideIndex] || slideImages[0];
  };

  const openWhatsApp = (message: string) => {
    const phoneNumber = '+923187203522';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  const slides = [
    {
      id: 1,
      title: "Study Abroad",
      subtitle: "Your Gateway to World-Class Education",
      description: "Unlock opportunities at top universities worldwide with our expert guidance and comprehensive support services.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      icon: GraduationCap,
      cta: "Explore Programs",
      features: ["Top Universities", "Scholarship Guidance", "Visa Support", "Career Counseling"]
    },
    {
      id: 2,
      title: "Immigration Settlement",
      subtitle: "Make Your New Country Home",
      description: "Complete settlement services to help you establish your new life with confidence and ease.",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      icon: Home,
      cta: "Start Settlement",
      features: ["PR Applications", "Family Reunification", "Settlement Support", "Legal Assistance"]
    },
    {
      id: 3,
      title: "Gulf Europe Work",
      subtitle: "Advance Your Career Internationally",
      description: "Professional work visa services for Gulf countries and Europe with guaranteed job placement assistance.",
      image: "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      icon: Briefcase,
      cta: "Find Jobs",
      features: ["Job Placement", "Work Permits", "Employer Liaison", "Career Growth"]
    },
    {
      id: 4,
      title: "Travel Abroad",
      subtitle: "Explore the World with Confidence",
      description: "Tourist and visitor visa services to make your travel dreams a reality with hassle-free processing.",
      image: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      icon: Plane,
      cta: "Plan Travel",
      features: ["Tourist Visas", "Travel Insurance", "Itinerary Planning", "24/7 Support"]
    },
    {
      id: 5,
      title: "Google Reviews",
      subtitle: "Trusted by 5000+ Happy Clients",
      description: "Join thousands of satisfied clients who achieved their dreams with our expert consultation services.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      icon: Star,
      cta: "Read Reviews",
      features: ["5000+ Clients", "95% Success Rate", "Expert Team", "24/7 Support"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-float-delayed"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Slides */}
      <div className="relative h-full z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with Enhanced Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`text-white transform transition-all duration-1000 delay-300 ${
                    index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-full mr-4 shadow-2xl">
                        <slide.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h1 className="text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {slide.title}
                        </h1>
                        <p className="text-xl text-red-400 font-semibold">{slide.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>

                    {/* Interactive Feature Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => openWhatsApp(`Hello! I'm interested in ${slide.title} services. Please provide more information.`)}
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1"
                      >
                        {slide.cta}
                      </button>
                      <button 
                        onClick={() => openWhatsApp(`Hi! I would like to learn more about ${slide.title}. Can you help me?`)}
                        className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Interactive Info Panel */}
                  <div className={`transform transition-all duration-1000 delay-500 ${
                    index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}>
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                      {/* Google Reviews Widget for Google Reviews slide */}
                      {slide.title === 'Google Reviews' && (
                        <div className="mb-6">
                          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mb-4 border border-white/30">
                            <div className="flex items-center justify-center mb-3">
                              <div className="bg-white rounded-full p-2 mr-3">
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-white font-bold text-lg">Google Reviews</h4>
                                <div className="flex items-center">
                                  <div className="flex mr-2">
                                    {[...Array(5)].map((_, i) => (
                                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                      </svg>
                                    ))}
                                  </div>
                                  <span className="text-white font-bold">4.9</span>
                                  <span className="text-gray-300 text-sm ml-1">(150+)</span>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-white/10 p-3 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">A</div>
                                  <div>
                                    <p className="text-white font-semibold text-sm">Ahmad Khan</p>
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <p className="text-gray-200 text-xs">"Excellent service! Got my Canadian visa approved quickly."</p>
                                <p className="text-gray-400 text-xs mt-1">2 weeks ago</p>
                              </div>
                              <div className="bg-white/10 p-3 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">S</div>
                                  <div>
                                    <p className="text-white font-semibold text-sm">Sarah Ahmed</p>
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <p className="text-gray-200 text-xs">"Best consultancy in Lahore! Professional team."</p>
                                <p className="text-gray-400 text-xs mt-1">1 month ago</p>
                              </div>
                            </div>
                            <button 
                              onClick={() => window.open('https://share.google/ndRUQN3muXWDGQicE', '_blank')}
                              className="w-full mt-3 bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 border border-white/30"
                            >
                              View All Reviews
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Immigration Section with Country Flags */}
                      {slide.title === 'Immigration Settlement' && (
                        <div className="mb-4">
                          <div className="bg-white/20 p-4 rounded-lg mb-4">
                            <h4 className="text-white font-semibold mb-3 text-center">Popular Destinations</h4>
                            <div className="grid grid-cols-2 gap-2">
                              <img src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=120&h=80&fit=crop" alt="Canada" className="w-full h-16 object-cover rounded" />
                              <img src="https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=120&h=80&fit=crop" alt="Australia" className="w-full h-16 object-cover rounded" />
                              <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=120&h=80&fit=crop" alt="UK" className="w-full h-16 object-cover rounded" />
                              <img src="https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=120&h=80&fit=crop" alt="USA" className="w-full h-16 object-cover rounded" />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Gulf and Europe Work Section with Work Images */}
                      {slide.title === 'Gulf Europe Work' && (
                        <div className="mb-4">
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <img
                              src="https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
                              alt="Gulf Work"
                              className="w-full h-20 object-cover rounded-lg"
                            />
                            <img
                              src="https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
                              alt="Europe Work"
                              className="w-full h-20 object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      )}
                      
                      <img
                        src={getSlideImage(index)}
                        alt={`${slide.title} - Professional Services`}
                        className="w-full h-60 object-cover rounded-xl shadow-2xl"
                      />
                      <div className="mt-4 text-center">
                        <h3 className="text-xl font-bold text-white mb-2">{slide.title}</h3>
                        <p className="text-gray-300 text-sm">{slide.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-30 border border-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-30 border border-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full scale-125'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 shadow-lg"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Slider;