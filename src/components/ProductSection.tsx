
import React from 'react';
import { Heart, Home, Car, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: "Life Insurance",
      description: "Protect your family's financial future with coverage options designed to meet your needs.",
      icon: <Heart className="w-10 h-10 text-agr-blue" />,
      features: ["Term Life Insurance", "Whole Life Insurance", "Final Expense Insurance"]
    },
    {
      id: 2,
      title: "Home Insurance",
      description: "Safeguard your home and possessions with comprehensive coverage for any situation.",
      icon: <Home className="w-10 h-10 text-agr-blue" />,
      features: ["Homeowners Insurance", "Renters Insurance", "Flood Insurance"]
    },
    {
      id: 3,
      title: "Auto Insurance",
      description: "Drive with confidence knowing you have reliable protection on the road.",
      icon: <Car className="w-10 h-10 text-agr-blue" />,
      features: ["Liability Coverage", "Collision Coverage", "Comprehensive Coverage"]
    },
    {
      id: 4,
      title: "Business Insurance",
      description: "Protect your business assets, employees, and operations with tailored coverage solutions.",
      icon: <Briefcase className="w-10 h-10 text-agr-blue" />,
      features: ["General Liability", "Workers' Compensation", "Business Property"]
    }
  ];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agr-navy mb-4">Insurance Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            American GlobaleRe offers a variety of insurance products designed to protect what matters most to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-agr-navy mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-agr-blue mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#" className="inline-flex items-center text-agr-blue font-medium hover:text-agr-navy transition-colors">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary">View All Insurance Products</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
