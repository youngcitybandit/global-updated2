
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutCompany = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-agr-navy">About Our Company</h1>
            
            <div className="prose lg:prose-lg mb-8">
              <p className="text-lg text-agr-darkgray mb-6">
                American Global Re is a leading provider of indemnity insurance solutions, committed to delivering exceptional service and innovative coverage options to our clients across the United States.
              </p>
              
              <h2 className="text-2xl font-bold text-agr-blue mt-8 mb-4">Our Mission</h2>
              
              <p className="text-lg text-agr-darkgray mb-6">
                We strive to be the most trusted partner in indemnity insurance by providing tailored solutions that protect our clients' financial interests while delivering superior customer service and support.
              </p>
              
              <h2 className="text-2xl font-bold text-agr-blue mt-8 mb-4">Our Values</h2>
              
              <ul className="space-y-3 text-agr-darkgray">
                <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards.</li>
                <li><strong>Innovation:</strong> We continuously seek new ways to improve our products and services.</li>
                <li><strong>Excellence:</strong> We are committed to excellence in everything we do.</li>
                <li><strong>Customer Focus:</strong> We put our customers at the center of our decision-making.</li>
                <li><strong>Collaboration:</strong> We believe in the power of teamwork and partnerships.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-agr-blue mt-8 mb-4">Our History</h2>
              
              <p className="text-lg text-agr-darkgray mb-6">
                Founded in 2005, American Global Re has grown from a regional provider to a national leader in indemnity insurance. With a focus on innovation and customer service, we've built a reputation for reliability and expertise in the industry.
              </p>
              
              <p className="text-lg text-agr-darkgray mb-6">
                Today, we serve thousands of clients across various industries, providing them with the protection and peace of mind they need to operate with confidence.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutCompany;
