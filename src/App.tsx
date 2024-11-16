import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      
      {/* Sticky Call Button */}
      <a
        href="tel:5551234567"
        className="fixed bottom-6 right-6 bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 transition-colors z-50 flex items-center justify-center"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}

export default App;