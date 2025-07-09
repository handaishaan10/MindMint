
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Have questions about our wellness kits? We're here to help you find the perfect solution for your mental wellness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Let's Connect</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email Us</h4>
                  <p className="text-gray-600 text-sm sm:text-base">support@mindmint.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Call Us</h4>
                  <p className="text-gray-600 text-sm sm:text-base">+1 (555) 123-MINT</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Visit Us</h4>
                  <p className="text-gray-600 text-sm sm:text-base">123 Wellness Street<br />Mindful City, MC 12345</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Customer Support Hours</h4>
              <p className="text-gray-600 text-sm">Monday - Friday: 9AM - 6PM EST</p>
              <p className="text-gray-600 text-sm">Saturday: 10AM - 4PM EST</p>
              <p className="text-gray-600 text-sm">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="order-support">Order Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 sm:py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all duration-200 text-sm sm:text-base"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
