import { unsplash } from "@/lib/unsplash";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "landscape-design",
    title: "Landscape Design & Masterplanning",
    shortDescription:
      "Architectural landscape layouts, sun path studies, and tailored plant palettes before touching the soil.",
    description:
      "As featured across @higardencamp, every great garden begins on the drafting board. We map your Kerala plot's natural slopes, monsoon drainage lines, sunlight angles, and family lifestyle. You receive detailed renders, hardscape elevations, and precise botanical lists so you can visualize your sanctuary before work begins.",
    icon: "PenTool",
    image: {
      src: unsplash("1762213382179-00725e36e061", 1200, 1400),
      alt: "Architectural garden layout and landscape design plan",
      recommendedFilename: "higarden-service-landscape-design.jpg",
    },
  },
  {
    slug: "residential-landscaping",
    title: "Bespoke Villa Landscaping",
    shortDescription:
      "Complete living Kerala villa gardens, layered tropical canopies, and lush greenery tuned for monsoon & summer.",
    description:
      "From contemporary Kochi villas to traditional homes across Palakkad, Thrissur, and Calicut, we build rich, multi-tiered gardens. We layer majestic canopy trees, ornamental understories, flowering tropicals, and stepping pathways designed to look lush and vibrant 365 days a year.",
    icon: "Palmtree",
    image: {
      src: "/images/services/kerala-residential-landscaping.jpg",
      alt: "Luxury Kerala residential villa landscaping with manicured lawn, layered tropical borders, and stone pathway",
      recommendedFilename: "higarden-service-residential-landscaping.jpg",
    },
  },
  {
    slug: "garden-setup",
    title: "Lawn Turfing & Carpet Grass",
    shortDescription:
      "Premium Mexican grass, Bermuda, and shade-tolerant turf installation with precision laterite soil grading.",
    description:
      "The most asked question on our social media: how to get a velvety, weed-free lawn in Kerala. We handle entire site prep—deep weed clearing, organic compost enrichment, laser leveling, drainage slope grading, and roll-out installation of acclimated Mexican carpet grass or Pearl grass.",
    icon: "Home",
    image: {
      src: "/images/social/ig-lawn-turfing.jpg",
      alt: "Kerala villa lawn turfing and Mexican carpet grass installation on red laterite soil",
      recommendedFilename: "higarden-service-lawn-turfing.jpg",
    },
  },
  {
    slug: "vertical-gardens",
    title: "Vertical Living Green Walls",
    shortDescription:
      "Space-saving living walls with automated micro-drip irrigation for boundary walls, balconies, and cafes.",
    description:
      "Maximize your green footprint without sacrificing floor space. Our engineered vertical wall modules feature UV-resistant frames, lightweight aerated soil mediums, and timer-automated drip irrigation. Ideal for modern villa boundary walls, compact courtyards, and trendy commercial facades.",
    icon: "Layers",
    image: {
      src: "/images/social/vertical-garden-wall.jpg",
      alt: "Lush residential vertical living green wall with automated micro-drip irrigation — by HiGarden",
      recommendedFilename: "higarden-service-vertical-gardens.jpg",
    },
  },
  {
    slug: "indoor-plants",
    title: "Courtyard & Indoor Plant Styling",
    shortDescription:
      "Traditional Nadumuttam revival and air-purifying indoor plant setups tailored to your home's natural light.",
    description:
      "Bring Kerala's timeless architectural green spaces to life. We design skylit courtyards, pebble-bordered Nadumuttam sanctuaries, and indoor potted collections using exotic philodendrons, aglaonemas, and palms that genuinely thrive in your home's humidity and light conditions.",
    icon: "Flower2",
    image: {
      src: "/images/social/indoor-plants-staircase.jpg",
      alt: "Curated indoor tropical plants arranged in stylish pots along Kerala villa staircase — by HiGarden",
      recommendedFilename: "higarden-service-indoor-plants.jpg",
    },
  },
  {
    slug: "garden-renovation",
    title: "Garden Renovation & Makeovers",
    shortDescription:
      "Reviving tired, weed-choked, or poorly draining Kerala plots into modern, easy-to-maintain sanctuaries.",
    description:
      "Have an overgrown garden or a builder's bare laterite yard? We preserve mature specimen trees, rebuild damaged pathways, eliminate drainage chokepoints, and re-landscape the entire outdoor space in organized phases with fresh sod, stone hardscape, and tropical plants.",
    icon: "Hammer",
    image: {
      src: unsplash("1778411144698-7cf3bdae97a0", 1200, 1400),
      alt: "Winding stone path through a freshly renovated lush garden",
      recommendedFilename: "higarden-service-garden-renovation.jpg",
    },
  },
  {
    slug: "garden-maintenance",
    title: "Scheduled Garden Maintenance",
    shortDescription:
      "Expert pruning, organic fertilization, lawn mowing, and monsoon health checkups by trained horticulturists.",
    description:
      "A great garden needs ongoing care. Our maintenance crew provides scheduled pruning, lawn edging, organic pest deterrence, soil nourishment, and pre-monsoon root treatments so your outdoor living space stays as immaculate as day one.",
    icon: "Scissors",
    image: {
      src: unsplash("1621958206813-2e9c0441c5b0", 1200, 1400),
      alt: "Gardener tending and pruning lush garden plants in Kerala",
      recommendedFilename: "higarden-service-garden-maintenance.jpg",
    },
  },
  {
    slug: "landscape-consultation",
    title: "Site Consultation & Plant Advisory",
    shortDescription:
      "On-site advisory across Kerala for homeowners, builders, and architects at the construction or planning stage.",
    description:
      "Invite our senior horticulturists to your plot anywhere in Kerala. We analyze soil permeability, identify shade zones, recommend climate-resilient species, and guide builders on civil integration before paving and masonry begin.",
    icon: "Compass",
    image: {
      src: "/images/services/kerala-landscape-consultation.jpg",
      alt: "Architectural Kerala villa landscape site plan, drafting tools, and material palette on consultation table",
      recommendedFilename: "higarden-service-landscape-consultation.jpg",
    },
  },
];
