
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Check, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  const [selectedState, setSelectedState] = useState<string>("");

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
              Secure Your Future With Confidence
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
              <Button className="btn-primary">Get Your Free Quote</Button>
              <Button variant="outline" className="btn-outline">Learn More</Button>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <div className="absolute inset-0 bg-agr-navy/10 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-5/6 max-w-md">
                <h3 className="text-xl font-semibold text-agr-navy mb-4">Ready to get protected?</h3>
                <p className="text-gray-600 mb-6">Select your state to get started with a personalized quote.</p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <div className="flex-1">
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 font-medium">State</span>
                          {selectedState && <span className="ml-1 text-base font-medium text-gray-800">{selectedState}</span>}
                          {!selectedState && <SelectValue placeholder="Select a state" />}
                        </div>
                      </SelectTrigger>
                      <SelectContent className="max-h-80 overflow-y-auto">
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="btn-primary whitespace-nowrap">Go</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
