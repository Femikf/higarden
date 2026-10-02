import { unsplash } from "@/lib/unsplash";
import type { NurseryPlant, NurseryServiceItem, PlantCategory } from "@/types";

export const nurseryCategories: { value: PlantCategory | "all"; label: string }[] = [
  { value: "all", label: "All Plants" },
  { value: "indoor", label: "Indoor Plants" },
  { value: "outdoor", label: "Outdoor Plants" },
  { value: "ornamental", label: "Ornamental" },
  { value: "flowering", label: "Flowering" },
  { value: "landscaping", label: "Landscaping" },
];

export const nurseryServices: NurseryServiceItem[] = [
  {
    title: "Plant Consultation",
    description:
      "Expert guidance on plant selection based on your room's natural sunlight, Kerala humidity, and lifestyle.",
    icon: "Compass",
  },
  {
    title: "Landscaping Plant Supply",
    description:
      "Wholesale and bulk supply of mature palms, native hedges, ground covers, and exotic specimens for villas and projects.",
    icon: "Truck",
  },
  {
    title: "Acclimatized Varieties",
    description:
      "Every plant from our Palakkad nursery is hardened to Kerala's monsoon cycle and hot summers before delivery.",
    icon: "ShieldCheck",
  },
  {
    title: "Custom Soil & Potting",
    description:
      "Aerated organic soil mixes, perlite, and nutrient blends specially formulated for tropical root health.",
    icon: "Sprout",
  },
];

export const nurseryPlants: NurseryPlant[] = [
  {
    id: "monstera-deliciosa",
    name: "Swiss Cheese Plant",
    scientificName: "Monstera Deliciosa",
    category: "indoor",
    categoryLabel: "Indoor Plants",
    description:
      "Iconic split leaves that thrive in bright indirect light. Perfectly suited for Kerala living rooms and verandahs.",
    careLevel: "Easy Care",
    light: "Bright Indirect Light",
    idealFor: "Living Rooms & Courtyards",
    image: {
      src: unsplash("1614594975525-e45190c55d0b", 800, 900),
      alt: "Lush green Monstera deliciosa plant in a minimalist planter",
      recommendedFilename: "higarden-nursery-monstera.jpg",
    },
  },
  {
    id: "areca-palm",
    name: "Golden Cane Palm",
    scientificName: "Dypsis Lutescens",
    category: "outdoor",
    categoryLabel: "Outdoor Plants",
    description:
      "Graceful arching fronds providing instant tropical volume and privacy screening along villa boundary walls.",
    careLevel: "Easy Care",
    light: "Full Sun to Semi-Shade",
    idealFor: "Lawns & Boundary Borders",
    image: {
      src: "/images/nursery/higarden-nursery-areca-palm.jpg",
      alt: "Lush Golden Cane Palm cluster with golden-yellow canes and arching feathery fronds",
      recommendedFilename: "higarden-nursery-areca-palm.jpg",
    },
  },
  {
    id: "bird-of-paradise",
    name: "White Bird of Paradise",
    scientificName: "Strelitzia Nicolai",
    category: "ornamental",
    categoryLabel: "Ornamental Plants",
    description:
      "Dramatic architectural foliage resembling banana leaves. The quintessential statement plant for modern villas.",
    careLevel: "Moderate",
    light: "Bright Light / Gentle Sun",
    idealFor: "Entryways & Poolside Terraces",
    image: {
      src: unsplash("1600860927886-003375c14fb3", 800, 900),
      alt: "Vibrant orange and blue bird of paradise flower in bloom",
      recommendedFilename: "higarden-nursery-bird-of-paradise.jpg",
    },
  },
  {
    id: "plumeria-frangipani",
    name: "Kerala Frangipani",
    scientificName: "Plumeria Rubra",
    category: "flowering",
    categoryLabel: "Flowering Plants",
    description:
      "Fragrant blooms with sculptural branches. A timeless Kerala courtyard favorite that blooms profusely during sunshine.",
    careLevel: "Easy Care",
    light: "Full Tropical Sun",
    idealFor: "Centerpiece Courtyards & Lawns",
    image: {
      src: unsplash("1781753826262-d4ea45a509b3", 800, 900),
      alt: "Flowering white and yellow Plumeria Frangipani blossom on lush green branches",
      recommendedFilename: "higarden-nursery-frangipani.jpg",
    },
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus Lyrata",
    category: "indoor",
    categoryLabel: "Indoor Plants",
    description:
      "Broad violin-shaped leaves with heavy substance. Adds high-impact architectural greenery to double-height spaces.",
    careLevel: "Moderate",
    light: "Bright Filtered Light",
    idealFor: "Foyers & Well-lit Offices",
    image: {
      src: unsplash("1545241047-6083a3684587", 800, 900),
      alt: "Fiddle leaf fig plant with large glossy violin-shaped leaves",
      recommendedFilename: "higarden-nursery-fiddle-leaf.jpg",
    },
  },
  {
    id: "travellers-palm",
    name: "Traveller's Palm",
    scientificName: "Ravenala Madagascariensis",
    category: "landscaping",
    categoryLabel: "Landscaping Plants",
    description:
      "Striking symmetrical fan-shaped canopy. A breathtaking focal point for large landscaped gardens and villa entrances.",
    careLevel: "Thriving",
    light: "Full Sun",
    idealFor: "Feature Landscaping & Drives",
    image: {
      src: "/images/nursery/higarden-nursery-travellers-palm.jpg",
      alt: "Architectural Traveller's Palm with majestic symmetrical fan canopy in Kerala garden",
      recommendedFilename: "higarden-nursery-travellers-palm.jpg",
    },
  },
  {
    id: "bougainvillea-cascade",
    name: "Dwarf Bougainvillea",
    scientificName: "Bougainvillea Glabra",
    category: "flowering",
    categoryLabel: "Flowering Plants",
    description:
      "Vibrant bursts of magenta and coral blooms throughout the year. Drought-resilient and heat-loving.",
    careLevel: "Easy Care",
    light: "Direct Sun",
    idealFor: "Pergolas, Balconies & Terraces",
    image: {
      src: "/images/nursery/higarden-nursery-bougainvillea.jpg",
      alt: "Vibrant cascading magenta flowering dwarf bougainvillea in tropical Kerala sunlight",
      recommendedFilename: "higarden-nursery-bougainvillea.jpg",
    },
  },
  {
    id: "heliconia-rostrata",
    name: "Hanging Lobster Claw",
    scientificName: "Heliconia Rostrata",
    category: "ornamental",
    categoryLabel: "Ornamental Plants",
    description:
      "Exotic pendulous blooms in vivid scarlet and yellow. Essential for authentic Kerala resort-style tropical borders.",
    careLevel: "Moderate",
    light: "Partial to Full Sun",
    idealFor: "Water Garden Borders & Shaded Paths",
    image: {
      src: "/images/nursery/higarden-nursery-heliconia.jpg",
      alt: "Vibrant cascading Heliconia Rostrata hanging lobster claw bloom with red and yellow bracts",
      recommendedFilename: "higarden-nursery-heliconia.jpg",
    },
  },
];
