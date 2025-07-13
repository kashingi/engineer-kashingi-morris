import React from 'react';
import { skills } from '../constants/data';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies and tools I use to bring products to life"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mr-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                </div>
                
                <div>
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <SkillBar key={techIndex} technology={tech} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;