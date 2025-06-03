
import React from 'react';
import { Phone, ChevronDown, LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LoginButton = () => {
  return (
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
  );
};

export default LoginButton;
