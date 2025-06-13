
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import KeunggulanSection from './components/KeunggulanSection'; // Removed
import ProfilPerusahaanSection from './components/ProfilPerusahaanSection';
// import ProdukLayananSection from './components/ProdukLayananSection'; // Removed
import ProdukSection from './components/ProdukSection'; // Added
import LayananSection from './components/LayananSection'; // Added
import SertifikasiSection from './components/SertifikasiSection';
import GaleriSection from './components/GaleriSection';
import TestimoniSection from './components/TestimoniSection';
import KapasitasSection from './components/KapasitasSection';
import KontakSection from './components/KontakSection';
import CtaFinalSection from './components/CtaFinalSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { WHATSAPP_LINK } from './constants';
import { NavLink } from './types';

const App: React.FC = () => {
  const navLinks: NavLink[] = [
    { id: 'profil', name: 'Profil' },
    { id: 'produk', name: 'Produk' }, // Added
    { id: 'layanan', name: 'Layanan' }, // Added
    { id: 'sertifikasi', name: 'Sertifikasi' },
    { id: 'galeri', name: 'Galeri' },
    { id: 'testimoni', name: 'Testimoni' },
    { id: 'kontak', name: 'Kontak' },
  ];

  return (
    <div className="bg-[#FEFEFE] text-coffee-dark font-inter">
      <Navbar navLinks={navLinks} />
      <main>
        <HeroSection id="hero" />
        {/* <KeunggulanSection id="keunggulan" /> */} {/* Removed */}
        <ProfilPerusahaanSection id="profil" />
        {/* <ProdukLayananSection id="produk" /> */} {/* Removed, replaced by ProdukSection and LayananSection */}
        <ProdukSection id="produk" /> {/* Added */}
        <LayananSection id="layanan" /> {/* Added */}
        <SertifikasiSection id="sertifikasi" />
        <GaleriSection id="galeri" />
        <TestimoniSection id="testimoni" />
        <KapasitasSection id="kapasitas" />
        <KontakSection id="kontak" />
        <CtaFinalSection id="cta-final" />
      </main>
      <Footer />
      <WhatsAppButton whatsAppUrl={WHATSAPP_LINK} />
    </div>
  );
};

export default App;