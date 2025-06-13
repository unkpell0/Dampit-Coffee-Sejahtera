
import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { SectionProps } from '../types';

const WhatsAppIcon: React.FC<{className?: string}> = ({className}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z"/>
  </svg>
);

const HeroSection: React.FC<SectionProps> = ({ id }) => {
  const heroImageUrl = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1920&h=1080&bri=-5&con=3&sat=-30&fm=webp";

  return (
    <section 
      id={id} 
      className="min-h-[80vh] sm:min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center pt-[60px] md:pt-[80px]" 
      style={{ 
        backgroundImage: `url('${heroImageUrl}')`,
        backgroundAttachment: 'fixed' 
      }}
      role="banner"
      aria-labelledby="hero-main-headline"
    >
      {/* Enhanced warm color overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, rgba(44, 24, 16, 0.7), rgba(60, 30, 15, 0.55), rgba(20,10,5,0.35))'
        }}
      ></div>
      
      {/* Content Container: centers the card. */}
      <div className="relative z-10 w-full flex flex-col items-center px-4">
        
        {/* Glassmorphism Card: refined for elegance */}
        <div 
            className="w-11/12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 
                        bg-black/25 backdrop-blur-2xl
                        border border-white/15
                        rounded-3xl 
                        px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10
                        shadow-2xl text-center
                        animate-hero-card-enter 
                        hover:border-white/20 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]
                        transition-all duration-300 ease-out 
                        "
        >
          <h1 
            id="hero-main-headline"
            className="text-4xl leading-tight sm:text-5xl lg:text-6xl font-poppins font-extrabold text-white mb-4 animate-hero-main-title"
          >
            Kopi Premium Dampit
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl font-poppins font-semibold text-white mb-4 animate-hero-main-hook"
          >
            Pilihan Utama untuk <span className="text-coffee-highlight">Ekspor Kopi Istimewa.</span>
          </p>
          <p 
            className="text-lg sm:text-xl font-inter font-light text-white/90 mb-4 animate-hero-location-subtitle"
          >
            Langsung dari Lereng Gunung Semeru
          </p>
          <p 
            className="text-sm sm:text-base font-inter text-white/80 mb-8 animate-hero-tagline"
          >
            Dipercaya 15+ negara • Kualitas ekspor terjamin
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mx-auto space-x-3 bg-gradient-to-br from-brand-whatsapp to-green-600 text-white font-poppins font-semibold px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl text-base sm:text-lg hover:scale-105 shadow-[0_10px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_14px_35px_rgba(37,211,102,0.45)] transition-all duration-300 animate-hero-cta-button"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Konsultasi Sekarang</span>
          </a>

          {/* Trust Signals: refined and spaced out */}
          <div 
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-10 text-white/80 animate-hero-trust-badges"
          >
            <span className="flex items-center text-xs sm:text-sm" title="Sertifikat Organik">
              <span role="img" aria-label="Sertifikat Organik" className="mr-1.5 text-lg text-brand-gold">🏆</span> Sertifikasi Organik
            </span>
            <span className="flex items-center text-xs sm:text-sm" title="Ekspor ke 15+ Negara">
              <span role="img" aria-label="Ekspor Global" className="mr-1.5 text-lg text-sky-300">🌍</span> 15+ Negara
            </span>
            <span className="flex items-center text-xs sm:text-sm" title="Kualitas Premium Terjamin">
              <span role="img" aria-label="Kualitas Premium" className="mr-1.5 text-lg text-amber-300">⭐</span> Kualitas Premium
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
