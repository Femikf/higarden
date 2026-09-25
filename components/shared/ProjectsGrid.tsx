"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projectCategories } from "@/constants/projects";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [projects, activeCategory]
  );

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {projectCategories.map((category) => (
          <button
            key={category.value}
            role="tab"
            type="button"
            aria-selected={activeCategory === category.value}
            onClick={() => setActiveCategory(category.value)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300",
              activeCategory === category.value
                ? "border-forest-800 bg-forest-800 text-cream"
                : "border-sand-300 text-forest-800/70 hover:border-forest-800/40 hover:text-forest-900"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className={cn(
                project.aspectClass === "aspect-[4/5]" || project.aspectClass === "aspect-[3/4]"
                  ? "row-span-2"
                  : "row-span-1"
              )}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
