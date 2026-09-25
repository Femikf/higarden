"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { unsplash } from "@/lib/unsplash";
import { site } from "@/constants/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const instagramPosts = [
  {
    image: unsplash("1721989519334-40923a0ee1c0", 600, 600),
    alt: "Contemporary villa pool landscaping in Kochi",
    category: "Landscaping Project",
    tag: "#KeralaGardens",
  },
  {
    image: unsplash("1612492114124-ede97dcb6a40", 600, 600),
    alt: "Tropical banana foliage and lush plant selection",
    category: "Palakkad Nursery",
    tag: "#PlantLovers",
  },
  {
    image: unsplash("1765421529635-ac766cf4229a", 600, 600),
    alt: "Completed residential garden renovation in Thrissur",
    category: "Completed Garden",
    tag: "#Transformation",
  },
  {
    image: unsplash("1621958206813-2e9c0441c5b0", 600, 600),
    alt: "HiGarden team pruning and caring for monsoon plants",
    category: "Gardening Tips",
    tag: "#MonsoonCare",
  },
  {
    image: unsplash("1774440602181-a8f2d598c04f", 600, 600),
    alt: "Vertical living green wall installed at a modern cafe",
    category: "Vertical Garden",
    tag: "#GreenWall",
  },
  {
    image: unsplash("1677559401235-fe6d5ba9a4df", 600, 600),
    alt: "Traditional Kerala courtyard garden with stone steps",
    category: "Courtyard Landscape",
    tag: "#TropicalLiving",
  },
];

export function InstagramFeed() {
  return (
    <section className="bg-[#f8f6ed] py-20 lg:py-28 border-t border-higarden-soft" aria-labelledby="instagram-heading">
      <div className="container-hg flex flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            id="instagram-heading"
            eyebrow="Follow Our Journey"
            title={
              <span>
                Growing With{" "}
                <span className="text-higarden-primary">HiGarden.</span>
              </span>
            }
            description="Behind the scenes across Kerala: site builds, exotic nursery plants, daily gardening tips, and completed outdoor spaces."
            align="center"
            className="max-w-2xl"
          />
        </div>

        {/* 6-Grid Instagram Showcase */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              variants={fadeUp}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View HiGarden Instagram post: ${post.alt}`}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-forest-900 shadow-sm"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-forest-950/75 p-3 text-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                <FaInstagram className="size-6 text-higarden-bright" />
                <span className="text-[0.68rem] font-bold text-white uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-[0.62rem] font-semibold text-higarden-lime">
                  {post.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Instagram Follow Button */}
        <div className="flex flex-col items-center justify-center gap-3 pt-2">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-forest-900 px-8 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:bg-higarden-primary hover:shadow-[0_8px_25px_rgba(7,91,42,0.3)] hover:scale-105"
          >
            <FaInstagram className="size-4 text-higarden-bright" />
            <span>Follow @higardencamp</span>
          </a>
          <p className="text-xs text-higarden-muted">
            Join 10k+ plant and garden lovers across Kerala &bull; Also on Facebook{" "}
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-higarden-primary hover:underline"
            >
              @higardenclub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
