
import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { SectionProps } from '../types';

const WhatsAppIcon: React.FC<{className?: string}> = ({className}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" /* Base width, overridden by className */
    height="20" /* Base height, overridden by className */
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
      className="min-h-screen sm:min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center pt-[50px] md:pt-[70px]"
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
      <div className="relative z-10 w-full flex flex-col items-center px-3">
        
        {/* Glassmorphism Card: refined for elegance */}
        <div 
            className="w-11/12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
                        bg-black/25 backdrop-blur-2xl
                        border border-white/15
                        rounded-2xl
                        px-4 py-4 sm:px-5 sm:py-6 md:px-6 md:py-8 
                        shadow-xl text-center 
                        animate-hero-card-enter 
                        hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] 
                        transition-all duration-300 ease-out 
                        "
        >
          <h1 
            id="hero-main-headline"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-extrabold text-white leading-snug mb-2 sm:mb-3 animate-hero-main-title"
          >
            Kopi Premium Dampit
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl font-poppins font-semibold text-white mb-2 sm:mb-3 animate-hero-main-hook"
          >
            Pilihan Utama untuk <span className="text-coffee-highlight">Ekspor Kopi Istimewa.</span>
          </p>
          <p 
            className="text-[11px] sm:text-xs font-inter text-white/80 mb-5 sm:mb-6 animate-hero-tagline"
          >
            Dipercaya 15+ negara • Kualitas ekspor terjamin
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mx-auto space-x-2 sm:space-x-2.5 bg-gradient-to-br from-brand-whatsapp to-green-600 text-white font-poppins font-semibold px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl text-xs sm:text-sm hover:scale-105 shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition-all duration-300 animate-hero-cta-button"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
            <span>Konsultasi Sekarang</span>
          </a>

          {/* Trust Signals: refined and spaced out */}
          <div 
            className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-5 gap-y-2 sm:gap-y-2.5 mt-6 sm:mt-8 text-white/80 animate-hero-trust-badges"
          >
            <span className="flex items-center text-[10px] sm:text-[11px]" title="Sertifikat Organik"> 
              <span role="img" aria-label="Sertifikat Organik" className="mr-1 text-sm sm:text-base text-brand-gold">🏆</span> Sertifikasi Organik
            </span>
            <span className="flex items-center text-[10px] sm:text-[11px]" title="Ekspor ke 15+ Negara"> 
              <span role="img" aria-label="Ekspor Global" className="mr-1 text-sm sm:text-base text-sky-300">🌍</span> 15+ Negara
            </span>
            <span className="flex items-center text-[10px] sm:text-[11px]" title="Kualitas Premium Terjamin"> 
              <span role="img" aria-label="Kualitas Premium" className="mr-1 text-sm sm:text-base text-amber-300">⭐</span> Kualitas Premium
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
