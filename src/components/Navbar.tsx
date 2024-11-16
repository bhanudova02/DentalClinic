import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-sky-600">DentalCare</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-sky-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-sky-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-sky-600">Services</a>
            <a href="#portal" className="text-gray-700 hover:text-sky-600">Patient Portal</a>
            <a href="#contact" className="text-gray-700 hover:text-sky-600">Contact</a>
            <button className="bg-sky-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-sky-700">
              <Phone size={18} />
              (555) 123-4567
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <a href="#home" className="text-gray-700">Home</a>
              <a href="#about" className="text-gray-700">About</a>
              <a href="#services" className="text-gray-700">Services</a>
              <a href="#portal" className="text-gray-700">Patient Portal</a>
              <a href="#contact" className="text-gray-700">Contact</a>
              <button className="bg-sky-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
                <Phone size={18} />
                (555) 123-4567
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;