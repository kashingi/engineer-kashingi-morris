import React from 'react';
import { Technology } from '../types';

interface SkillBarProps {
  technology: Technology;
}

const SkillBar: React.FC<SkillBarProps> = ({ technology }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{technology.name}</span>
        <span className="text-xs font-medium text-gray-500">{technology.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${technology.level}%` }}
        >
        </div>
      </div>
    </div>
  );
};

export default SkillBar;