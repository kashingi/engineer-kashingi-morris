import React from 'react';
import { services } from '../constants/data';
import SectionTitle from '../components/SectionTitle';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Services I Offer" 
          subtitle="Specialized solutions to help you achieve your business goals"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-blue-600 mb-6 mx-auto">
                  <Icon size={30} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;