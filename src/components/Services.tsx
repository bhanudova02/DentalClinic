import React from 'react';
import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-sky-600" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Preventive Care",
      description: "Regular check-ups, cleanings, and early detection to maintain your oral health."
    },
    {
      icon: Heart,
      title: "Restorative Dentistry",
      description: "Advanced solutions for damaged teeth, including crowns, bridges, and implants."
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with whitening, veneers, and aesthetic treatments."
    },
    {
      icon: Award,
      title: "Specialized Care",
      description: "Expert treatment for complex dental issues and oral surgery needs."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs. We offer a wide range of services
            using the latest technology and techniques.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;