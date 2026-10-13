"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { site } from "@/constants/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const instagramPosts = [
  {
    image: "/images/social/customer-courtyard-pond.jpg",
    alt: "Client villa courtyard with natural koi pond, lawn stepping stones, and tropical landscaping by HiGarden",
    category: "Client Feature",
    tag: "#ClientDiaries",
    caption: "Thank you @higardencamp — Villa courtyard with natural koi pond & stepping stones",
    likes: "142",
  },
  {
    image: "/images/social/vertical-garden-wall.jpg",
    alt: "Engineered vertical living green wall installed at Kerala villa compound by HiGarden",
    category: "Living Walls",
    tag: "#VerticalGardens",
    caption: "Engineered automated micro-drip living wall with ferns & tropical foliage",
    likes: "98",
  },
  {
    image: "/images/social/nursery-farm-pathway.jpg",
    alt: "HiGarden plant nursery red laterite pathway with green shade netting in Katampazhipuram, Palakkad",
    category: "Palakkad Farm",
    tag: "#FarmToDoorstep",
    caption: "Red laterite pathways & shade-netted tropical specimens at Katampazhipuram",
    likes: "115",
  },
  {
    image: "/images/social/ixora-collection.jpg",
    alt: "Vibrant red, orange, and yellow potted Ixora plants ready at HiGarden nursery",
    category: "Nursery Stock",
    tag: "#FloweringPlants",
    caption: "Vibrant red, orange & yellow Ixoras hardened for Kerala tropical sunshine",
    likes: "86",
  },
  {
    image: "/images/social/seedling-propagation.jpg",
    alt: "HiGarden team member propagating tropical seedlings in nursery trays",
    category: "Behind The Scenes",
    tag: "#Propagation",
    caption: "Time spent serving in your garden is never wasted — propagating seedlings",
    likes: "94",
  },
  {
    image: "/images/social/founder-watering.jpg",
    alt: "HiGarden team watering plants at JCET Techfest community botanical exhibition",
    category: "Community Event",
    tag: "#JCETTechfest",
    caption: "Sharing gardening knowledge with students & homeowners across Palakkad",
    likes: "107",
  },
  {
    image: "/images/social/begonia-rex.jpg",
    alt: "Rex Begonia with vibrant patterned pink and burgundy foliage in ceramic pot",
    category: "Festive Drop",
    tag: "#HappyOnam",
    caption: "Happy Onam! Rex Begonia with dramatic foliage for bright shaded corners",
    likes: "89",
  },
  {
    image: "/images/social/indoor-plants-staircase.jpg",
    alt: "Indoor potted plants curated for architectural staircase light in Kerala villa",
    category: "Indoor Styling",
    tag: "#IndoorPlants",
    caption: "Architectural staircase plant styling adapted to Kerala home natural light",
    likes: "78",
  },
];

export function InstagramFeed() {
  return (
    <section className="bg-[#f8f6ed] py-20 lg:py-28 border-t border-higarden-soft" aria-labelledby="instagram-heading">
      <div className="container-hg flex flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            id="instagram-heading"
            eyebrow="Sharing Knowledge Everyday"
            title={
              <span>
                Real Moments From{" "}
                <span className="text-higarden-primary">@higardencamp.</span>
              </span>
            }
            description="Direct from our Instagram & Facebook: daily Palakkad farm drops, actual client transformations, propagation tips, and Kerala garden projects."
            align="center"
            className="max-w-2xl"
          />
        </div>

        {/* 8-Grid Instagram Showcase */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 lg:grid-cols-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "60px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View HiGarden post: ${post.alt}`}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-forest-900 shadow-sm border border-higarden-soft/80"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(min-width: 1280px) 280px, (min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Top Category Badge */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="rounded-full bg-black/60 backdrop-blur-xs px-2.5 py-1 text-[0.6rem] font-bold text-white shadow-sm border border-white/10">
                  {post.category}
                </span>
              </div>

              {/* Bottom Subtle Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-white text-[0.65rem] transition-opacity duration-200 group-hover:opacity-0">
                <span className="truncate max-w-[70%] font-medium text-white/90">{post.tag}</span>
                <span className="shrink-0 font-bold text-higarden-lime">&hearts; {post.likes}</span>
              </div>

              {/* Full Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-forest-950/85 p-3.5 text-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100 z-20">
                <FaInstagram className="size-6 text-higarden-bright" />
                <span className="text-[0.7rem] font-extrabold text-white uppercase tracking-wider">
                  {post.category}
                </span>
                <p className="text-[0.68rem] text-white/90 line-clamp-3 leading-snug px-1">
                  &ldquo;{post.caption}&rdquo;
                </p>
                <div className="flex items-center gap-2 pt-1 text-[0.65rem]">
                  <span className="font-semibold text-higarden-lime">{post.tag}</span>
                  <span className="text-white/60">&bull;</span>
                  <span className="text-white/80 font-bold">&hearts; {post.likes} likes</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Follow Buttons (Instagram + Facebook) */}
        <div className="flex flex-col items-center justify-center gap-4 pt-2">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-forest-900 px-7 py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:bg-higarden-primary hover:shadow-[0_8px_25px_rgba(7,91,42,0.3)] hover:scale-105"
            >
              <FaInstagram className="size-4 text-higarden-bright" />
              <span>Follow @higardencamp</span>
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-forest-800/20 bg-white px-6 py-3 text-xs sm:text-sm font-bold text-forest-900 shadow-sm transition-all duration-300 hover:border-higarden-primary hover:text-higarden-primary hover:scale-105"
            >
              <FaFacebook className="size-4 text-[#1877F2]" />
              <span>Facebook @higardenclub</span>
            </a>
          </div>
          <p className="text-xs text-higarden-muted">
            Sharing Knowledge Everyday &bull; Kerala-Wide Delivery &amp; Landscape Execution
          </p>
        </div>
      </div>
    </section>
  );
}
