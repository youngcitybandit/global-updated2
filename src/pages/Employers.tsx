
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Employers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-agr-navy">Employer Solutions</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-agr-darkgray mb-6">
                  American Global Re offers comprehensive indemnity insurance coverage solutions designed specifically for employers looking to enhance their employee benefits package.
                </p>
                <div className="mt-6">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-agr-blue hover:bg-blue-700"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/b2c7b53a-0a5f-4355-8c68-740105e85fdf.png" 
                  alt="Smiling business professional at a meeting" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="prose lg:prose-lg mb-8">              
              <h2 className="text-2xl font-bold text-agr-blue mt-8 mb-4">Benefits for Employers</h2>
              
              <ul className="space-y-3 text-agr-darkgray">
                <li>Enhance your existing benefits program with employee cash benefits coverage</li>
                <li>Attract and retain top talent with comprehensive benefit offerings</li>
                <li>Provide financial protection for employees when they need it most</li>
                <li>Customize coverage options to fit your organization's needs</li>
                <li>Simple administration and implementation process</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-agr-blue mt-8 mb-4">Why Choose American Global Re?</h2>
              
              <p className="text-lg text-agr-darkgray mb-6">
                Our employer solutions are designed to complement your existing healthcare benefits while providing additional financial security for your employees. With flexible plan designs and competitive pricing, we make it easy to enhance your benefits package.
              </p>
              
              <p className="text-lg text-agr-darkgray mb-6">
                Contact our team today to learn how we can help strengthen your employee benefits program with our innovative insurance solutions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Employers;
