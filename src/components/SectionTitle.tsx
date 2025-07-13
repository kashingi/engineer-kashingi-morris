import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-12 max-w-2xl ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
        <span className="inline-block w-16 h-1 bg-blue-500 ml-3 align-middle"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-2 text-lg">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;