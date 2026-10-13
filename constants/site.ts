import type { NavLink, SocialLink } from "@/types";

export const site = {
  name: "HiGarden",
  tagline: "Stay green and be seen",
  motto: "Sharing Knowledge Everyday",
  mission: "Growing greener homes every day",
  subtagline: "Kerala-Specialist Landscaping & Nursery Studio • Palakkad",
  legalName: "HiGarden Landscaping & Nursery Studio",
  description:
    "HiGarden brings the passion of @higardencamp and @higardenclub to Kerala homes. Sharing daily plant knowledge, designing architectural gardens, installing lush lawns, and supplying climate-hardened nursery plants from Katampazhipuram, Palakkad.",
  url: "https://higarden.in",
  phone: "+91 89436 38384",
  phoneHref: "tel:+918943638384",
  whatsapp: "+91 89436 38384",
  whatsappHref: "https://wa.me/918943638384",
  email: "hello@higardenplants.com",
  address: "Higarden, Alangad, Katampazhipuram, Palakkad 678633, Kerala",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Katampazhipuram,Palakkad,Kerala,India&output=embed",
  foundedYear: 2014,
  instagram: "https://www.instagram.com/higardencamp/",
  instagramHandle: "@higardencamp",
  facebook: "https://www.facebook.com/higardenclub",
  facebookHandle: "@higardenclub",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/higardencamp/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/higardenclub", icon: "facebook" },
  { label: "WhatsApp", href: site.whatsappHref, icon: "whatsapp" },
];

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Landscaping", href: "/services" },
  { label: "Nursery", href: "/nursery" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export const footerLinks: NavLink[] = [
  ...mainNav,
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];
