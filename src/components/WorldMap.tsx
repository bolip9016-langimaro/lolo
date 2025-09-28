import React, { useState } from 'react';
import { Globe, Users, ArrowRight, MapPin } from 'lucide-react';

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const openWhatsApp = (message: string) => {
    const phoneNumber = '+923187203522';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const importCountries = [
    { name: 'Pakistan', position: { top: '35%', left: '70%' }, skills: 'IT, Engineering, Healthcare' },
    { name: 'Bangladesh', position: { top: '38%', left: '75%' }, skills: 'Textiles, IT, Manufacturing' },
    { name: 'Philippines', position: { top: '45%', left: '85%' }, skills: 'Healthcare, IT, Customer Service' },
    { name: 'Nepal',position: { top: '32%', left: '72%' }, skills: 'Construction, Hospitality, Agriculture' },
    { name: 'Kenya', position: { top: '50%', left: '55%' }, skills: 'Agriculture, Tourism, IT' },
    { name: 'Bhutan', position: { top: '30%', left: '74%' }, skills: 'Tourism, Agriculture, Hydropower' }
  ];

  const exportCountries = [
    { name: 'Saudi Arabia', position: { top: '40%', left: '60%' }, demand: 'Construction, Healthcare, IT' },
    { name: 'UAE', position: { top: '42%', left: '62%' }, demand: 'Tourism, Finance, Construction' },
    { name: 'Qatar', position: { top: '41%', left: '61%' }, demand: 'Construction, Sports, Hospitality' },
    { name: 'Oman', position: { top: '43%', left: '63%' }, demand: 'Oil & Gas, Tourism, Agriculture' },
    { name: 'Japan', position: { top: '30%', left: '90%' }, demand: 'Technology, Manufacturing, Healthcare' },
    { name: 'Maldives', position: { top: '48%', left: '68%' }, demand: 'Tourism, Hospitality, Marine' },
    { name: 'Bahrain', position: { top: '41%', left: '60%' }, demand: 'Finance, Oil & Gas, Tourism' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-red-600/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-600/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-red-600 p-4 rounded-full">
              <Globe className="h-12 w-12 animate-spin-slow" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Global Talent Network
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Interactive world map showcasing our talent import and export services across continents
          </p>
        </div>

        {/* Enhanced World Map Container with Real Map Background */}
        <div className="relative bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-3xl p-8 mb-16 border border-blue-600/30">
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
            {/* High-Quality World Map Background */}
            <div className="absolute inset-0">
              <div className="w-full h-full bg-gradient-to-br from-blue-900/80 to-green-900/80 relative">
                {/* World Map SVG with Enhanced Details */}
                <svg viewBox="0 0 1000 500" className="w-full h-full absolute inset-0" fill="none">
                  {/* Enhanced world map with accurate continent shapes */}
                  
                  {/* North America */}
                  <path d="M50,120 Q80,100 120,110 Q160,120 200,130 Q240,140 280,150 Q320,160 350,170 Q380,180 400,190 L380,220 Q340,210 300,200 Q260,190 220,180 Q180,170 140,160 Q100,150 60,140 Z" 
                        fill="#2D5A87" opacity="0.8" stroke="#4A90E2" strokeWidth="2"/>
                  
                  {/* South America */}
                  <path d="M280,250 Q300,240 320,250 Q340,260 360,270 Q380,280 400,290 Q420,300 440,310 Q460,320 480,330 L470,380 Q450,370 430,360 Q410,350 390,340 Q370,330 350,320 Q330,310 310,300 Q290,290 270,280 Z" 
                        fill="#2D5A87" opacity="0.8" stroke="#4A90E2" strokeWidth="2"/>
                  
                  {/* Europe */}
                  <path d="M480,140 Q500,130 520,135 Q540,140 560,145 Q580,150 600,155 L590,180 Q570,175 550,170 Q530,165 510,160 Q490,155 470,150 Z" 
                        fill="#2D5A87" opacity="0.8" stroke="#4A90E2" strokeWidth="2"/>
                  
                  {/* Africa */}
                  <path d="M480,200 Q500,190 520,195 Q540,200 560,205 Q580,210 600,215 Q620,220 640,225 L630,320 Q610,315 590,310 Q570,305 550,300 Q530,295 510,290 Q490,285 470,280 Q450,275 430,270 L440,240 Q460,230 480,220 Z" 
                        fill="#2D5A87" opacity="0.8" stroke="#4A90E2" strokeWidth="2"/>
                  
                  {/* Asia */}
                  <path d="M600,120 Q640,110 680,115 Q720,120 760,125 Q800,130 840,135 Q880,140 920,145 L910,250 Q870,245 830,240 Q790,235 750,230 Q710,225 670,220 Q630,215 590,210 L600,180 Q600,150 600,120 Z" 
                        fill="#2D5A87" opacity="0.8" stroke="#4A90E2" strokeWidth="2"/>
                  
                  {/* Australia */}
                  <path d="M750,320 Q780,315 810,320 Q840,325 870,330 L860,360 Q830,355 800,350 Q770,345 740,340 Z" 
                        fill="#2D5A87" opacity="0.8" stroke="#4A90E2" strokeWidth="2"/>
                  
                  {/* Connection lines between continents with animation */}
                  <path d="M200,150 Q400,100 600,140" stroke="#4A90E2" strokeWidth="2" opacity="0.6" strokeDasharray="10,5">
                    <animate attributeName="stroke-dashoffset" values="0;15;0" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M350,200 Q500,180 650,200" stroke="#4A90E2" strokeWidth="2" opacity="0.6" strokeDasharray="10,5">
                    <animate attributeName="stroke-dashoffset" values="0;15;0" dur="3s" repeatCount="indefinite" begin="1s"/>
                  </path>
                  <path d="M600,200 Q700,180 800,200" stroke="#4A90E2" strokeWidth="2" opacity="0.6" strokeDasharray="10,5">
                    <animate attributeName="stroke-dashoffset" values="0;15;0" dur="3s" repeatCount="indefinite" begin="2s"/>
                  </path>
                  
                  {/* Ocean waves with animation */}
                  <path d="M0,100 Q50,90 100,100 Q150,110 200,100 Q250,90 300,100" stroke="#4A90E2" strokeWidth="3" opacity="0.4" fill="none">
                    <animate attributeName="d" values="M0,100 Q50,90 100,100 Q150,110 200,100 Q250,90 300,100;M0,105 Q50,95 100,105 Q150,115 200,105 Q250,95 300,105;M0,100 Q50,90 100,100 Q150,110 200,100 Q250,90 300,100" dur="4s" repeatCount="indefinite"/>
                  </path>
                  <path d="M0,400 Q50,390 100,400 Q150,410 200,400 Q250,390 300,400" stroke="#4A90E2" strokeWidth="3" opacity="0.4" fill="none">
                    <animate attributeName="d" values="M0,400 Q50,390 100,400 Q150,410 200,400 Q250,390 300,400;M0,395 Q50,385 100,395 Q150,405 200,395 Q250,385 300,395;M0,400 Q50,390 100,400 Q150,410 200,400 Q250,390 300,400" dur="4s" repeatCount="indefinite" begin="2s"/>
                  </path>
                  
                  {/* Grid lines for coordinates */}
                  <defs>
                    <pattern id="worldGrid" width="100" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 100 0 L 0 0 0 50" fill="none" stroke="#4A90E2" strokeWidth="0.5" opacity="0.2"/>
                    </pattern>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#worldGrid)" />
                </svg>
              </div>
            </div>

            {/* Accurate Geographical Positioning */}
            {/* Import Countries (Black Background) - Positioned at real locations */}
            <div className="absolute top-[32%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-black border-2 border-red-600 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-900">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇵🇰</div>
                  <div className="text-xs font-bold text-white">Pakistan</div>
                  <div className="text-xs text-red-400 mt-1">Import</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[35%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-black border-2 border-red-600 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-900">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇧🇩</div>
                  <div className="text-xs font-bold text-white">Bangladesh</div>
                  <div className="text-xs text-red-400 mt-1">Import</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[42%] left-[85%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-black border-2 border-red-600 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-900">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇵🇭</div>
                  <div className="text-xs font-bold text-white">Philippines</div>
                  <div className="text-xs text-red-400 mt-1">Import</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[30%] left-[72%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-black border-2 border-red-600 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-900">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇳🇵</div>
                  <div className="text-xs font-bold text-white">Nepal</div>
                  <div className="text-xs text-red-400 mt-1">Import</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[48%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-black border-2 border-red-600 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-900">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇰🇪</div>
                  <div className="text-xs font-bold text-white">Kenya</div>
                  <div className="text-xs text-red-400 mt-1">Import</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[28%] left-[74%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-black border-2 border-red-600 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-900">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇧🇹</div>
                  <div className="text-xs font-bold text-white">Bhutan</div>
                  <div className="text-xs text-red-400 mt-1">Import</div>
                </div>
              </div>
            </div>

            {/* Export Countries (White Background) - Positioned at real locations */}
            <div className="absolute top-[38%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-white border-2 border-gray-800 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-100">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇸🇦</div>
                  <div className="text-xs font-bold text-black">Saudi Arabia</div>
                  <div className="text-xs text-red-600 mt-1">Export</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[40%] left-[62%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-white border-2 border-gray-800 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-100">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇦🇪</div>
                  <div className="text-xs font-bold text-black">UAE</div>
                  <div className="text-xs text-red-600 mt-1">Export</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[39%] left-[61%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-white border-2 border-gray-800 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-100">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇶🇦</div>
                  <div className="text-xs font-bold text-black">Qatar</div>
                  <div className="text-xs text-red-600 mt-1">Export</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[41%] left-[63%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-white border-2 border-gray-800 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-100">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇴🇲</div>
                  <div className="text-xs font-bold text-black">Oman</div>
                  <div className="text-xs text-red-600 mt-1">Export</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[28%] left-[88%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-white border-2 border-gray-800 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-100">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇯🇵</div>
                  <div className="text-xs font-bold text-black">Japan</div>
                  <div className="text-xs text-red-600 mt-1">Export</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[46%] left-[68%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-white border-2 border-gray-800 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-100">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇲🇻</div>
                  <div className="text-xs font-bold text-black">Maldives</div>
                  <div className="text-xs text-red-600 mt-1">Export</div>
                </div>
              </div>
            </div>

            <div className="absolute top-[39%] left-[59%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className="bg-white border-2 border-gray-800 rounded-lg p-3 shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-100">
                <div className="text-center">
                  <div className="text-2xl mb-1">🇧🇭</div>
                  <div className="text-xs font-bold text-black">Bahrain</div>
                  <div className="text-xs text-red-600 mt-1">Export</div>
                </div>
              </div>
            </div>

            {/* Map Legend with Enhanced Styling */}
            <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-sm rounded-xl p-4 border border-red-600/30">
              <h4 className="text-white font-bold mb-3 text-sm">Legend</h4>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-black border-2 border-red-600 rounded mr-3"></div>
                <span className="text-white text-xs">Import Countries</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-white border-2 border-gray-800 rounded mr-3"></div>
                <span className="text-white text-xs">Export Countries</span>
              </div>
            </div>

            {/* Compass Rose */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/30">
              <svg viewBox="0 0 1000 500" className="w-full h-full" fill="none">
                <path d="M50 10 L60 40 L50 35 L40 40 Z" fill="currentColor"/>
                <path d="M50 90 L60 60 L50 65 L40 60 Z" fill="currentColor"/>
                <path d="M10 50 L40 40 L35 50 L40 60 Z" fill="currentColor"/>
                <path d="M90 50 L60 40 L65 50 L60 60 Z" fill="currentColor"/>
                <circle cx="50" cy="50" r="3" fill="currentColor"/>
                <text x="50" y="25" textAnchor="middle" fontSize="8" fill="currentColor">N</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-red-600/30">
            <div className="text-3xl font-bold text-red-400 mb-2">6</div>
            <div className="text-gray-300">Import Countries</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/30">
            <div className="text-3xl font-bold text-blue-400 mb-2">7</div>
            <div className="text-gray-300">Export Countries</div>
          </div>
          <div className="text-center bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-red-600/30">
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-300">Skill Categories</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/30">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
            <div className="text-gray-300">Successful Placements</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Connect Global Talent?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to import skilled professionals or export talent to international markets, 
            we're here to bridge the gap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openWhatsApp('Hello! I would like to learn more about your talent import services.')}
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-red-600"
            >
              Import Talent
            </button>
            <button 
              onClick={() => openWhatsApp('Hello! I would like to learn more about your talent export services.')}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Export Talent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;