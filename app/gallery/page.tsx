import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/shared/JsonLd";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { unsplash } from "@/lib/unsplash";
import { galleryImages } from "@/constants/gallery";

export const metadata: Metadata = pageMetadata({
  title: "Gallery — Landscaping, Indoor Plants & Vertical Gardens",
  description:
    "A visual gallery of HiGarden's landscaping, indoor plant styling, vertical gardens, hardscape and water feature work across Kerala.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])}
      />

      <section className="relative flex h-[55svh] min-h-[380px] items-end overflow-hidden bg-forest-950">
        <Image
          src={unsplash("1782944149785-ca2fe837bf64", 2200, 1100)}
          alt="Towering tree canopy with sunlight filtering through"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-forest-950/10" />
        <div className="container-hg relative z-10 pb-16 pt-32">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Gallery
          </span>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl font-extralight leading-[1.1] text-cream text-balance sm:text-6xl">
            A closer look at the details.
          </h1>
        </div>
      </section>

      <section className="container-hg py-24 lg:py-32">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}
