import React, { useRef } from 'react';
import { WHATSAPP_LINK } from '../constants';
import { SectionProps } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CtaFinalSection: React.FC<SectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="py-24 md:py-32 bg-coffee-dark text-white"
    >
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 
          className={`text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 scroll-animate ${isVisible ? 'is-visible' : ''}`}
        >
          Siap Memulai Kemitraan Kopi Jangka Panjang?
        </h2>
        <p 
          className={`text-lg md:text-xl font-inter mb-12 max-w-2xl lg:max-w-3xl mx-auto text-gray-300 leading-relaxed scroll-animate delay-200 ${isVisible ? 'is-visible' : ''}`}
        >
          Hubungi tim ahli ekspor kami sekarang untuk konsultasi gratis, permintaan sampel, dan penawaran khusus untuk volume besar. Kami berkomitmen menyediakan kopi premium dengan kualitas dan pengiriman yang terpercaya untuk pasar global.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-brand-whatsapp text-white font-poppins font-semibold px-10 py-4 md:px-12 md:py-5 rounded-xl text-lg md:text-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 scroll-animate delay-400 ${isVisible ? 'is-visible' : ''}`}
        >
          Mulai Diskusi via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CtaFinalSection;