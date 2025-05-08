
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Footer = () => {
  return (
    <footer className="bg-agr-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-8">
              <div className="w-56 mb-6">
                <AspectRatio ratio={3/1}>
                  <img 
                    src="/lovable-uploads/cae8698b-566c-4e49-82b7-60bfed41fa2d.png" 
                    alt="AmericanGlobalRe" 
                    className="object-contain w-full h-full brightness-0 invert"
                  />
                </AspectRatio>
              </div>
              <p className="text-xl max-w-lg">
                Providing trusted insurance solutions for over 30 years. We're committed to protecting what matters most to you.
              </p>
            </div>
            
            <div className="flex space-x-6 items-center">
              <a href="#" className="text-white hover:text-agr-teal transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-agr-teal transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-agr-teal transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-agr-teal transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white text-lg hover:text-agr-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-white text-lg hover:text-agr-teal transition-colors">Careers</a></li>
              <li><a href="#" className="text-white text-lg hover:text-agr-teal transition-colors">Press</a></li>
              <li><a href="#" className="text-white text-lg hover:text-agr-teal transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-white text-lg hover:text-agr-teal transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} American Global Reinsurance Company, Inc. An Allied Insurance Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-agr-teal text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-agr-teal text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
