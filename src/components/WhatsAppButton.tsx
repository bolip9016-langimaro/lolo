import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = '+923187203522';
  const message = 'Hello! I would like to inquire about your visa consultancy services.';
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Chat Popup */}
          {isOpen && (
            <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border animate-slideUp">
              <div className="bg-gradient-to-r from-red-600 to-black text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/logo.jpg"
                    alt="Haideri Consultants"
                    className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-white"
                  />
                  <div>
                    <h4 className="font-semibold">Haideri Consultants</h4>
                    <p className="text-xs opacity-90">Typically replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4">
                <div className="bg-gray-100 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    👋 Hi there! How can we help you with your visa requirements today?
                  </p>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-gradient-to-r from-red-600 to-black hover:from-red-700 hover:to-gray-900 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Start Conversation
                </button>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-500">
                    We'll respond as soon as possible
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Main WhatsApp Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-red-600 to-black hover:from-red-700 hover:to-gray-900 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none group"
          >
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce">
            1
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;