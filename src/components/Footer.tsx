
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Footer = () => {
  return (
    <footer className="bg-agr-navy text-white">
      <div className="container-custom pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <div className="w-56 mb-4">
                <AspectRatio ratio={3/1}>
                  <img 
                    src="/lovable-uploads/cae8698b-566c-4e49-82b7-60bfed41fa2d.png" 
                    alt="American Global Re" 
                    className="object-contain w-full h-full brightness-0 invert"
                  />
                </AspectRatio>
              </div>
              <p className="text-gray-300">
                Providing trusted insurance solutions for over 30 years. We're committed to protecting what matters most to you.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-agr-teal transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-agr-teal transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-agr-teal transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-agr-teal transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-agr-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agr-teal transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agr-teal transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agr-teal transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-agr-teal transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p>6060 North Central Expressway,<br />Suite 500, Dallas, TX 75206</p>
              <p className="flex items-center">
                <Phone size={16} className="mr-2 text-agr-teal" />
                <a href="tel:1-877-828-9970" className="hover:text-agr-teal transition-colors">1-877-828-9970</a>
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2 text-agr-teal" />
                <a href="mailto:info@agreinsure.com" className="hover:text-agr-teal transition-colors">info@agreinsure.com</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} American Global Reinsurance Company, Inc. An Allied Insurance Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-agr-teal text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-agr-teal text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-agr-teal text-sm transition-colors">Licenses</a>
              <a href="#" className="text-gray-400 hover:text-agr-teal text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
