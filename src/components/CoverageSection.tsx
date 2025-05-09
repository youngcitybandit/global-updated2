
import React from 'react';
import { Hospital, Ambulance, Stethoscope, Bandage, Bed, Scissors } from "lucide-react";

const CoverageSection = () => {
  const coverageItems = [
    {
      id: 1,
      title: "Hospital",
      description: "Cash benefits for hospital stays and procedures",
      icon: <Hospital className="w-12 h-12 text-white" />
    },
    {
      id: 2,
      title: "Emergency Room",
      description: "Coverage for unexpected medical emergencies",
      icon: <Bed className="w-12 h-12 text-white" />
    },
    {
      id: 3,
      title: "Ambulance",
      description: "Benefits for emergency transportation services",
      icon: <Ambulance className="w-12 h-12 text-white" />
    },
    {
      id: 4,
      title: "Surgical",
      description: "Financial support for surgical procedures",
      icon: <Scissors className="w-12 h-12 text-white" />
    },
    {
      id: 5,
      title: "Anesthesia",
      description: "Coverage for anesthesia-related expenses",
      icon: <Bandage className="w-12 h-12 text-white" />
    },
    {
      id: 6,
      title: "Wellness",
      description: "Support for preventative care and wellness",
      icon: <Stethoscope className="w-12 h-12 text-white" strokeWidth={1.5} />
    }
  ];

  return (
    <section id="coverage" className="section-padding bg-white text-agr-navy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-agr-blue">Indemnity Insurance Providing Cash Benefit Solutions</span>
            <span className="text-agr-navy"> for Your Workforce</span>
          </h2>
          <p className="text-lg text-agr-darkgray max-w-3xl mx-auto">
            Enhance your existing benefits program with American Global's employee cash benefits coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageItems.map((item) => (
            <div 
              key={item.id} 
              className="rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="bg-gradient-to-r from-agr-blue to-blue-700 p-6 flex justify-center items-center">
                {item.icon}
              </div>
              <div className="bg-white border border-gray-100 p-6 flex-grow">
                <h3 className="text-xl font-bold text-agr-navy mb-3">{item.title}</h3>
                <p className="text-agr-darkgray">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
