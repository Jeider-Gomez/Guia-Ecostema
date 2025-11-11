import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  // Fix: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon?: React.ReactElement;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = 'bg-white', icon }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-4">
            {icon && <div className="text-emerald-500">{icon}</div>}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
          </div>
          {subtitle && <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
