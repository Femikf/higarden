import { unsplash } from "@/lib/unsplash";
import type { GalleryCategory, GalleryImage } from "@/types";

export const galleryCategories: { value: GalleryCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "landscaping", label: "Landscaping" },
  { value: "indoor-plants", label: "Indoor Plants" },
  { value: "vertical-gardens", label: "Vertical Gardens" },
  { value: "hardscape", label: "Hardscape" },
  { value: "water-features", label: "Water Features" },
];

const entries: {
  id: string;
  category: GalleryCategory;
  photoId: string;
  alt: string;
  aspect: string;
}[] = [
  { id: "g01", category: "landscaping", photoId: "1775667447799-14acb2dae9da", alt: "Tropical backyard pool framed by palm trees", aspect: "aspect-[4/5]" },
  { id: "g02", category: "water-features", photoId: "1761024300156-aff4bec70b6a", alt: "Ornate stone fountain in a lush garden", aspect: "aspect-[3/4]" },
  { id: "g03", category: "indoor-plants", photoId: "1660327413070-c771d88ab7fe", alt: "Bright room styled with a collection of potted plants", aspect: "aspect-square" },
  { id: "g04", category: "vertical-gardens", photoId: "1662915029099-e285648c0534", alt: "Window framed by cascading green vines", aspect: "aspect-[4/5]" },
  { id: "g05", category: "hardscape", photoId: "1778830355177-15370bc8e235", alt: "Stone pathway leading through manicured hedges", aspect: "aspect-[4/3]" },
  { id: "g06", category: "landscaping", photoId: "1773908063192-76abeed57162", alt: "Lush garden with stone walls and layered trees", aspect: "aspect-[3/4]" },
  { id: "g07", category: "indoor-plants", photoId: "1617202009609-74a52df21011", alt: "Small potted plant styled on a wooden table", aspect: "aspect-[4/5]" },
  { id: "g08", category: "water-features", photoId: "1761024300151-eed15857ea31", alt: "Ornate tiered fountain in a lush garden setting", aspect: "aspect-square" },
  { id: "g09", category: "hardscape", photoId: "1782914581863-5ac1cb015808", alt: "Stone terracing through a sunlit tropical garden", aspect: "aspect-[4/5]" },
  { id: "g10", category: "landscaping", photoId: "1766937754720-4d30de201fd1", alt: "Modern home surrounded by lush tropical foliage", aspect: "aspect-[4/3]" },
  { id: "g11", category: "vertical-gardens", photoId: "1780369088387-2557882d8aea", alt: "Living wall beneath a circular skylight", aspect: "aspect-[3/4]" },
  { id: "g12", category: "indoor-plants", photoId: "1743079415084-cecadff599ff", alt: "Potted geraniums styled on a wooden shelf", aspect: "aspect-square" },
  { id: "g13", category: "landscaping", photoId: "1653129410058-74cb0ac2ee48", alt: "Marigold flowers blooming in a garden bed", aspect: "aspect-[4/5]" },
  { id: "g14", category: "hardscape", photoId: "1759390304699-5c389476ca80", alt: "Stone path lined with ferns and purple flowers", aspect: "aspect-[4/3]" },
  { id: "g15", category: "water-features", photoId: "1704775721959-dd68315cc5d5", alt: "Garden fountain surrounded by lush planting", aspect: "aspect-[4/5]" },
  { id: "g16", category: "landscaping", photoId: "1679407509869-95d525d7caed", alt: "Garden bed dense with potted plants and flowers", aspect: "aspect-square" },
  { id: "g17", category: "indoor-plants", photoId: "1584109409244-cc0ba316ee1a", alt: "Potted plant styled on a white cabinet", aspect: "aspect-[3/4]" },
  { id: "g18", category: "vertical-gardens", photoId: "1594080051162-74b97d619668", alt: "Green and yellow foliage on a building facade", aspect: "aspect-[4/5]" },
];

export const galleryImages: GalleryImage[] = entries.map((entry) => ({
  id: entry.id,
  category: entry.category,
  categoryLabel:
    galleryCategories.find((c) => c.value === entry.category)?.label ?? entry.category,
  image: {
    src: unsplash(entry.photoId, 1000),
    alt: entry.alt,
    recommendedFilename: `higarden-gallery-${entry.id}-${entry.category}.jpg`,
  },
  aspectClass: entry.aspect,
}));
