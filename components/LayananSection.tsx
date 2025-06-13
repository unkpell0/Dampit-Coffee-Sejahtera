
import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps, LayananItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ItemCardProps {
  item: LayananItem;
  index: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  // Stagger based on index
  const delayClass = `delay-${(index % 4) * 100}`;

  return (
    <div 
      ref={ref}
      className={`flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl 
                  border-2 border-transparent hover:border-coffee-accent/30
                  transition-all duration-300 ease-out transform hover:-translate-y-1 
                  scroll-animate ${delayClass} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coffee-accent/10 flex items-center justify-center mr-5">
        <span className="text-3xl text-coffee-accent">{item.icon}</span>
      </div>
      <div>
        <h4 className="text-lg font-poppins font-semibold text-coffee-dark mb-1">{item.name}</h4>
        {/* LayananItem might not have details, adjust as needed or remove this line if LayananItem type doesn't support it */}
        {/* {'details' in item && item.details && <p className="text-sm text-coffee-medium font-inter">{item.details.join(' • ')}</p>} */}
      </div>
    </div>
  );
};

const LayananSection: React.FC<SectionProps> = ({ id }) => {
  const layananItems: LayananItem[] = [
    { icon: '🚢', name: 'Export Documentation Handling (COO, Phytosanitary, etc)' },
    { icon: '📋', name: 'Quality Control & Cupping (SCA Standards, Moisture Content)' },
    { icon: '🚚', name: 'Logistics & Shipping Management (FOB, CNF, CIF terms)' },
    { icon: '💼', name: 'Secure Trade Finance Options (LC, TT, Escrow)' },
  ];
  
  const titleRef = useRef<HTMLDivElement>(null); // Use HTMLDivElement for SectionTitle ref
  const isTitleVisible = useIntersectionObserver(titleRef);

  return (
    <section id={id} className="py-20 md:py-28"> {/* White background */}
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Layanan Profesional Terintegrasi"
          subtitle="Dukungan penuh untuk memastikan kelancaran proses ekspor kopi Anda."
        />
        
         <div 
            ref={titleRef}
            className={`scroll-animate ${isTitleVisible ? 'is-visible' : ''}`}
        >
             {/* The cards will be animated individually */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">  {/* Centered content */}
          {layananItems.map((item, index) => (
             <ItemCard key={`serv-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayananSection;