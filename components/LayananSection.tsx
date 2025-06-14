import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps, LayananItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ItemCardProps {
  item: LayananItem; // Type updated to LayananItem
  index: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, index }) => {
  // Removed useRef, useIntersectionObserver, isVisible from ItemCard
  const delayClass = `child-delay-${(index % 4) * 100}`; // Renamed to child-delay-

  return (
    <div 
      className={`flex items-start p-5 bg-white rounded-lg shadow-md hover:shadow-lg
                  border-2 border-transparent hover:border-coffee-accent/20
                  transition-all duration-300 ease-out transform hover:-translate-y-0.5 
                  scroll-animate ${delayClass}`} // scroll-animate and delayClass applied directly
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-coffee-accent/10 flex items-center justify-center mr-4">
        <span className="text-2xl text-coffee-accent">{item.icon}</span>
      </div>
      <div>
        <h4 className="text-base font-poppins font-semibold text-coffee-dark mb-0.5">{item.name}</h4>
      </div>
    </div>
  );
};

const LayananSection: React.FC<SectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef);

  const layananItems: LayananItem[] = [
    { icon: '🚢', name: 'Export Documentation Handling (COO, Phytosanitary, etc)' },
    { icon: '📋', name: 'Quality Control & Cupping (SCA Standards, Moisture Content)' },
    { icon: '🚚', name: 'Logistics & Shipping Management (FOB, CNF, CIF terms)' },
    { icon: '💼', name: 'Secure Trade Finance Options (LC, TT, Escrow)' },
  ];
  
  // Removed titleRef and isTitleVisible

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 ${isSectionVisible ? 'section-in-view' : ''}`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Layanan Profesional Terintegrasi"
          subtitle="Dukungan penuh untuk memastikan kelancaran proses ekspor kopi Anda."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto">
          {layananItems.map((item, index) => (
             <ItemCard key={`serv-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayananSection;