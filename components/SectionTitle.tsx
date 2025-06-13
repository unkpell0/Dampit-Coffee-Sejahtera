import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <div 
      ref={ref}
      className={`mb-14 md:mb-16 text-center scroll-animate ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-coffee-dark mb-4">{title}</h2>
      {subtitle && <p className="text-lg md:text-xl text-coffee-medium font-inter max-w-2xl lg:max-w-3xl mx-auto">{subtitle}</p>}
      <div className="mt-5 h-1.5 w-28 bg-coffee-accent mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;