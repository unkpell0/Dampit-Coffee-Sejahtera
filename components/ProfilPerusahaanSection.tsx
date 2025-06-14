import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ProfilPerusahaanSection: React.FC<SectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef);

  // Removed individual refs and observers for textRef and imageContainerRef
  
  const altText = "Fasilitas pengolahan kopi CV. Dampit Coffee Sejahtera yang modern dan higienis";

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 ${isSectionVisible ? 'section-in-view' : ''}`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="CV. Dampit Coffee Sejahtera" 
          subtitle="Mitra Terpercaya Anda untuk Kopi Ekspor Berkualitas Tinggi dari Indonesia." 
          // SectionTitle itself has scroll-animate, will be triggered by section-in-view
        />
        <div className="max-w-2xl mx-auto lg:text-left lg:max-w-none grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div 
              className="prose text-coffee-medium font-inter leading-relaxed scroll-animate child-delay-100" // Added child-delay
            >
              <p>
                Didirikan pada tahun 2018, CV. Dampit Coffee Sejahtera berdedikasi menjadi eksportir kopi terkemuka dari Jawa Timur. Kami memadukan <strong className="text-coffee-dark">tradisi petani lokal</strong> dengan <strong className="text-coffee-dark">teknologi pengolahan modern</strong> untuk menghasilkan kopi berkualitas ekspor yang konsisten dan terukur.
              </p>
              <p>
                Dengan kemitraan langsung bersama lebih dari <strong className="text-coffee-dark">200 petani kopi</strong> di kawasan Dampit, kami memastikan <em className="text-coffee-dark">traceability</em> yang jelas dari kebun hingga ke tangan buyer internasional. Fasilitas pengolahan kami berkapasitas <strong className="text-coffee-dark">500 ton per tahun</strong>, didukung sertifikasi HACCP dan ISO 22000 untuk jaminan mutu tertinggi.
              </p>
            </div>
            <div 
              className={`w-full h-72 md:h-80 lg:h-[400px] rounded-lg overflow-hidden shadow-lg 
                          scroll-animate child-delay-200 // Added child-delay
                          bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500
                          flex items-center justify-center p-3`}
            >
              <span 
                className="text-white text-center text-base sm:text-lg font-medium"
                style={{textShadow: '0 1px 3px rgba(0,0,0,0.6)'}}
              >
                {altText}
              </span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilPerusahaanSection;