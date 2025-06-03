import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, LogIn } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

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
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Employers Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-agr-darkgray hover:text-agr-blue text-base font-medium">
                    Employers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/employers" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                            <span>Overview</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/employers/faqs" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                            <span>FAQs</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Brokers Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-agr-darkgray hover:text-agr-blue text-base font-medium">
                    Brokers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/brokers" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                            <span>Overview</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/brokers/faqs" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                            <span>FAQs</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <a href={getSectionUrl('products')} className="text-agr-darkgray hover:text-agr-blue text-base font-medium px-3 py-2">Solutions</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href={getSectionUrl('coverage')} className="text-agr-darkgray hover:text-agr-blue text-base font-medium px-3 py-2">Coverage</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/about" className="text-agr-darkgray hover:text-agr-blue text-base font-medium px-3 py-2">About</a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Call Now Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a href="tel:1-877-828-9970" className="flex items-center text-agr-navy text-sm font-bold whitespace-nowrap mr-6">
              <Phone size={18} className="mr-2 text-agr-blue" />
              1-877-828-9970
            </a>
            
            {/* Updated Login Button with Bubble Effect */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center bg-agr-brightTeal text-agr-navy font-medium px-4 py-2 rounded-full hover:bg-agr-brightTeal/90 transition-colors shadow-md">
                <LogIn className="mr-2 text-agr-navy" size={18} />
                Log In / Register
                <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem>
                  <a href="/login" className="w-full">Log In</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/register" className="w-full">Register</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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

              {/* Replace About dropdown with direct link */}
              <a href="/about" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-2">About</a>
            </nav>
            <a href="tel:1-877-828-9970" className="flex items-center text-agr-navy text-sm font-bold py-2 mb-3">
              <Phone size={18} className="mr-2 text-agr-blue" />
              1-877-828-9970
            </a>
            
            {/* Updated Mobile Login Link with Bubble Effect */}
            <div className="rounded-full bg-agr-brightTeal px-4 py-2 inline-block my-2">
              <a href="/login" className="flex items-center text-agr-navy font-medium">
                <LogIn className="mr-2" size={18} />
                Log In / Register
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
