import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your visa journey? Get in touch with our expert consultants today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-600 text-white p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-1">Office Address</h4>
                  <p className="text-gray-600">
                    Office 23 Kashif Plaza, Opposite PSO Pump<br />
                    Main Sanda Road Lahore, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 text-white p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-1">Phone Numbers</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>(+92) 318 720 3522</p>
                    <p>(+92) 423 715 8088</p>
                    <p>(+92) 321 423 4930</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 text-white p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-1">Email Address</h4>
                  <p className="text-gray-600">info@haidericonsultants.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 text-white p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-1">Office Hours</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Saturday: 11:00 AM - 7:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-black mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://web.facebook.com/haidericonsultants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/haidericonsultants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.youtube.com/@HaideriConsultants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@haideri.consultan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Select a service</option>
                  <option>Tourist Visa</option>
                  <option>Student Visa</option>
                  <option>Work Visa</option>
                  <option>Family Visa</option>
                  <option>Immigration</option>
                  <option>Documentation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Google Maps Section */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-black mb-4">Visit Our Office</h3>
          <p className="text-lg text-gray-600">Find us at our convenient location in Lahore</p>
        </div>
        
        <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0!2d74.2963916!3d31.5615197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905de0b9b7c7f%3A0x5c5b7b5b5b5b5b5b!2z2YXYp9mK2YYg2LPZhtiv2Kcg2LHZiNmE2Iwg2YTYp9mH2YjYsdiMINm-2Kfaqdiz2KrYp9mG!5e0!3m2!1sen!2s!4v1640995200000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Haideri Consultants Office Location"
          ></iframe>
        </div>
        
        <div className="text-center mt-8">
          <a
            href="https://maps.google.com/?q=31.5615197,74.2963916"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;