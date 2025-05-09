
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, LogIn } from "lucide-react";
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
              <img 
                src="/lovable-uploads/ed580215-06f6-49c1-915b-56d58ac5487a.png" 
                alt="AmericanGlobalRe Logo" 
                className="h-8 md:h-10"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Regular Menu Items */}
                <NavigationMenuItem>
                  <a href="/employers" className="text-agr-darkgray hover:text-agr-blue text-base font-medium px-3 py-2">Employers</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/brokers" className="text-agr-darkgray hover:text-agr-blue text-base font-medium px-3 py-2">Brokers</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#products" className="text-agr-darkgray hover:text-agr-blue text-base font-medium px-3 py-2">Solutions</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#coverage" className="text-agr-darkgray hover:text-agr-blue text-base font-medium px-3 py-2">Coverage</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-agr-darkgray hover:text-agr-blue text-base font-medium">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/about/company" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                            <span>Company</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/about/team" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                            <span>Our Team</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Call Now Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a href="tel:1-877-828-9970" className="flex items-center text-agr-navy text-sm font-bold whitespace-nowrap">
              <Phone size={18} className="mr-2 text-agr-blue" />
              1-877-828-9970
            </a>
            <div className="ml-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-cyan-500 hover:text-cyan-600 font-medium">
                  <LogIn className="mr-2 text-cyan-500" size={18} />
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
              <a href="/employers" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-2">Employers</a>
              <a href="/brokers" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-2">Brokers</a>
              <a href="#products" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-2">Solutions</a>
              <a href="#coverage" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-2">Coverage</a>

              <div>
                <button onClick={() => {}} className="flex items-center justify-between w-full text-agr-darkgray text-base font-medium py-2">
                  <span>About</span>
                  <ChevronDown size={16} />
                </button>
                <div className="pl-4 mt-1 space-y-1">
                  <a href="/about/company" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-1">Company</a>
                  <a href="/about/team" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-1">Our Team</a>
                </div>
              </div>
            </nav>
            <a href="tel:1-877-828-9970" className="flex items-center text-agr-navy text-sm font-bold py-2 mb-3">
              <Phone size={18} className="mr-2 text-agr-blue" />
              1-877-828-9970
            </a>
            <div className="flex items-center text-cyan-500 hover:text-cyan-600 font-medium py-2">
              <LogIn className="mr-2 text-cyan-500" size={18} />
              <a href="/login">Log In / Register</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
