import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps, ProdukItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ItemCardProps {
  item: ProdukItem;
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
        {item.details && <p className="text-xs text-coffee-medium font-inter">{item.details.join(' • ')}</p>}
      </div>
    </div>
  );
};

const ProdukSection: React.FC<SectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef);

  const produkItems: ProdukItem[] = [
    { icon: '☕', name: 'Green Bean Premium', details: ['Arabika (G1, Specialty)', 'Robusta (Fine, G1)'] },
    { icon: '🔥', name: 'Roasted Coffee Beans', details: ['Light, Medium, Dark roast profiles', 'Custom roast available'] },
    { icon: '📦', name: 'Private Label & OEM', details: ['Custom packaging & branding solutions', 'Flexible MOQs'] },
    { icon: '🏭', name: 'Contract Manufacturing', details: ['End-to-end production services', 'Quality assurance'] },
  ];

  // Removed titleRef and isTitleVisible as SectionTitle handles its own animation via scroll-animate

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 bg-gray-50 ${isSectionVisible ? 'section-in-view' : ''}`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Produk Kopi Unggulan Kami"
          subtitle="Pilihan biji kopi terbaik dari Dampit untuk memenuhi kebutuhan ekspor Anda."
          // SectionTitle will animate when section-in-view is active
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto">
          {produkItems.map((item, index) => (
            <ItemCard key={`prod-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdukSection;