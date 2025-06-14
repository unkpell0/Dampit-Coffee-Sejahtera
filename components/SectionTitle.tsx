import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className }) => {
  // Removed useRef and useIntersectionObserver, isVisible state
  // The 'scroll-animate' class will be triggered by parent section having 'section-in-view'
  return (
    <div 
      className={`mb-12 md:mb-14 text-center scroll-animate ${className || ''}`} 
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-coffee-dark mb-3">{title}</h2>
      {subtitle && <p className="text-base md:text-lg text-coffee-medium font-inter max-w-xl lg:max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-4 h-1 w-24 bg-coffee-accent mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;