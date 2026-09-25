import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/shared/LogoMark";
import { footerLinks, site, socialLinks } from "@/constants/site";
import { services as serviceList } from "@/constants/services";

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  pinterest: FaWhatsapp,
  whatsapp: FaWhatsapp,
  youtube: FaWhatsapp,
};

export function Footer() {
  return (
    <footer className="border-t border-higarden-primary/30 bg-forest-900 text-white">
      <div className="container-hg grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:py-24">
        {/* Brand column */}
        <div className="flex flex-col gap-6">
          <LogoMark tone="light" size="lg" />
          <p className="max-w-xs text-sm leading-relaxed text-white/75 font-normal">
            {site.tagline} Kerala&rsquo;s trusted landscaping &amp; nursery studio, crafting living gardens for villas, homes, and resorts.
          </p>
          <div className="flex items-center gap-3 pt-1">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-higarden-bright hover:bg-higarden-bright hover:text-forest-950"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.25em] text-higarden-bright">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm text-white/80 font-medium">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 transition-colors hover:text-higarden-bright"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services & Nursery */}
        <div>
          <h3 className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.25em] text-higarden-bright">
            Our Offerings
          </h3>
          <ul className="space-y-3 text-sm text-white/80 font-medium">
            {serviceList.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="transition-colors hover:text-higarden-bright"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/nursery"
                className="inline-flex items-center gap-1 text-higarden-lime font-semibold hover:text-white"
              >
                HiGarden Nursery &amp; Plants
                <ArrowUpRight className="size-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Consultation */}
        <div>
          <h3 className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.25em] text-higarden-bright">
            Connect With Us
          </h3>
          <p className="mb-4 text-sm text-white/75">
            Planning a landscape renovation or need plants for your space? Speak with our team.
          </p>
          <ul className="space-y-3.5 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-higarden-bright">
                <Phone className="size-4" aria-hidden="true" />
              </span>
              <a href={site.phoneHref} className="hover:text-higarden-bright transition-colors font-semibold">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-higarden-bright">
                <Mail className="size-4" aria-hidden="true" />
              </span>
              <a href={`mailto:${site.email}`} className="hover:text-higarden-bright transition-colors">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-higarden-bright">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <span className="text-white/75 text-xs leading-relaxed">{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/20">
        <div className="container-hg flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-medium text-white/80">
            <span className="inline-block size-2 rounded-full bg-higarden-bright" />
            Designed &amp; Crafted in Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
}
