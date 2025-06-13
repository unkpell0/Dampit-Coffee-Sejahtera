
import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps, ProdukItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ItemCardProps {
  item: ProdukItem;
  index: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
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
        {item.details && <p className="text-sm text-coffee-medium font-inter">{item.details.join(' • ')}</p>}
      </div>
    </div>
  );
};

const ProdukSection: React.FC<SectionProps> = ({ id }) => {
  const produkItems: ProdukItem[] = [
    { icon: '☕', name: 'Green Bean Premium', details: ['Arabika (G1, Specialty)', 'Robusta (Fine, G1)'] },
    { icon: '🔥', name: 'Roasted Coffee Beans', details: ['Light, Medium, Dark roast profiles', 'Custom roast available'] },
    { icon: '📦', name: 'Private Label & OEM', details: ['Custom packaging & branding solutions', 'Flexible MOQs'] },
    { icon: '🏭', name: 'Contract Manufacturing', details: ['End-to-end production services', 'Quality assurance'] },
  ];

  const titleRef = useRef<HTMLDivElement>(null); // Use HTMLDivElement for SectionTitle ref
  const isTitleVisible = useIntersectionObserver(titleRef);


  return (
    <section id={id} className="py-20 md:py-28 bg-gray-50"> {/* Added bg-gray-50 */}
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Produk Kopi Unggulan Kami"
          subtitle="Pilihan biji kopi terbaik dari Dampit untuk memenuhi kebutuhan ekspor Anda."
        />
        
        <div 
            ref={titleRef}
            className={`scroll-animate ${isTitleVisible ? 'is-visible' : ''}`}
        >
            {/* The cards will be animated individually, no need for a separate title animation here if SectionTitle itself animates */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"> {/* Centered content */}
          {produkItems.map((item, index) => (
            <ItemCard key={`prod-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdukSection;