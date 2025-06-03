
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutTeam = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-agr-navy">Our Experts</h1>
            
            <div className="prose lg:prose-lg mb-8">
              <p className="text-lg text-agr-darkgray mb-6">
                American Global employs talented professionals across various specialties, including:
              </p>
              
              <ul className="space-y-3 text-agr-darkgray mb-8">
                <li>Underwriting specialists with deep industry knowledge</li>
                <li>Claims processing experts committed to fair and efficient resolution</li>
                <li>Customer service representatives dedicated to exceptional support</li>
                <li>Risk management consultants who help clients mitigate potential issues</li>
                <li>Technology professionals who maintain our cutting-edge systems</li>
              </ul>
              
              <p className="text-lg text-agr-darkgray mb-6">
                Together, our team works collaboratively to deliver the best possible experience and outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutTeam;
