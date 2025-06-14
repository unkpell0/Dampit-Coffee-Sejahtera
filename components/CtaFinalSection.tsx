import React, { useRef } from 'react';
import { WHATSAPP_LINK } from '../constants';
import { SectionProps } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CtaFinalSection: React.FC<SectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null); // Changed ref type to HTMLElement for section
  const isSectionVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 }); // Renamed isVisible to isSectionVisible

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-20 md:py-28 bg-coffee-dark text-white ${isSectionVisible ? 'section-in-view' : ''}`} // Apply section-in-view
    >
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-5 scroll-animate child-delay-100" // Added scroll-animate and child-delay
        >
          Siap Memulai Kemitraan Kopi Jangka Panjang?
        </h2>
        <p 
          className="text-base md:text-lg font-inter mb-10 max-w-xl lg:max-w-2xl mx-auto text-gray-300 leading-relaxed scroll-animate child-delay-200" // Added scroll-animate and child-delay
        >
          Hubungi tim ahli ekspor kami sekarang untuk konsultasi gratis, permintaan sampel, dan penawaran khusus untuk volume besar. Kami berkomitmen menyediakan kopi premium dengan kualitas dan pengiriman yang terpercaya untuk pasar global.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-whatsapp text-white font-poppins font-semibold px-8 py-3 md:px-10 md:py-3.5 rounded-lg text-base md:text-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 scroll-animate child-delay-300" // Added scroll-animate and child-delay
        >
          Mulai Diskusi via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CtaFinalSection;