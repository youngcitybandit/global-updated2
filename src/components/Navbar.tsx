
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-agr-navy mr-2">American</span>
              <span className="text-2xl font-bold text-agr-blue">GlobaleRe</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-agr-darkgray hover:text-agr-blue font-medium">Products</a>
            <a href="#about" className="text-agr-darkgray hover:text-agr-blue font-medium">About Us</a>
            <a href="#testimonials" className="text-agr-darkgray hover:text-agr-blue font-medium">Testimonials</a>
            <a href="#contact" className="text-agr-darkgray hover:text-agr-blue font-medium">Contact</a>
          </nav>

          {/* Call Now Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a href="tel:1-800-555-1234" className="flex items-center text-agr-navy font-bold">
              <Phone size={18} className="mr-2 text-agr-blue" />
              1-800-555-1234
            </a>
            <Button className="btn-primary ml-6">Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-agr-navy p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3 mb-4">
              <a href="#products" className="text-agr-darkgray hover:text-agr-blue font-medium py-2">Products</a>
              <a href="#about" className="text-agr-darkgray hover:text-agr-blue font-medium py-2">About Us</a>
              <a href="#testimonials" className="text-agr-darkgray hover:text-agr-blue font-medium py-2">Testimonials</a>
              <a href="#contact" className="text-agr-darkgray hover:text-agr-blue font-medium py-2">Contact</a>
            </nav>
            <a href="tel:1-800-555-1234" className="flex items-center text-agr-navy font-bold py-2 mb-3">
              <Phone size={18} className="mr-2 text-agr-blue" />
              1-800-555-1234
            </a>
            <Button className="btn-primary w-full">Get a Quote</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
