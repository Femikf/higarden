import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/shared/JsonLd";
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { unsplash } from "@/lib/unsplash";
import { projects } from "@/constants/projects";

export const metadata: Metadata = pageMetadata({
  title: "Projects — Villas, Resorts & Commercial Landscapes",
  description:
    "Browse HiGarden's portfolio of landscape projects across Kerala — villas, resorts, residential gardens, commercial grounds and vertical gardens.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])}
      />

      <section className="relative flex h-[55svh] min-h-[380px] items-end overflow-hidden bg-forest-950">
        <Image
          src={unsplash("1766025065806-0ed92891692d", 2200, 1100)}
          alt="Terraced green fields cascading down a hillside valley"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-forest-950/10" />
        <div className="container-hg relative z-10 pb-16 pt-32">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Portfolio
          </span>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl font-extralight leading-[1.1] text-cream text-balance sm:text-6xl">
            Gardens across Kerala, built to last.
          </h1>
        </div>
      </section>

      <section className="container-hg py-24 lg:py-32">
        <ProjectsGrid projects={projects} />
      </section>
    </>
  );
}
