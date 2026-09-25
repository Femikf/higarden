import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { JsonLd } from "@/components/shared/JsonLd";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { unsplash } from "@/lib/unsplash";
import { stats } from "@/constants/stats";
import { site } from "@/constants/site";
import { AboutValues } from "./AboutValues";
import { AboutStory } from "./AboutStory";

export const metadata: Metadata = pageMetadata({
  title: "About HiGarden — Premium Landscape Studio in Kerala",
  description:
    "HiGarden is a landscape design studio based in Kochi, Kerala, crafting tropical gardens for villas, resorts, architects and commercial spaces since 2014.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <section className="relative flex min-h-[50svh] items-end overflow-hidden bg-forest-950 pb-16 pt-36">
        <Image
          src={unsplash("1758508069465-febd0f9ae218", 2200, 1300)}
          alt="Sunlight filtering through tropical green foliage in Kerala"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/20" />
        <div className="container-hg relative z-10 flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-higarden-lime backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-higarden-bright" />
            About HiGarden
          </span>
          <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
            Bringing your outdoor space{" "}
            <span className="text-higarden-bright">to life.</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            A friendly, professional Kerala landscaping and nursery studio dedicated to crafting gardens that feel natural, alive, and effortless to enjoy.
          </p>
        </div>
      </section>

      <AboutStory />

      <section className="bg-forest-900 py-16 text-white border-y border-higarden-primary/30">
        <div className="container-hg grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 p-6 text-center border border-white/10 backdrop-blur-sm">
              <p className="font-heading text-4xl font-extrabold text-higarden-bright sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <AboutValues />

      <section className="container-hg py-20 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Work With Us"
            title={
              <span>
                Let&rsquo;s grow something{" "}
                <span className="text-higarden-primary">beautiful together.</span>
              </span>
            }
            description="Whether scoping a new villa garden or seeking advice on plants from our nursery, our team is ready to walk your site."
            align="center"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton href="/contact" variant="bright" className="px-8 py-4 font-extrabold uppercase tracking-wider text-xs">
              Get a Free Consultation
            </MagneticButton>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-forest-800/30 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-forest-900 hover:bg-higarden-soft transition-colors"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
