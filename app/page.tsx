import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { JsonLd } from "@/components/shared/JsonLd";
import { serviceJsonLd } from "@/lib/seo";
import { services } from "@/constants/services";
import { site } from "@/constants/site";

const BeforeAfterSlider = dynamic(() =>
  import("@/components/home/BeforeAfterSlider").then((mod) => mod.BeforeAfterSlider)
);
const RecentProjects = dynamic(() =>
  import("@/components/home/RecentProjects").then((mod) => mod.RecentProjects)
);
const NurseryShowcase = dynamic(() =>
  import("@/components/home/NurseryShowcase").then((mod) => mod.NurseryShowcase)
);
const WhyHigarden = dynamic(() =>
  import("@/components/home/WhyHigarden").then((mod) => mod.WhyHigarden)
);
const OurProcess = dynamic(() =>
  import("@/components/home/OurProcess").then((mod) => mod.OurProcess)
);
const InstagramFeed = dynamic(() =>
  import("@/components/home/InstagramFeed").then((mod) => mod.InstagramFeed)
);
const Testimonials = dynamic(() =>
  import("@/components/home/Testimonials").then((mod) => mod.Testimonials)
);
const FAQSection = dynamic(() =>
  import("@/components/home/FAQSection").then((mod) => mod.FAQSection)
);
const CTABanner = dynamic(() =>
  import("@/components/home/CTABanner").then((mod) => mod.CTABanner)
);

export const metadata: Metadata = {
  title: `${site.name} — Kerala Landscaping, Garden Design & Nursery`,
  description: site.description,
  alternates: { canonical: site.url },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          services.map((s) => ({ name: s.title, description: s.shortDescription }))
        )}
      />
      <Hero />
      <TrustStrip />
      <WhoWeAre />
      <FeaturedServices />
      <BeforeAfterSlider />
      <RecentProjects />
      <NurseryShowcase />
      <WhyHigarden />
      <OurProcess />
      <InstagramFeed />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  );
}
