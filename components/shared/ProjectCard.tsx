"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      layout
      className="group relative h-full w-full overflow-hidden rounded-[2rem] bg-forest-950 border border-higarden-soft/70 shadow-[0_10px_30px_rgba(7,91,42,0.1)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(7,91,42,0.25)]"
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(min-width: 1280px) 420px, (min-width: 768px) 46vw, calc(100vw - 32px)"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6 text-white">
        <span className="w-fit rounded-full bg-forest-900/90 border border-higarden-bright/30 px-3 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-higarden-lime backdrop-blur-md">
          {project.categoryLabel}
        </span>
        <div className="mt-1 flex items-center justify-between gap-3">
          <h3 className="font-heading text-xl font-bold text-white transition-colors group-hover:text-higarden-bright">
            {project.title}
          </h3>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors duration-300 group-hover:bg-higarden-bright group-hover:text-forest-950">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <p className="text-xs font-medium text-white/75">
          {project.location} &middot; {project.year}
        </p>
      </div>
    </motion.article>
  );
}
