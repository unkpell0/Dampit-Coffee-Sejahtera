import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps, SertifikasiItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CertificationCard: React.FC<{ cert: SertifikasiItem, index: number }> = ({ cert, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const delayClass = `delay-${(index % 6) * 100}`;


  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg border-2 border-brand-gold/70 hover:border-brand-gold hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out scroll-animate ${delayClass} ${isVisible ? 'is-visible' : ''}`}
    >
      {cert.icon && <span className="text-4xl md:text-5xl text-brand-gold mb-3">{cert.icon}</span>}
      <p className="font-poppins text-sm md:text-base font-medium text-coffee-dark text-center">{cert.name}</p>
    </div>
  );
};

const SertifikasiSection: React.FC<SectionProps> = ({ id }) => {
  const certifications: SertifikasiItem[] = [
    { name: 'Organic Certified (JAS, USDA, EU)', icon: '🌿' }, // Using different emoji for variety
    { name: 'Fair Trade Certified', icon: '🤝' },
    { name: 'Rainforest Alliance', icon: '🌳' },
    { name: 'UTZ Certified (Part of Rainforest)', icon: '🌍' },
    { name: 'HACCP & ISO 22000', icon: '🔬' },
    { name: 'Halal Certification (MUI)', icon: '🕌' },
  ];

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Standar Internasional, Kualitas Terjamin"
          subtitle="Komitmen kami terhadap kualitas dibuktikan dengan sertifikasi yang diakui secara global."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 text-center">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SertifikasiSection;