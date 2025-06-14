import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps } from '../types';
import { WHATSAPP_LINK, COMPANY_EMAIL, COMPANY_ADDRESS, GOOGLE_MAPS_EMBED_URL, WHATSAPP_NUMBER } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const KontakSection: React.FC<SectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef);

  // Removed infoRef, mapRef, isInfoVisible, isMapVisible

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 ${isSectionVisible ? 'section-in-view' : ''}`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Mari Terhubung & Berkolaborasi"
          subtitle="Kami siap membantu Anda menemukan solusi kopi terbaik. Hubungi kami untuk diskusi lebih lanjut."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div 
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6 scroll-animate child-delay-100" // Added child-delay
          >
            <h3 className="text-xl md:text-2xl font-poppins font-semibold text-coffee-dark mb-1.5">Informasi Kontak Kami</h3>
            
            <div className="flex items-center space-x-3 group">
              <div className="text-2xl text-brand-whatsapp p-1.5 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                <span role="img" aria-label="WhatsApp">📱</span>
              </div>
              <div>
                <p className="font-poppins text-coffee-dark text-base">WhatsApp Business:</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-coffee-medium hover:text-coffee-accent transition-colors text-sm">
                  +{WHATSAPP_NUMBER.slice(0,2)} {WHATSAPP_NUMBER.slice(2,5)}-{WHATSAPP_NUMBER.slice(5,9)}-{WHATSAPP_NUMBER.slice(9)}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 group">
              <div className="text-2xl text-coffee-accent p-1.5 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                <span role="img" aria-label="Email">📧</span>
              </div>
              <div>
                <p className="font-poppins text-coffee-dark text-base">Alamat Email:</p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-coffee-medium hover:text-coffee-accent transition-colors text-sm">
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 group">
              <div className="text-2xl text-coffee-accent p-1.5 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors pt-0.5">
                 <span role="img" aria-label="Address">🏢</span>
              </div>
              <div>
                <p className="font-poppins text-coffee-dark text-base">Kantor & Gudang Pusat:</p>
                <p className="text-coffee-medium text-sm leading-relaxed">{COMPANY_ADDRESS}</p>
              </div>
            </div>
          </div>

          <div 
            className="rounded-xl shadow-lg overflow-hidden h-80 lg:h-[450px] scroll-animate child-delay-200" // Added child-delay
          >
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi CV. Dampit Coffee Sejahtera di Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontakSection;