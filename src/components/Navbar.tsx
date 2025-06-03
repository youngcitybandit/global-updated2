
import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { useLocation } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import LoginButton from './LoginButton';
import MobileLoginSection from './MobileLoginSection';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmployersOpen, setIsEmployersOpen] = useState(false);
  const [isBrokersOpen, setIsBrokersOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEmployers = () => {
    setIsEmployersOpen(!isEmployersOpen);
  };

  const toggleBrokers = () => {
    setIsBrokersOpen(!isBrokersOpen);
  };
  
  // Helper function to determine if we need to use the homepage URL or just anchor
  const getSectionUrl = (sectionId: string) => {
    return location.pathname === '/' ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/ed580215-06f6-49c1-915b-56d58ac5487a.png" 
                alt="American Global Logo" 
                className="h-8 md:h-10"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav getSectionUrl={getSectionUrl} />

          {/* Call Now Button (Desktop) */}
          <LoginButton />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-agr-navy p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isMenuOpen={isMenuOpen}
          isEmployersOpen={isEmployersOpen}
          isBrokersOpen={isBrokersOpen}
          toggleEmployers={toggleEmployers}
          toggleBrokers={toggleBrokers}
          getSectionUrl={getSectionUrl}
        />
        
        {/* Mobile Login Section */}
        {isMenuOpen && <MobileLoginSection />}
      </div>
    </header>
  );
};

export default Navbar;
