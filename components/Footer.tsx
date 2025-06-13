
import React from 'react';
import { COMPANY_ADDRESS, COMPANY_EMAIL } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // Updated navLinks to match the main navigation
  const navLinks = [
    { href: "#hero", name: "Beranda" },
    { href: "#profil", name: "Profil Kami" },
    { href: "#produk", name: "Produk" }, // Changed
    { href: "#layanan", name: "Layanan" }, // Added
    { href: "#sertifikasi", name: "Sertifikasi" },
    { href: "#kontak", name: "Kontak" },
  ];

  return (
    <footer className="bg-coffee-dark text-gray-400 py-16 md:py-20 font-inter">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center md:text-left">
          
          <div className="lg:col-span-2">
            <a href="#hero" className="font-poppins text-xl font-semibold text-white mb-4 inline-block hover:text-coffee-accent transition-colors duration-200">
              CV. Dampit Coffee Sejahtera
            </a>
            <p className="text-sm mb-2">{COMPANY_ADDRESS}</p>
            <p className="text-sm">
              Email: <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-coffee-accent transition-colors">{COMPANY_EMAIL}</a>
            </p>
          </div>

          <div>
            <h5 className="font-poppins text-lg font-semibold text-white mb-4">Navigasi Cepat</h5>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-coffee-accent transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-poppins text-lg font-semibold text-white mb-4">Informasi Legal</h5>
             <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-coffee-accent transition-colors duration-200" aria-label="Kebijakan Privasi (Contoh)">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-coffee-accent transition-colors duration-200" aria-label="Syarat & Ketentuan (Contoh)">Syarat & Ketentuan</a></li>
              <li><a href="#sertifikasi" className="hover:text-coffee-accent transition-colors duration-200">Sertifikasi Kami</a></li>
            </ul>
          </div>

        </div>
        <div className="mt-12 md:mt-16 border-t border-gray-700 pt-10 text-center text-sm">
          <p>&copy; {currentYear} CV. Dampit Coffee Sejahtera. Semua Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="mt-1">Dirancang dengan ❤️ untuk kemajuan Ekspor Kopi Indonesia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;