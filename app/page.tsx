import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { RecentProjects } from "@/components/home/RecentProjects";
import { NurseryShowcase } from "@/components/home/NurseryShowcase";
import { WhyHigarden } from "@/components/home/WhyHigarden";
import { OurProcess } from "@/components/home/OurProcess";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { CTABanner } from "@/components/home/CTABanner";
import { JsonLd } from "@/components/shared/JsonLd";
import { serviceJsonLd } from "@/lib/seo";
import { services } from "@/constants/services";
import { site } from "@/constants/site";

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
