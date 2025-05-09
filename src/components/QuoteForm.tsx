
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import QuoteDialog from './QuoteDialog';

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
            
            <QuoteDialog 
              trigger={
                <Button type="button" className="btn-primary w-full bg-agr-navy hover:bg-agr-navy/80 text-white py-3 font-medium rounded-md">
                  Get Your Free Quote
                </Button>
              }
            />
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="text-agr-blue mr-3" size={20} />
                <span className="text-gray-600">Or email us at <a href="mailto:quotes@americanglobalere.com" className="text-agr-blue font-medium">quotes@americanglobalere.com</a></span>
              </div>
              
              <p className="text-xs text-gray-500">
                By submitting, you agree to our <a href="#" className="text-agr-blue underline">privacy policy</a> and consent to be contacted regarding insurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
