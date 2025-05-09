
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Brokers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-agr-navy">Broker Solutions</h1>
            
            <div className="prose lg:prose-lg mb-8">
              <p className="text-lg text-agr-darkgray mb-6">
                American Global Re provides dedicated support and innovative solutions for insurance brokers looking to expand their product offerings with our suite of indemnity insurance products.
              </p>
              
              <h2 className="text-2xl font-bold text-agr-blue mt-8 mb-4">Why Partner With Us</h2>
              
              <ul className="space-y-3 text-agr-darkgray">
                <li>Access to competitive indemnity insurance products for your clients</li>
                <li>Simplified quoting and binding process</li>
                <li>Dedicated broker support team</li>
                <li>Comprehensive marketing materials and sales support</li>
                <li>Competitive commission structures</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-agr-blue mt-8 mb-4">Our Broker Program</h2>
              
              <p className="text-lg text-agr-darkgray mb-6">
                When you partner with American Global Re, you gain access to our extensive experience in the indemnity insurance market. Our broker program is designed to help you grow your business by offering valuable products that meet the evolving needs of your clients.
              </p>
              
              <p className="text-lg text-agr-darkgray mb-6">
                Contact our broker relations team today to learn more about becoming an appointed broker with American Global Re.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Brokers;
