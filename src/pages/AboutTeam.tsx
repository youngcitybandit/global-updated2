
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
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-agr-navy">Our Team</h1>
            
            <div className="prose lg:prose-lg mb-8">
              <p className="text-lg text-agr-darkgray mb-6">
                Our success is driven by our dedicated team of insurance professionals who bring decades of combined experience to American Global Re. Meet the people who make our company exceptional.
              </p>
              
              <h2 className="text-2xl font-bold text-agr-blue mt-8 mb-4">Leadership Team</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {/* CEO */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-agr-navy mb-2">Sarah Johnson</h3>
                  <p className="text-agr-blue font-medium mb-4">Chief Executive Officer</p>
                  <p className="text-agr-darkgray">
                    With over 20 years of experience in the insurance industry, Sarah leads our company with a focus on strategic growth and innovation.
                  </p>
                </div>
                
                {/* COO */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-agr-navy mb-2">Michael Roberts</h3>
                  <p className="text-agr-blue font-medium mb-4">Chief Operations Officer</p>
                  <p className="text-agr-darkgray">
                    Michael oversees our day-to-day operations, ensuring we deliver the highest quality service to our clients and partners.
                  </p>
                </div>
                
                {/* CFO */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-agr-navy mb-2">David Chen</h3>
                  <p className="text-agr-blue font-medium mb-4">Chief Financial Officer</p>
                  <p className="text-agr-darkgray">
                    David manages our financial strategy, enabling sustainable growth while maintaining our strong financial position.
                  </p>
                </div>
                
                {/* CMO */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-agr-navy mb-2">Amanda Wilson</h3>
                  <p className="text-agr-blue font-medium mb-4">Chief Marketing Officer</p>
                  <p className="text-agr-darkgray">
                    Amanda leads our marketing initiatives, helping us connect with clients and partners through effective communication strategies.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-agr-blue mt-12 mb-4">Our Experts</h2>
              
              <p className="text-lg text-agr-darkgray mb-6">
                Beyond our leadership team, American Global Re employs talented professionals across various specialties, including:
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
