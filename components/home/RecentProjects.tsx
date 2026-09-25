import { SectionHeading } from "@/components/shared/SectionHeading";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { projects } from "@/constants/projects";

export function RecentProjects() {
  // Show 4 strong landscaping projects with large warm photography
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="container-hg py-20 lg:py-28" aria-labelledby="projects-heading">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          id="projects-heading"
          eyebrow="Featured Projects"
          title={
            <span>
              Gardens We&rsquo;ve{" "}
              <span className="text-higarden-primary">Brought to Life.</span>
            </span>
          }
          description="Explore authentic Kerala landscapes designed, planted, and nurtured across Kochi, Palakkad, Thrissur, and beyond."
        />
        <MagneticButton href="/projects" variant="outline" className="shrink-0">
          View All Projects
        </MagneticButton>
      </div>

      <ProjectsGrid projects={featuredProjects} />
    </section>
  );
}
