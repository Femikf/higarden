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
    title: "Plant Selection Advisory",
    description:
      "Daily advice on choosing the exact species that match your room's natural sunlight, humidity, and airflow.",
    icon: "Compass",
  },
  {
    title: "Direct Landscape Supply",
    description:
      "Farm-direct supply of mature palms, native hedges, ground covers, and exotic specimens across Kerala.",
    icon: "Truck",
  },
  {
    title: "100% Acclimatized Farm Stock",
    description:
      "Every plant from our Katampazhipuram nursery is hardened to Kerala's monsoon deluge and hot Palakkad summers.",
    icon: "ShieldCheck",
  },
  {
    title: "Specialist Tropical Potting Mix",
    description:
      "Aerated organic soil blends with cocopeat, perlite, and bio-nutrients formulated for healthy tropical root development.",
    icon: "Sprout",
  },
];

export const nurseryPlants: NurseryPlant[] = [
  {
    id: "ixora-coccinea",
    name: "Kerala Ixora (Thechi)",
    scientificName: "Ixora Coccinea",
    category: "flowering",
    categoryLabel: "Flowering Plants",
    description:
      "Vibrant clusters of red, orange, and yellow blooms. A quintessential Kerala garden staple, fully sun-hardened at our Katampazhipuram nursery.",
    careLevel: "Easy Care",
    light: "Full Tropical Sun",
    idealFor: "Sunny Verandahs & Garden Borders",
    tag: "Farm Grown",
    careTip: "Thrives in well-draining acidic laterite soil. Water daily during dry months for prolific year-round flowering.",
    image: {
      src: "/images/social/ixora-collection.jpg",
      alt: "Potted red, orange, and yellow Ixora plants in bloom at HiGarden nursery, Palakkad",
      recommendedFilename: "higarden-nursery-ixora.jpg",
    },
  },
  {
    id: "begonia-rex",
    name: "Rex Begonia (Painted Leaf)",
    scientificName: "Begonia Rex-Cultorum",
    category: "ornamental",
    categoryLabel: "Ornamental Plants",
    description:
      "Dramatic spiral leaves in vivid shades of silver, pink, and deep burgundy. Our festive customer favorite featured on social media.",
    careLevel: "Moderate",
    light: "Bright Indirect Light",
    idealFor: "Shaded Verandahs & Coffee Tables",
    tag: "Festive Favorite",
    careTip: "Avoid water on leaves to prevent spotting. Prefers high humidity with light, airy potting mix.",
    image: {
      src: "/images/social/begonia-rex.jpg",
      alt: "Rex Begonia plant with dramatic silver and burgundy patterned foliage in pot",
      recommendedFilename: "higarden-nursery-begonia-rex.jpg",
    },
  },
  {
    id: "kokedama-selaginella",
    name: "HiGarden Moss Planter",
    scientificName: "Selaginella Kraussiana",
    category: "indoor",
    categoryLabel: "Indoor Plants",
    description:
      "Handcrafted living green moss planter in signature HiGarden white pot. Compact, peaceful, and clean for modern interiors.",
    careLevel: "Easy Care",
    light: "Filtered / Ambient Light",
    idealFor: "Workdesks, Consoles & Courtyards",
    tag: "Handcrafted",
    careTip: "Mist lightly twice weekly or bottom-water when pot feels light. Keep away from direct harsh afternoon sun.",
    image: {
      src: "/images/social/selaginella-terracotta.jpg",
      alt: "Lush green Selaginella moss planter in white ceramic pot with HiGarden emblem",
      recommendedFilename: "higarden-nursery-kokedama.jpg",
    },
  },
  {
    id: "monstera-deliciosa",
    name: "Swiss Cheese Plant",
    scientificName: "Monstera Deliciosa",
    category: "indoor",
    categoryLabel: "Indoor Plants",
    description:
      "The undisputed social media icon with split architectural leaves. Thrives in bright indirect light in Kerala living rooms and verandahs.",
    careLevel: "Easy Care",
    light: "Bright Indirect Light",
    idealFor: "Living Rooms & Verandahs",
    tag: "IG Favorite",
    careTip: "Allow the top 2 inches of soil to dry between waterings. Wipe leaves monthly to keep stomata breathing.",
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
      "Graceful arching feathery fronds providing instant tropical volume and lush privacy screening along villa boundary walls.",
    careLevel: "Easy Care",
    light: "Full Sun to Semi-Shade",
    idealFor: "Boundary Borders & Lawns",
    tag: "Privacy Screen",
    careTip: "Thrives in well-draining soil. Apply organic vermicompost every 3 months for vibrant golden-green fronds.",
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
      "Dramatic architectural foliage resembling banana leaves. The quintessential statement plant for modern luxury villas.",
    careLevel: "Moderate",
    light: "Bright Light / Gentle Sun",
    idealFor: "Entryways & Pool Terraces",
    tag: "Statement Piece",
    careTip: "Needs ample morning sun to develop large leaves. Protect from strong wind drafts to prevent leaf tears.",
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
      "Intensely fragrant blooms with sculptural branches. A timeless Kerala courtyard favorite that flowers profusely in tropical sunshine.",
    careLevel: "Easy Care",
    light: "Full Tropical Sun",
    idealFor: "Centerpiece Courtyards & Lawns",
    tag: "Fragrant Bloom",
    careTip: "Do not overwater during monsoon. Requires 6+ hours of direct Kerala sun to flower abundantly.",
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
      "Broad violin-shaped leaves with heavy substance. Adds high-impact architectural greenery to double-height Kerala living spaces.",
    careLevel: "Moderate",
    light: "Bright Filtered Light",
    idealFor: "Foyers & Double-Height Living",
    tag: "Air Purifier",
    careTip: "Keep away from direct air conditioning vents. Rotate pot quarterly for balanced, upright growth.",
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
      "Striking symmetrical fan-shaped canopy. A breathtaking focal point for large landscaped gardens, gates, and villa drives.",
    careLevel: "Thriving",
    light: "Full Tropical Sun",
    idealFor: "Feature Lawns & Driveways",
    tag: "Landmark Plant",
    careTip: "Plant with at least 8 feet clearance on either side to allow the fan canopy to spread naturally.",
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
      "Continuous bursts of intense magenta and coral blooms throughout the year. Drought-resilient, heat-loving, and hardy.",
    careLevel: "Easy Care",
    light: "Direct All-Day Sun",
    idealFor: "Pergolas, Balconies & Terraces",
    tag: "All-Year Color",
    careTip: "Prune lightly after each flowering cycle to trigger new flowering spurs. Minimal water needed once established.",
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
      "Exotic pendulous blooms in vivid scarlet and yellow. Essential for authentic Kerala resort-style tropical borders and water edges.",
    careLevel: "Moderate",
    light: "Partial to Full Sun",
    idealFor: "Water Garden Borders & Shaded Paths",
    tag: "Resort Style",
    careTip: "Loves rich, moist laterite soil with high organic matter. Cut spent stalks to ground level after flowering.",
    image: {
      src: "/images/nursery/higarden-nursery-heliconia.jpg",
      alt: "Vibrant cascading Heliconia Rostrata hanging lobster claw bloom with red and yellow bracts",
      recommendedFilename: "higarden-nursery-heliconia.jpg",
    },
  },
];
