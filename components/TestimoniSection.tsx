
import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps, Testimonial, Partner } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const TestimonialCard: React.FC<{ testimonial: Testimonial, index: number }> = ({ testimonial, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });
  const delayClass = `delay-${(index % 3) * 100 + 100}`;

  return (
    <div 
      ref={ref}
      className={`bg-white p-8 rounded-xl shadow-lg border-l-4 border-coffee-accent scroll-animate ${delayClass} ${isVisible ? 'is-visible' : ''}`}
    >
      <p className="text-coffee-medium font-inter italic text-base md:text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
      <p className="font-poppins font-semibold text-coffee-dark text-lg">{testimonial.author}</p>
      <p className="text-sm text-coffee-medium">{testimonial.origin}</p>
    </div>
  );
};

const PartnerLogo: React.FC<{ partner: Partner, index: number }> = ({ partner, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const delayClass = `delay-${(index % 5) * 100}`;
  
  return (
    <div 
      ref={ref}
      title={partner.name} 
      className={`h-12 md:h-16 w-36 md:w-40 flex items-center justify-center 
                  rounded-lg shadow-md
                  text-white font-semibold text-xs sm:text-sm p-2 text-center 
                  transition-all duration-300 ease-out transform hover:scale-110 
                  scroll-animate ${delayClass} ${isVisible ? 'is-visible' : ''} 
                  ${partner.bgColor ? partner.bgColor : 'bg-gray-200 text-gray-700'}`}
    >
      <span>{partner.name}</span>
    </div>
  );
};


const TestimoniSection: React.FC<SectionProps> = ({ id }) => {
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
  
  const partnerTitleRef = useRef<HTMLHeadingElement>(null);
  const isPartnerTitleVisible = useIntersectionObserver(partnerTitleRef);

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Dipercaya Importir dari 15+ Negara"
          subtitle="Kualitas dan layanan kami telah membangun kemitraan jangka panjang di seluruh dunia."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <h3 
          ref={partnerTitleRef}
          className={`text-2xl md:text-3xl font-poppins font-semibold text-coffee-dark mb-10 md:mb-12 text-center scroll-animate ${isPartnerTitleVisible ? 'is-visible' : ''}`}
        >
          Beberapa Mitra Global Kami
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-6 md:gap-y-8">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;