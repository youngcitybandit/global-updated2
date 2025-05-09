
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Check, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import QuoteDialog from './QuoteDialog';

const Hero = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [headingIndex, setHeadingIndex] = useState(0);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  
  const headings = [
    "Managing Risk for Employer Benefits",
    "Empowering Employee Benefits",
    "Transforming Health Insurance"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setQuoteDialogOpen(true);
  };

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", 
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", 
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  return (
    <section className="bg-gradient-to-b from-agr-lightblue to-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-2 inline-block">
              <div className="flex items-center bg-white px-4 py-1 rounded-full shadow-sm text-agr-navy">
                <Shield size={16} className="mr-2 text-agr-blue" />
                <span className="text-sm font-medium">Trusted Insurance Indemnity Protection</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agr-navy mb-6">
              <span className="block min-h-[3.5rem]">{headings[headingIndex]}</span>
              <span className="text-agr-blue">in the Digital Age</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              American Global Re delivers advanced, customized insurance solutions that go beyond traditional coverage — because health insurance wasn't built to cover it all. We don't just respond to change — we drive it.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="text-agr-blue mr-3" />
                <span className="text-gray-700">Customized Insurance Solutions</span>
              </div>
              <div className="flex items-center">
                <Check className="text-agr-blue mr-3" />
                <span className="text-gray-700">Innovative Risk Management</span>
              </div>
              <div className="flex items-center">
                <Check className="text-agr-blue mr-3" />
                <span className="text-gray-700">World-Class Service</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <QuoteDialog 
                trigger={<Button className="btn-primary">Get Your Free Quote</Button>}
              />
              <Button variant="outline" className="btn-outline">Learn More</Button>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <div className="absolute inset-0 bg-agr-navy/10 rounded-lg overflow-hidden flex items-center justify-center">
              {/* Main image - no blur */}
              <img 
                src="/lovable-uploads/7cd812ae-3708-4ad7-90f6-71007ec36c73.png"
                alt="Insurance coverage illustration"
                className="w-full h-full object-cover rounded-lg"
              />
                
              {/* Bottom section - with blur */}
              <div className="bg-transparent backdrop-blur-sm p-4 md:p-5 rounded-t-none rounded-b-lg w-full absolute bottom-0 left-0 right-0 z-10 border-t border-white/30">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="text-lg font-semibold text-agr-navy">Ready to get protected?</h3>
                    <p className="text-sm text-agr-navy">Select your state for a custom quote</p>
                  </div>
                  <div className="flex w-full sm:w-auto space-x-2">
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger className="w-full sm:w-[180px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue">
                        <SelectValue placeholder="Select a state" />
                      </SelectTrigger>
                      <SelectContent className="max-h-80 overflow-y-auto">
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button 
                      className="btn-primary whitespace-nowrap" 
                      onClick={() => selectedState && setQuoteDialogOpen(true)}
                    >
                      Go
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Render the dialog without a trigger but controlled by state */}
      <QuoteDialog 
        defaultOpen={quoteDialogOpen} 
        onOpenChange={setQuoteDialogOpen} 
      />
    </section>
  );
};

export default Hero;
