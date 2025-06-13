
import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface GalleryItemData {
  src?: string;
  alt: string;
  bgColor?: string;
}

interface GalleryImageProps {
  image: GalleryItemData;
  index: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });
  const delayClass = `delay-${(index % 3) * 100 + 100}`;

  return (
    <div 
      ref={ref}
      className={`rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 ease-out h-64 md:h-72 lg:h-80 scroll-animate ${delayClass} ${isVisible ? 'is-visible' : ''} ${image.bgColor ? image.bgColor : ''}`}
      aria-label={image.alt}
    >
      {image.src && !image.bgColor ? (
        <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        <div className="w-full h-full flex items-center justify-center p-4">
          <span className="text-white text-center text-sm sm:text-base font-medium" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>{image.alt}</span>
        </div>
      )}
    </div>
  );
};

const GaleriSection: React.FC<SectionProps> = ({ id }) => {
  const images: GalleryItemData[] = [
    { 
      alt: 'Kebun kopi hijau subur di lereng Gunung Semeru dengan pemandangan pegunungan yang menakjubkan.',
      bgColor: 'bg-gradient-to-br from-sky-300 to-sky-500' 
    },
    { 
      alt: 'Tangan petani kopi memegang biji kopi merah matang yang baru dipanen dari pohonnya.',
      bgColor: 'bg-gradient-to-br from-emerald-300 to-emerald-500'
    },
    { 
      alt: 'Fasilitas pengolahan biji kopi yang modern, bersih, dan terorganisir dengan baik.', 
      bgColor: 'bg-gradient-to-br from-amber-200 to-amber-400'
    },
    { 
      alt: 'Proses sortasi manual biji kopi berkualitas tinggi oleh pekerja terampil untuk memastikan kualitas ekspor.', 
      bgColor: 'bg-gradient-to-br from-rose-300 to-rose-500'
    },
    { 
      alt: 'Kemasan kopi premium dalam karung goni dengan label CV. Dampit Coffee Sejahtera, siap untuk diekspor.', 
      bgColor: 'bg-gradient-to-br from-indigo-300 to-indigo-500'
    },
    { 
      alt: 'Kontainer kargo besar sedang dimuat dengan karung-karung kopi untuk pengiriman internasional via laut.', 
      bgColor: 'bg-gradient-to-br from-lime-300 to-lime-500'
    },
  ];

  return (
    <section id={id} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Perjalanan Kopi dari Kebun ke Dunia"
          subtitle="Lihatlah lebih dekat proses kami, dari pemetikan biji pilihan hingga pengiriman global."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <GalleryImage key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriSection;
