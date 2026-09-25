import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/shared/JsonLd";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { unsplash } from "@/lib/unsplash";
import { services } from "@/constants/services";
import { ServiceDetailCard } from "./ServiceDetailCard";

export const metadata: Metadata = pageMetadata({
  title: "Services — Tropical Landscaping, Garden Design & More",
  description:
    "Explore HiGarden's full range of landscape services: tropical landscaping, garden design, home garden setup, indoor plants, vertical gardens, maintenance, renovation and consultation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])}
      />
      <JsonLd
        data={serviceJsonLd(
          services.map((s) => ({ name: s.title, description: s.description }))
        )}
      />

      <section className="relative flex min-h-[50svh] items-end overflow-hidden bg-forest-950 pb-16 pt-36">
        <Image
          src={unsplash("1715405156521-8357fe742ce8", 2200, 1200)}
          alt="Formal Indian tropical garden with lush lawn and trees"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/20" />
        <div className="container-hg relative z-10 flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-higarden-lime backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-higarden-bright" />
            Landscaping &amp; Gardening Services
          </span>
          <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
            Everything your living garden{" "}
            <span className="text-higarden-bright">needs to flourish.</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            From complete villa setups to vertical living walls and scheduled maintenance. We handle every step under one studio.
          </p>
        </div>
      </section>

      <section className="container-hg flex flex-col gap-20 py-20 lg:py-28">
        {services.map((service, index) => (
          <ServiceDetailCard key={service.slug} service={service} reverse={index % 2 === 1} />
        ))}
      </section>

      <section className="border-t border-higarden-soft bg-[#f2f7ef] py-20">
        <div className="container-hg flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-heading text-3xl font-extrabold text-forest-900 text-balance sm:text-4xl">
            Not sure which service fits your space?
          </h2>
          <p className="max-w-lg text-sm text-higarden-muted">
            Share your plot dimensions or photos with our team for a personalized recommendation.
          </p>
          <MagneticButton href="/contact" variant="bright" className="px-8 py-4 font-extrabold uppercase tracking-wider text-xs">
            Get a Free Consultation
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
