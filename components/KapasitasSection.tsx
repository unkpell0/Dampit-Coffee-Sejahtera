import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps, InfographicItem } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const InfographicCard: React.FC<{ item: InfographicItem, index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  // Custom delay logic for a nice wave or staggered effect
  const delays = [100, 200, 300, 150, 250]; // Example for 5 items
  const delayClass = `delay-${delays[index % delays.length]}`;

  return (
    <div 
      ref={ref}
      className={`bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out scroll-animate ${delayClass} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="text-5xl md:text-6xl text-coffee-accent mb-4">{item.icon}</div>
      <p className="text-3xl lg:text-4xl font-poppins font-bold text-coffee-dark mb-2">{item.value}</p>
      <p className="text-coffee-medium font-inter text-base md:text-lg">{item.label}</p>
    </div>
  );
};

const KapasitasSection: React.FC<SectionProps> = ({ id }) => {
  const infographicData: InfographicItem[] = [
    { icon: '📊', value: '500+ ton/tahun', label: 'Kapasitas Produksi Tahunan' },
    { icon: '🌏', value: '15+ Negara', label: 'Jangkauan Ekspor Global' },
    { icon: '👥', value: '200+ Petani', label: 'Kemitraan Petani Lokal Inti' },
    { icon: '📈', value: '40% YoY Growth', label: 'Pertumbuhan Ekspor (2021-2024)' },
    { icon: '🚢', value: '300+ Ton/Ekspor', label: 'Volume Ekspor Rata-Rata per Shipment' },
  ];

  return (
    <section id={id} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Kapasitas Produksi & Jangkauan Ekspor"
          subtitle="Skala operasi kami dirancang untuk memenuhi permintaan global dengan kualitas terjaga."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {infographicData.map((item, index) => (
            <InfographicCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KapasitasSection;