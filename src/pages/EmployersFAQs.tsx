
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EmployersFAQs = () => {
  const faqs = [
    {
      question: "What is indemnity insurance?",
      answer: "Indemnity insurance provides a cash benefit directly to the insured for covered events, regardless of what other insurance may pay. These benefits can be used for any purpose, such as covering deductibles, copays, or daily expenses while recovering."
    },
    {
      question: "How does this complement my existing health insurance benefits?",
      answer: "Our indemnity insurance works alongside traditional health insurance by providing additional cash benefits for covered events. While health insurance pays medical providers, our indemnity coverage pays cash directly to employees that they can use for any purpose."
    },
    {
      question: "Is there a minimum company size requirement?",
      answer: "We offer flexible solutions for businesses of various sizes. Generally, we can accommodate employers with as few as 10 employees. Contact us for specific eligibility requirements for your organization."
    },
    {
      question: "What coverage options are available?",
      answer: "We offer coverage for hospital stays, surgical procedures, emergency room visits, ambulance services, anesthesia, and wellness benefits. Plans can be customized based on your company's needs and budget."
    },
    {
      question: "How are premiums calculated?",
      answer: "Premiums are based on several factors including group size, industry, employee demographics, and selected coverage options. We offer competitive rates with various contribution strategies available."
    },
    {
      question: "How do employees file claims?",
      answer: "We provide a simple, streamlined claims process. Employees can submit claims online, through our mobile app, or by mail. Our dedicated claims team is available to assist throughout the process."
    },
    {
      question: "Can coverage be customized for our specific needs?",
      answer: "Yes, we offer flexible plan designs that can be tailored to meet your organization's specific needs and budget constraints. Our team will work with you to create the optimal coverage solution."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-agr-navy">Frequently Asked Questions</h1>
            <p className="text-lg text-agr-darkgray mb-8">
              Find answers to common questions about our employer indemnity insurance solutions.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-agr-navy">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-agr-darkgray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-agr-blue mb-4">Still have questions?</h2>
              <p className="text-agr-darkgray mb-4">
                Our team is ready to help answer any additional questions you may have about our insurance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:1-877-828-9970" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-agr-blue hover:bg-blue-700"
                >
                  Call Us Now
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-agr-blue text-base font-medium rounded-md text-agr-blue bg-white hover:bg-gray-50"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployersFAQs;
