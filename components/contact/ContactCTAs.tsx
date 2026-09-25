import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/constants/site";

const ctas = [
  {
    label: "Call Us",
    value: site.phone,
    href: site.phoneHref,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: site.whatsapp,
    href: site.whatsappHref,
    icon: FaWhatsapp,
    external: true,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
];

export function ContactCTAs() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {ctas.map((cta) => (
        <a
          key={cta.label}
          href={cta.href}
          target={cta.external ? "_blank" : undefined}
          rel={cta.external ? "noopener noreferrer" : undefined}
          className="group flex flex-col gap-3 rounded-[2rem] border border-higarden-soft bg-white p-6 shadow-[0_4px_20px_rgba(7,91,42,0.05)] transition-all hover:border-higarden-bright/50 hover:shadow-md"
        >
          <div className="flex size-12 items-center justify-center rounded-2xl bg-higarden-soft text-higarden-primary transition-all duration-200 group-hover:bg-higarden-bright group-hover:text-forest-950">
            <cta.icon className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-higarden-muted">{cta.label}</p>
            <p className="mt-1 font-bold text-forest-900 transition-colors group-hover:text-higarden-primary">{cta.value}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
