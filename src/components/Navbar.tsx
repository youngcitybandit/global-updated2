import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
              <span className="text-2xl font-bold text-agr-navy mr-2">American</span>
              <span className="text-2xl font-bold text-agr-blue">GlobaleRe</span>
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
                          <a href="/employers/login" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                            <span>Login</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/employers/register" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                            <span>Register</span>
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
                          <a href="/brokers/login" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                            <span>Login</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/brokers/register" className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-base font-medium hover:bg-muted">
                            <span>Register</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Regular Menu Items */}
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
            <a href="tel:1-800-555-1234" className="flex items-center text-agr-navy text-base font-bold">
              <Phone size={18} className="mr-2 text-agr-blue" />
              1-800-555-1234
            </a>
            <Button className="btn-primary ml-6 text-base font-medium">Get a Quote</Button>
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
              <div>
                <button onClick={() => {}} className="flex items-center justify-between w-full text-agr-darkgray text-base font-medium py-2">
                  <span>Employers</span>
                  <ChevronDown size={16} />
                </button>
                <div className="pl-4 mt-1 space-y-1">
                  <a href="/employers/login" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-1">Login</a>
                  <a href="/employers/register" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-1">Register</a>
                </div>
              </div>

              <div>
                <button onClick={() => {}} className="flex items-center justify-between w-full text-agr-darkgray text-base font-medium py-2">
                  <span>Brokers</span>
                  <ChevronDown size={16} />
                </button>
                <div className="pl-4 mt-1 space-y-1">
                  <a href="/brokers/login" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-1">Login</a>
                  <a href="/brokers/register" className="block text-agr-darkgray hover:text-agr-blue text-base font-medium py-1">Register</a>
                </div>
              </div>

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
            <a href="tel:1-800-555-1234" className="flex items-center text-agr-navy text-base font-bold py-2 mb-3">
              <Phone size={18} className="mr-2 text-agr-blue" />
              1-800-555-1234
            </a>
            <Button className="btn-primary w-full text-base font-medium">Get a Quote</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
