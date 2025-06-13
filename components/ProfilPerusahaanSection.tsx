
import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ProfilPerusahaanSection: React.FC<SectionProps> = ({ id }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null); 
  const isTextVisible = useIntersectionObserver(textRef);
  const isImageContainerVisible = useIntersectionObserver(imageContainerRef, { threshold: 0.3 });

  const altText = "Fasilitas pengolahan kopi CV. Dampit Coffee Sejahtera yang modern dan higienis";

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="CV. Dampit Coffee Sejahtera" 
          subtitle="Mitra Terpercaya Anda untuk Kopi Ekspor Berkualitas Tinggi dari Indonesia." 
        />
        <div className="max-w-3xl mx-auto lg:text-left lg:max-w-none grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div 
              ref={textRef}
              className={`prose prose-lg text-coffee-medium font-inter leading-relaxed scroll-animate ${isTextVisible ? 'is-visible' : ''}`}
            >
              <p>
                Didirikan pada tahun 2018, CV. Dampit Coffee Sejahtera berdedikasi menjadi eksportir kopi terkemuka dari Jawa Timur. Kami memadukan <strong className="text-coffee-dark">tradisi petani lokal</strong> dengan <strong className="text-coffee-dark">teknologi pengolahan modern</strong> untuk menghasilkan kopi berkualitas ekspor yang konsisten dan terukur.
              </p>
              <p>
                Dengan kemitraan langsung bersama lebih dari <strong className="text-coffee-dark">200 petani kopi</strong> di kawasan Dampit, kami memastikan <em className="text-coffee-dark">traceability</em> yang jelas dari kebun hingga ke tangan buyer internasional. Fasilitas pengolahan kami berkapasitas <strong className="text-coffee-dark">500 ton per tahun</strong>, didukung sertifikasi HACCP dan ISO 22000 untuk jaminan mutu tertinggi.
              </p>
            </div>
            <div 
              ref={imageContainerRef}
              className={`w-full h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-xl 
                          scroll-animate delay-200 ${isImageContainerVisible ? 'is-visible' : ''}
                          bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500  // Vibrant gradient
                          flex items-center justify-center p-4`} 
            >
              <span 
                className="text-white text-center text-lg sm:text-xl font-medium" 
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
