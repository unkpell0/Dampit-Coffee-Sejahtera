import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps, InfographicItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const InfographicCard: React.FC<{ item: InfographicItem, index: number }> = ({ item, index }) => {
  // Removed useRef, useIntersectionObserver, isVisible
  const delays = [100, 200, 300, 150, 250]; // Example for 5 items
  const delayClass = `child-delay-${delays[index % delays.length]}`; // Renamed to child-delay-

  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out scroll-animate ${delayClass}`}
    >
      <div className="text-4xl md:text-5xl text-coffee-accent mb-3">{item.icon}</div>
      <p className="text-2xl lg:text-3xl font-poppins font-bold text-coffee-dark mb-1.5">{item.value}</p>
      <p className="text-coffee-medium font-inter text-sm md:text-base">{item.label}</p>
    </div>
  );
};

const KapasitasSection: React.FC<SectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef);

  const infographicData: InfographicItem[] = [
    { icon: '📊', value: '500+ ton/tahun', label: 'Kapasitas Produksi Tahunan' },
    { icon: '🌏', value: '15+ Negara', label: 'Jangkauan Ekspor Global' },
    { icon: '👥', value: '200+ Petani', label: 'Kemitraan Petani Lokal Inti' },
    { icon: '📈', value: '40% YoY Growth', label: 'Pertumbuhan Ekspor (2021-2024)' },
    { icon: '🚢', value: '300+ Ton/Ekspor', label: 'Volume Ekspor Rata-Rata per Shipment' },
  ];

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 bg-gray-50 ${isSectionVisible ? 'section-in-view' : ''}`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Kapasitas Produksi & Jangkauan Ekspor"
          subtitle="Skala operasi kami dirancang untuk memenuhi permintaan global dengan kualitas terjaga."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {infographicData.map((item, index) => (
            <InfographicCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KapasitasSection;