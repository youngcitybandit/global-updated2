
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BrokersFAQs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-agr-navy">Broker FAQs</h1>
            
            <p className="text-lg text-agr-darkgray mb-8">
              Frequently asked questions about partnering with American Global Re as a broker.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium text-agr-blue">
                  How do I become an appointed broker with American Global Re?
                </AccordionTrigger>
                <AccordionContent className="text-agr-darkgray">
                  To become an appointed broker, please complete our broker application form available on our website or contact our broker relations team. After submission, one of our representatives will review your application and contact you to discuss the next steps.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium text-agr-blue">
                  What commission rates do you offer to brokers?
                </AccordionTrigger>
                <AccordionContent className="text-agr-darkgray">
                  We offer competitive commission structures that vary based on product line and volume. Our standard commission rates range from 10% to 15%, with opportunities for increased rates based on performance and production volume. Please contact our broker relations team for detailed information.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium text-agr-blue">
                  What support does American Global Re provide to brokers?
                </AccordionTrigger>
                <AccordionContent className="text-agr-darkgray">
                  We provide comprehensive support including dedicated account managers, marketing materials, product training, quoting tools, and ongoing educational resources. Our goal is to ensure you have everything needed to successfully market and sell our products to your clients.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium text-agr-blue">
                  How quickly can I get quotes for my clients?
                </AccordionTrigger>
                <AccordionContent className="text-agr-darkgray">
                  Our online quoting platform provides instant indicative quotes for many of our products. For more complex risks, our underwriting team typically provides quotes within 24-48 hours after receiving all required information.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium text-agr-blue">
                  What markets does American Global Re currently serve?
                </AccordionTrigger>
                <AccordionContent className="text-agr-darkgray">
                  We currently offer products in all 50 states and are continuously expanding our market presence. Each product line may have specific state availability, which is detailed in our broker portal and product guides.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrokersFAQs;
