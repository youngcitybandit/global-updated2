
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const QuoteForm = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-agr-navy mb-6">Get a Free, No-Obligation Quote Today</h2>
            <p className="text-lg text-gray-600 mb-8">
              Complete the form, and one of our licensed insurance professionals will contact you to discuss your options and provide a personalized quote.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1">
                  <ShieldCheck className="text-agr-blue mr-4" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-agr-navy mb-1">Trusted Protection</h3>
                  <p className="text-gray-600">American GlobaleRe has been providing reliable insurance coverage for over 30 years.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <Clock className="text-agr-blue mr-4" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-agr-navy mb-1">Quick Response</h3>
                  <p className="text-gray-600">Our team will respond to your inquiry within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <Phone className="text-agr-blue mr-4" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-agr-navy mb-1">Call Us Directly</h3>
                  <p className="text-gray-600">
                    Prefer to talk now? Call us at <a href="tel:1-877-828-9970" className="text-agr-blue font-medium">1-877-828-9970</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-agr-navy mb-6">Request a Free Quote</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
                />
              </div>
              
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Type</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Insurance Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="life">Life Insurance</SelectItem>
                    <SelectItem value="home">Home Insurance</SelectItem>
                    <SelectItem value="auto">Auto Insurance</SelectItem>
                    <SelectItem value="business">Business Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="pt-2">
                <Button type="submit" className="btn-primary w-full">Get Your Free Quote</Button>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting, you agree to our <a href="#" className="text-agr-blue underline">privacy policy</a> and consent to be contacted regarding insurance.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
