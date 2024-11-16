import React from 'react';
import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
          alt="Modern dental clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 to-sky-900/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Smile, Our Priority
          </h1>
          <p className="text-xl text-sky-100 mb-8">
            Experience exceptional dental care with our team of expert professionals.
            We're committed to giving you the confident smile you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-sky-900 px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-sky-50 transition-colors">
              <Calendar size={20} />
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
              Virtual Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;