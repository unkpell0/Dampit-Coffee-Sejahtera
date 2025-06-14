import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps, SertifikasiItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CertificationCard: React.FC<{ cert: SertifikasiItem, index: number }> = ({ cert, index }) => {
  // Removed useRef, useIntersectionObserver, isVisible from CertificationCard
  const delayClass = `child-delay-${(index % 6) * 100}`; // Renamed to child-delay-


  return (
    <div 
      className={`flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-md border-2 border-brand-gold/60 hover:border-brand-gold hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-out scroll-animate ${delayClass}`}
    >
      {cert.icon && <span className="text-3xl md:text-4xl text-brand-gold mb-2.5">{cert.icon}</span>}
      <p className="font-poppins text-xs md:text-sm font-medium text-coffee-dark text-center">{cert.name}</p>
    </div>
  );
};

const SertifikasiSection: React.FC<SectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef);

  const certifications: SertifikasiItem[] = [
    { name: 'Organic Certified (JAS, USDA, EU)', icon: '🌿' },
    { name: 'Fair Trade Certified', icon: '🤝' },
    { name: 'Rainforest Alliance', icon: '🌳' },
    { name: 'UTZ Certified (Part of Rainforest)', icon: '🌍' },
    { name: 'HACCP & ISO 22000', icon: '🔬' },
    { name: 'Halal Certification (MUI)', icon: '🕌' },
  ];

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 ${isSectionVisible ? 'section-in-view' : ''}`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Standar Internasional, Kualitas Terjamin"
          subtitle="Komitmen kami terhadap kualitas dibuktikan dengan sertifikasi yang diakui secara global."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6 text-center">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SertifikasiSection;