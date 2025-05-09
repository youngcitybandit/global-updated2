
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-agr-navy">About Us</h1>
            
            {/* Company Section */}
            <section id="company" className="mb-16">
              <h2 className="text-2xl font-bold text-agr-blue mb-6">Our Company</h2>
              <div className="prose lg:prose-lg">
                <p className="text-lg text-agr-darkgray mb-6">
                  American Global Re is a leading provider of indemnity insurance solutions, committed to delivering exceptional service and innovative coverage options to our clients across the United States.
                </p>
                
                <p className="text-lg text-agr-darkgray mb-6">
                  Founded in 2005, American Global Re has grown from a regional provider to a national leader in indemnity insurance. With a focus on innovation and customer service, we've built a reputation for reliability and expertise in the industry.
                </p>
                
                <p className="text-lg text-agr-darkgray mb-6">
                  Today, we serve thousands of clients across various industries, providing them with the protection and peace of mind they need to operate with confidence.
                </p>
              </div>
            </section>
            
            {/* Mission Section */}
            <section id="mission" className="mb-16">
              <h2 className="text-2xl font-bold text-agr-blue mb-6">Our Mission</h2>
              <div className="prose lg:prose-lg">
                <p className="text-lg text-agr-darkgray mb-6">
                  Our mission is to empower employers with innovative, customized, indemnity insurance solutions that go beyond traditional coverage — delivering immediate cash benefits to employees while enhancing retention, satisfaction, and workforce stability in today's evolving healthcare landscape.
                </p>
                
                <h3 className="text-xl font-bold text-agr-navy mt-8 mb-4">Our Values</h3>
                
                <ul className="space-y-3 text-agr-darkgray mb-8">
                  <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards.</li>
                  <li><strong>Innovation:</strong> We continuously seek new ways to improve our products and services.</li>
                  <li><strong>Excellence:</strong> We are committed to excellence in everything we do.</li>
                  <li><strong>Customer Focus:</strong> We put our customers at the center of our decision-making.</li>
                  <li><strong>Collaboration:</strong> We believe in the power of teamwork and partnerships.</li>
                </ul>
              </div>
            </section>
            
            {/* Our Team Section */}
            <section id="team" className="mb-16">
              <h2 className="text-2xl font-bold text-agr-blue mb-6">Our Team</h2>
              <div className="prose lg:prose-lg mb-8">
                <p className="text-lg text-agr-darkgray mb-6">
                  Our success is driven by our dedicated team of insurance professionals who bring decades of combined experience to American Global Re. Meet the people who make our company exceptional.
                </p>
              </div>
              
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
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
