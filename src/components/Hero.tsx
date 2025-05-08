
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-agr-lightblue to-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-2 inline-block">
              <div className="flex items-center bg-white px-4 py-1 rounded-full shadow-sm text-agr-navy">
                <Shield size={16} className="mr-2 text-agr-blue" />
                <span className="text-sm font-medium">Trusted Insurance Protection</span>
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
                <span className="text-gray-700">No medical exam options available</span>
              </div>
              <div className="flex items-center">
                <Check className="text-agr-blue mr-3" />
                <span className="text-gray-700">Rates starting at $9.95 per month</span>
              </div>
              <div className="flex items-center">
                <Check className="text-agr-blue mr-3" />
                <span className="text-gray-700">Fast and easy application process</span>
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
                <p className="text-gray-600 mb-6">Enter your ZIP code to get started with a personalized quote.</p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <input
                    type="text"
                    placeholder="Enter ZIP Code"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
                  />
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
