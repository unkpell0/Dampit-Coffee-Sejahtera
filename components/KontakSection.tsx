import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { SectionProps } from '../types';
import { WHATSAPP_LINK, COMPANY_EMAIL, COMPANY_ADDRESS, GOOGLE_MAPS_EMBED_URL, WHATSAPP_NUMBER } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const KontakSection: React.FC<SectionProps> = ({ id }) => {
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const isInfoVisible = useIntersectionObserver(infoRef, { threshold: 0.2 });
  const isMapVisible = useIntersectionObserver(mapRef, { threshold: 0.2 });

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle 
          title="Mari Terhubung & Berkolaborasi"
          subtitle="Kami siap membantu Anda menemukan solusi kopi terbaik. Hubungi kami untuk diskusi lebih lanjut."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div 
            ref={infoRef}
            className={`bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-8 scroll-animate ${isInfoVisible ? 'is-visible' : ''}`}
          >
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-coffee-dark mb-2">Informasi Kontak Kami</h3>
            
            <div className="flex items-center space-x-4 group">
              <div className="text-3xl text-brand-whatsapp p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                <span role="img" aria-label="WhatsApp">📱</span>
              </div>
              <div>
                <p className="font-poppins text-coffee-dark text-lg">WhatsApp Business:</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-coffee-medium hover:text-coffee-accent transition-colors text-base">
                  +{WHATSAPP_NUMBER.slice(0,2)} {WHATSAPP_NUMBER.slice(2,5)}-{WHATSAPP_NUMBER.slice(5,9)}-{WHATSAPP_NUMBER.slice(9)}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="text-3xl text-coffee-accent p-2 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                <span role="img" aria-label="Email">📧</span>
              </div>
              <div>
                <p className="font-poppins text-coffee-dark text-lg">Alamat Email:</p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-coffee-medium hover:text-coffee-accent transition-colors text-base">
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="text-3xl text-coffee-accent p-2 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors pt-1">
                 <span role="img" aria-label="Address">🏢</span>
              </div>
              <div>
                <p className="font-poppins text-coffee-dark text-lg">Kantor & Gudang Pusat:</p>
                <p className="text-coffee-medium text-base leading-relaxed">{COMPANY_ADDRESS}</p>
              </div>
            </div>
          </div>

          <div 
            ref={mapRef}
            className={`rounded-2xl shadow-xl overflow-hidden h-96 lg:h-[500px] scroll-animate delay-200 ${isMapVisible ? 'is-visible' : ''}`}
          >
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false} // Typically better for embedded maps unless interaction is key
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