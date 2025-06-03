
import React from 'react';
import { Phone, LogIn } from "lucide-react";

const MobileLoginSection = () => {
  return (
    <>
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
    </>
  );
};

export default MobileLoginSection;
