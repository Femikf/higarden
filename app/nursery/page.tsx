import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Truck, ShieldCheck, Sprout, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { JsonLd } from "@/components/shared/JsonLd";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { unsplash } from "@/lib/unsplash";
import { nurseryServices } from "@/constants/nursery";
import { site } from "@/constants/site";
import { NurseryCatalog } from "./NurseryCatalog";

export const metadata: Metadata = pageMetadata({
  title: "Nursery — Tropical Plants & Landscaping Supply in Kerala",
  description:
    "Explore HiGarden's nursery plant collection in Kerala: indoor plants, outdoor tropical foliage, ornamental specimens, flowering plants, and bulk landscaping supply.",
  path: "/nursery",
});

const serviceIcons = {
  Compass,
  Truck,
  ShieldCheck,
  Sprout,
};

export default function NurseryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Nursery", path: "/nursery" },
        ])}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[55svh] items-end overflow-hidden bg-forest-950 pb-16 pt-36">
        <Image
          src={unsplash("1585320806297-9794b3e4eeae", 2200, 1200)}
          alt="Lush green plant nursery with tropical plants and palms"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/20" />
        <div className="container-hg relative z-10 flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-higarden-lime backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-higarden-bright" />
            Palakkad &middot; Kerala
          </span>
          <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
            Thriving plants, nurtured for{" "}
            <span className="text-higarden-bright">Kerala spaces.</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            From statement indoor foliage and flowering courtyard varieties to mature landscaping stock.
            Every plant is hardened and acclimated to Kerala&rsquo;s monsoon and heat.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="container-hg py-16 lg:py-24" aria-labelledby="catalog-heading">
        <div className="mb-10 text-center">
          <SectionHeading
            id="catalog-heading"
            eyebrow="Plant Catalog"
            title={
              <span>
                Curated plant varieties for{" "}
                <span className="text-higarden-primary">every corner.</span>
              </span>
            }
            description="Browse our hand-picked selections. Inquire directly on WhatsApp to check pot sizes, current stock, and doorstep delivery."
            align="center"
            className="mx-auto max-w-2xl"
          />
        </div>

        <NurseryCatalog />
      </section>

      {/* Nursery Services Section */}
      <section className="bg-[#f2f7ef] py-20 lg:py-28 border-y border-higarden-soft">
        <div className="container-hg flex flex-col gap-12">
          <SectionHeading
            eyebrow="Nursery Services"
            title={
              <span>
                More than a nursery:{" "}
                <span className="text-higarden-primary">expert plant care &amp; supply.</span>
              </span>
            }
            description="Whether styling an apartment balcony or planting an entire villa estate, our horticulturists ensure your plants thrive."
            align="center"
            className="mx-auto max-w-2xl text-center"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nurseryServices.map((service) => {
              const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? Sprout;
              return (
                <div
                  key={service.title}
                  className="flex flex-col gap-4 rounded-3xl bg-white p-7 border border-higarden-soft shadow-sm transition-all hover:border-higarden-bright/50 hover:shadow-md"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-higarden-soft text-higarden-primary">
                    <Icon className="size-6 text-higarden-bright" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-forest-900">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-higarden-muted">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Order / Visit CTA */}
      <section className="container-hg py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-950 p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-higarden-lime">
                Direct From Farm
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                Need plant advice or bulk delivery to your site?
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Connect with our nursery team on WhatsApp. Share photos of your space, lighting conditions, or landscape plan, and we&rsquo;ll curate the right plant list for you.
              </p>
              <div className="flex items-center gap-2 pt-2 text-xs text-white/70">
                <MapPin className="size-4 text-higarden-bright" />
                <span>Nursery Location: Katampazhipuram, Palakkad, Kerala</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full bg-higarden-bright px-7 py-4 text-sm font-extrabold text-forest-950 shadow-md hover:bg-higarden-lime transition-all"
              >
                <FaWhatsapp className="size-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all"
              >
                <Phone className="size-4" />
                <span>Call {site.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
