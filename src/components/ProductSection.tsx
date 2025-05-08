
import React from 'react';
import { Heart, Briefcase, Users, Shield, Ribbon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: "Indemnity Insurance",
      description: "Flexible indemnity insurance plans providing financial protection for businesses and their employees against specific healthcare expenses and conditions.",
      icon: <Heart className="w-12 h-12 text-agr-blue" />
    },
    {
      id: 2,
      title: "Business Solutions",
      description: "Tailored reinsurance packages specifically designed for the unique needs and budgets of businesses and employer groups.",
      icon: <Briefcase className="w-12 h-12 text-agr-blue" />
    },
    {
      id: 3,
      title: "Small Employer Groups",
      description: "Specialized coverage solutions for small employer groups, balancing comprehensive protection with affordable premiums.",
      icon: <Users className="w-12 h-12 text-agr-blue" />
    },
    {
      id: 4,
      title: "Employee Well-being",
      description: "Comprehensive wellness programs and support services that enhance employee satisfaction, productivity, and overall well-being.",
      icon: <Heart className="w-12 h-12 text-agr-blue" strokeWidth={1} fill="rgba(74, 144, 226, 0.2)" />
    },
    {
      id: 5,
      title: "Risk Management",
      description: "Proactive risk assessment and mitigation strategies to protect businesses from unforeseen healthcare expenses and liability.",
      icon: <Shield className="w-12 h-12 text-agr-blue" />
    },
    {
      id: 6,
      title: "Cross-Industry Solutions",
      description: "Versatile coverage options adaptable to various industries, ensuring all businesses can find appropriate protection for their workforce.",
      icon: <Ribbon className="w-12 h-12 text-agr-blue" />
    }
  ];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-agr-navy mb-4">Modern Benefits for Today's Businesses</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            American Global provides comprehensive solutions that help employers—across 
            industries and business sizes—protect their teams and support employee well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className="mb-6">{product.icon}</div>
              <h3 className="text-xl font-bold text-agr-navy mb-3">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </Card>
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
