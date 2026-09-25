export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "facebook" | "pinterest" | "whatsapp" | "youtube";
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: {
    src: string;
    alt: string;
    recommendedFilename: string;
  };
}

export type ProjectCategory =
  | "villas"
  | "resorts"
  | "residential"
  | "commercial"
  | "vertical-gardens";

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  image: {
    src: string;
    alt: string;
    recommendedFilename: string;
  };
  aspectClass: string;
}

export type GalleryCategory =
  | "landscaping"
  | "indoor-plants"
  | "vertical-gardens"
  | "hardscape"
  | "water-features";

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: {
    src: string;
    alt: string;
    recommendedFilename: string;
  };
  aspectClass: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  avatar: {
    src: string;
    alt: string;
    recommendedFilename: string;
  };
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  cover: {
    src: string;
    alt: string;
    recommendedFilename: string;
  };
  body: string[];
}

export type PlantCategory =
  | "indoor"
  | "outdoor"
  | "ornamental"
  | "flowering"
  | "landscaping";

export interface NurseryPlant {
  id: string;
  name: string;
  scientificName?: string;
  category: PlantCategory;
  categoryLabel: string;
  description: string;
  careLevel: "Easy Care" | "Moderate" | "Thriving";
  light: string;
  idealFor: string;
  image: {
    src: string;
    alt: string;
    recommendedFilename: string;
  };
}

export interface NurseryServiceItem {
  title: string;
  description: string;
  icon: string;
}
