import { unsplash } from "@/lib/unsplash";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "landscape-design",
    title: "Landscape Design",
    shortDescription:
      "Considered, architectural garden master plans built around how you live outdoors in Kerala.",
    description:
      "Every project starts on paper — site analysis, sun studies, material palettes, 3D renderings and planting plans — before a single spade touches soil. The result is a garden that reads as designed, not decorated.",
    icon: "PenTool",
    image: {
      src: unsplash("1762213382179-00725e36e061", 1200, 1400),
      alt: "Architectural garden layout and landscape design plan",
      recommendedFilename: "higarden-service-landscape-design.jpg",
    },
  },
  {
    slug: "garden-setup",
    title: "Garden Setup",
    shortDescription:
      "Complete residential and commercial garden builds, from grading and soil to the final planting.",
    description:
      "For villas, homes, and resorts, we handle the entire build — ground leveling, drainage, automated irrigation, soil amendment, hardscape and plant installation — as one coordinated project.",
    icon: "Home",
    image: {
      src: unsplash("1677559401235-fe6d5ba9a4df", 1200, 1400),
      alt: "Traditional Kerala villa garden setup with lush stone pathways and tropical trees",
      recommendedFilename: "higarden-service-garden-setup.jpg",
    },
  },
  {
    slug: "residential-landscaping",
    title: "Residential Landscaping",
    shortDescription:
      "Lush, climate-tuned private garden landscapes that turn Kerala's humidity and rainfall into an advantage.",
    description:
      "We design layered tropical plantings — canopy, understory and ground cover — engineered for Kerala's monsoon cycle so the garden looks vibrant and intentional throughout the entire year.",
    icon: "Palmtree",
    image: {
      src: unsplash("1612492114124-ede97dcb6a40", 1200, 1400),
      alt: "Lush tropical residential garden with palms and layered green foliage",
      recommendedFilename: "higarden-service-residential-landscaping.jpg",
    },
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    shortDescription:
      "Scheduled care plans that keep a finished landscape thriving, manicured, and healthy year-round.",
    description:
      "Pruning, soil nutrition, pest management, lawn mowing, and seasonal replanting on a recurring schedule — so the garden we handed over stays the garden you fell in love with.",
    icon: "Scissors",
    image: {
      src: unsplash("1621958206813-2e9c0441c5b0", 1200, 1400),
      alt: "Gardener tending and pruning lush garden plants in Kerala",
      recommendedFilename: "higarden-service-garden-maintenance.jpg",
    },
  },
  {
    slug: "vertical-gardens",
    title: "Vertical Gardens",
    shortDescription:
      "Living green walls that transform boundary walls, facades, and compact courtyards into lush focal points.",
    description:
      "Engineered living-wall systems with built-in drip irrigation and drainage, designed for compact plots, cafes, and modern villas where vertical greenery maximizes space.",
    icon: "Layers",
    image: {
      src: unsplash("1774440602181-a8f2d598c04f", 1200, 1400),
      alt: "Lush vertical living wall of layered tropical green plants",
      recommendedFilename: "higarden-service-vertical-gardens.jpg",
    },
  },
  {
    slug: "garden-renovation",
    title: "Garden Renovation",
    shortDescription:
      "Reworking tired, overgrown, or poorly-planned outdoor areas into cohesive, modern green sanctuaries.",
    description:
      "We assess what's worth preserving — mature trees, structural walls — and rebuild the rest around a fresh, practical design intent, executed smoothly in organized phases.",
    icon: "Hammer",
    image: {
      src: unsplash("1778411144698-7cf3bdae97a0", 1200, 1400),
      alt: "Winding stone path through a freshly renovated lush garden",
      recommendedFilename: "higarden-service-garden-renovation.jpg",
    },
  },
  {
    slug: "indoor-plants",
    title: "Indoor Plants & Styling",
    shortDescription:
      "Curated indoor greenery selected for your home's actual lighting conditions, not just aesthetics.",
    description:
      "We select and place indoor plant collections matched to each room's light and airflow, paired with artisanal planters and scheduled care guides.",
    icon: "Flower2",
    image: {
      src: unsplash("1612366206518-535bea7db163", 1200, 1400),
      alt: "Curated indoor plants arranged in stylish pots with tropical leaves",
      recommendedFilename: "higarden-service-indoor-plants.jpg",
    },
  },
  {
    slug: "landscape-consultation",
    title: "Landscape Consultation",
    shortDescription:
      "On-site advisory for homeowners, architects, and builders at the site planning stage.",
    description:
      "Site visits and planting/hardscape recommendations for architects and builders who want landscape integrated into the foundation from the very beginning.",
    icon: "Compass",
    image: {
      src: unsplash("1765378025272-68132af6e7e5", 1200, 1400),
      alt: "Consultants reviewing architectural site plans for a landscape project",
      recommendedFilename: "higarden-service-landscape-consultation.jpg",
    },
  },
];
