import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps, Testimonial, Partner } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const TestimonialCard: React.FC<{ testimonial: Testimonial, index: number }> = ({ testimonial, index }) => {
  // Removed useRef, useIntersectionObserver, isVisible
  const delayClass = `child-delay-${(index % 3) * 100 + 100}`; // Renamed to child-delay-

  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee-accent scroll-animate ${delayClass}`}
    >
      <p className="text-coffee-medium font-inter italic text-sm md:text-base mb-5 leading-relaxed">"{testimonial.quote}"</p>
      <p className="font-poppins font-semibold text-coffee-dark text-base">{testimonial.author}</p>
      <p className="text-xs text-coffee-medium">{testimonial.origin}</p>
    </div>
  );
};

const PartnerLogo: React.FC<{ partner: Partner, index: number }> = ({ partner, index }) => {
  // Removed useRef, useIntersectionObserver, isVisible
  const delayClass = `child-delay-${(index % 5) * 100}`; // Renamed to child-delay-
  
  return (
    <div 
      title={partner.name} 
      className={`h-10 md:h-14 w-32 md:w-36 flex items-center justify-center 
                  rounded-md shadow 
                  text-white font-semibold text-[10px] sm:text-xs p-1.5 text-center 
                  transition-all duration-300 ease-out transform hover:scale-110 
                  scroll-animate ${delayClass} 
                  ${partner.bgColor ? partner.bgColor : 'bg-gray-200 text-gray-700'}`}
    >
      <span>{partner.name}</span>
    </div>
  );
};


const TestimoniSection: React.FC<SectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef);

  const testimonials: Testimonial[] = [
    {
      quote: "Kopi dari Dampit memiliki karakter yang unik dengan body yang full dan acidity yang balanced. Konsistensi kualitas mereka sangat baik untuk pasar specialty coffee kami di Tokyo.",
      author: "Hiroshi Tanaka",
      origin: "Green Bean Importer, Jepang"
    },
    {
      quote: "We've been sourcing from CV. Dampit Coffee Sejahtera for two years. Their professionalism and coffee quality are outstanding. Highly recommended for European roasters.",
      author: "Schmidt Müller",
      origin: "Specialty Roaster, Jerman"
    },
     {
      quote: "The private label service helped us launch our own Indonesian coffee brand successfully in the US market. The team is very supportive and the coffee is excellent. Truly a reliable partner.",
      author: "Sarah Chen",
      origin: "Coffee Brand Owner, USA"
    }
  ];

  const partners: Partner[] = [
    { name: "Global Beans Inc.", bgColor: "bg-sky-600" },
    { name: "Sakura Coffee Traders", bgColor: "bg-emerald-600" },
    { name: "Seoul Brews Co.", bgColor: "bg-amber-500" },
    { name: "EuroRoast Masters", bgColor: "bg-rose-600" },
    { name: "ASEAN Coffee Connect", bgColor: "bg-indigo-600" },
  ];
  
  // Removed partnerTitleRef and isPartnerTitleVisible as the h3 will use scroll-animate

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 ${isSectionVisible ? 'section-in-view' : ''}`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Dipercaya Importir dari 15+ Negara"
          subtitle="Kualitas dan layanan kami telah membangun kemitraan jangka panjang di seluruh dunia."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <h3 
          className="text-xl md:text-2xl font-poppins font-semibold text-coffee-dark mb-8 md:mb-10 text-center scroll-animate child-delay-100" // Added scroll-animate and child-delay
        >
          Beberapa Mitra Global Kami
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-5 sm:gap-x-6 md:gap-x-8 gap-y-5 md:gap-y-6">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;