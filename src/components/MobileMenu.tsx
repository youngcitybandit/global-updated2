
import React from 'react';
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isMenuOpen: boolean;
  isEmployersOpen: boolean;
  isBrokersOpen: boolean;
  toggleEmployers: () => void;
  toggleBrokers: () => void;
  getSectionUrl: (sectionId: string) => string;
}

const MobileMenu = ({ 
  isMenuOpen, 
  isEmployersOpen, 
  isBrokersOpen, 
  toggleEmployers, 
  toggleBrokers, 
  getSectionUrl 
}: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden py-4 border-t">
      <nav className="flex flex-col space-y-3 mb-4">
        {/* Mobile Employers Dropdown */}
        <div>
          <button 
            onClick={toggleEmployers} 
            className="flex items-center justify-between w-full text-agr-darkgray text-base font-medium py-2"
          >
            <span>Employers</span>
            <ChevronDown 
              size={16} 
              className={cn(isEmployersOpen ? "transform rotate-180 transition-transform" : "transition-transform")}
            />
          </button>
          {isEmployersOpen && (
            <div className="pl-4 mt-1 space-y-1">
              <a href="/employers" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-1">Overview</a>
              <a href="/employers/faqs" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-1">FAQs</a>
            </div>
          )}
        </div>

        {/* Mobile Brokers Dropdown */}
        <div>
          <button 
            onClick={toggleBrokers} 
            className="flex items-center justify-between w-full text-agr-darkgray text-base font-medium py-2"
          >
            <span>Brokers</span>
            <ChevronDown 
              size={16}
              className={cn(isBrokersOpen ? "transform rotate-180 transition-transform" : "transition-transform")}
            />
          </button>
          {isBrokersOpen && (
            <div className="pl-4 mt-1 space-y-1">
              <a href="/brokers" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-1">Overview</a>
              <a href="/brokers/faqs" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-1">FAQs</a>
            </div>
          )}
        </div>

        <a href={getSectionUrl('products')} className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-2">Solutions</a>
        <a href={getSectionUrl('coverage')} className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-2">Coverage</a>
        <a href="/about" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-2">About</a>
      </nav>
    </div>
  );
};

export default MobileMenu;
