
export interface NavLink {
  id: string;
  name: string;
}

export interface SectionProps {
  id: string;
}

export interface KeunggulanItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProdukItem {
  icon: string;
  name: string;
  details?: string[];
}

export interface LayananItem {
  icon: string;
  name: string;
}

export interface SertifikasiItem {
  name: string;
  icon?: string; // Optional: could be a simple checkmark or text
}

export interface Testimonial {
  quote: string;
  author: string;
  origin: string;
}

export interface Partner {
  name: string;
  logoUrl?: string; // Made optional
  bgColor?: string; // Added optional background color
}

export interface InfographicItem {
  icon: string;
  value: string;
  label: string;
}