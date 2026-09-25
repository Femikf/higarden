import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { ContactCTAs } from "@/components/contact/ContactCTAs";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/constants/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact HiGarden — Book a Landscape Consultation",
  description:
    "Get in touch with HiGarden for a landscape consultation in Kerala. Call, WhatsApp, email, or send an inquiry directly.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])}
      />

      <section className="container-hg flex flex-col gap-4 pb-12 pt-36 lg:pt-44">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-higarden-bright/30 bg-higarden-soft px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-higarden-primary">
          <span className="size-1.5 rounded-full bg-higarden-bright" />
          Get In Touch
        </span>
        <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-forest-900 text-balance sm:text-5xl lg:text-6xl">
          Let&rsquo;s talk about your{" "}
          <span className="text-higarden-primary">living garden.</span>
        </h1>
        <p className="max-w-xl text-base sm:text-lg text-higarden-muted leading-relaxed">
          Tell us about your outdoor space, villa plot, or nursery plant needs — our Kerala team typically responds within one business day.
        </p>
      </section>

      <section className="container-hg pb-12">
        <ContactCTAs />
      </section>

      <section className="container-hg grid gap-12 pb-24 lg:grid-cols-2 lg:gap-16 lg:pb-32">
        <div className="rounded-[2.5rem] border border-higarden-soft bg-white p-8 shadow-[0_8px_32px_rgba(7,91,42,0.06)] sm:p-10">
          <h2 className="mb-6 font-heading text-2xl font-bold text-forest-900">
            Send an Inquiry
          </h2>
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6">
          <MapEmbed />
          <div className="rounded-[2rem] border border-higarden-soft bg-[#f2f7ef] p-6 text-sm leading-relaxed text-forest-900">
            <p className="font-bold text-forest-900">{site.legalName}</p>
            <p className="mt-1 text-higarden-muted">{site.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
