import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }: { icon: any, title: string, content: string }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="text-sky-600" size={24} />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <ContactInfo
                icon={MapPin}
                title="Location"
                content="123 Dental Street, Healthcare City, ST 12345"
              />
              <ContactInfo
                icon={Clock}
                title="Office Hours"
                content="Mon-Fri: 8:00 AM - 6:00 PM&#10;Sat: 9:00 AM - 2:00 PM"
              />
              <ContactInfo
                icon={Phone}
                title="Phone"
                content="(555) 123-4567"
              />
              <ContactInfo
                icon={Mail}
                title="Email"
                content="care@dentalcare.com"
              />
            </div>
          </div>
          
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-sky-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;