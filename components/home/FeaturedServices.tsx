"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { services } from "@/constants/services";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function FeaturedServices() {
  // 6 Primary Landscaping Services
  const primaryServices = services.slice(0, 6);

  return (
    <section
      className="bg-[#f4f2e9] py-20 lg:py-28 border-y border-higarden-soft/70"
      aria-labelledby="services-heading"
    >
      <div className="container-hg flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            id="services-heading"
            eyebrow="Landscaping Services"
            title={
              <span>
                Everything Your{" "}
                <span className="text-higarden-primary">Garden Needs.</span>
              </span>
            }
            description="From planning the first plant to maintaining a garden you love."
          />
          <div className="flex items-center gap-3 shrink-0">
            <MagneticButton href="/services" variant="outline" className="bg-white">
              View All Services
            </MagneticButton>
            <MagneticButton href="/contact" variant="bright">
              Book Consultation
            </MagneticButton>
          </div>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {primaryServices.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
