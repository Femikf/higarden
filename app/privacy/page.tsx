import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/constants/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
  path: "/privacy",
});

const sections = [
  {
    title: "Information We Collect",
    body: "When you submit an inquiry through our contact form or newsletter signup, we collect your name, email address, phone number and any message you provide. We do not collect payment information through this website.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information you provide to respond to inquiries, schedule consultations, and — if you opt in — send occasional updates about our work. We do not sell or rent your information to third parties.",
  },
  {
    title: "Cookies",
    body: "This website may use essential cookies required for basic functionality. We do not currently use third-party advertising or tracking cookies.",
  },
  {
    title: "Data Retention",
    body: "We retain inquiry and project information for as long as reasonably necessary to provide our services and maintain business records, after which it is securely deleted on request.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.",
  },
  {
    title: "Contact",
    body: `Questions about this policy can be sent to ${site.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }])}
      />

      <section className="container-hg flex flex-col gap-4 pb-16 pt-40 lg:pt-48">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
          Legal
        </span>
        <h1 className="max-w-2xl font-heading text-5xl font-light leading-[1.1] text-forest-900 text-balance sm:text-6xl">
          Privacy Policy
        </h1>
        <p className="text-sm text-stone-500">Last updated: July 2026</p>
      </section>

      <section className="container-hg flex max-w-3xl flex-col gap-10 pb-24 lg:pb-32">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-medium text-forest-900">{section.title}</h2>
            <p className="text-base leading-relaxed text-stone-600">{section.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
