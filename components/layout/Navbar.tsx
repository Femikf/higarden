"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { LogoMark } from "@/components/shared/LogoMark";
import { MagneticButton } from "@/components/shared/MagneticButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { mainNav, site } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2.5" : "py-5 sm:py-6"
      )}
    >
      <div
        className={cn(
          "container-hg flex items-center justify-between rounded-full px-4 py-2 transition-all duration-300 sm:px-6",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(7,91,42,0.12)] border border-higarden-soft"
            : "bg-white/40 backdrop-blur-sm border border-white/30"
        )}
      >
        <Link href="/" aria-label="HiGarden home" className="py-1 group">
          <LogoMark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative px-4 py-2 text-sm font-semibold transition-colors duration-200",
                  isActive
                    ? "text-higarden-primary font-bold"
                    : "text-forest-900/80 hover:text-higarden-primary"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-higarden-bright transition-transform duration-300 group-hover:scale-x-100",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with HiGarden on WhatsApp"
            className="flex size-10 items-center justify-center rounded-full bg-higarden-soft text-forest-800 transition-all duration-200 hover:bg-higarden-bright hover:text-forest-950"
            title="WhatsApp HiGarden"
          >
            <FaWhatsapp className="size-5" aria-hidden="true" />
          </a>
          <MagneticButton
            href="/contact"
            variant="solid"
            className="bg-higarden-bright text-forest-950 font-bold hover:bg-higarden-lime shadow-sm px-5 py-2.5 text-xs uppercase tracking-wider"
          >
            Get a Free Consultation
          </MagneticButton>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent
            side="right"
            className="!bg-cream/98 border-l border-higarden-soft w-full sm:max-w-sm flex flex-col p-6"
          >
            <SheetHeader className="pb-4 border-b border-higarden-soft">
              <SheetTitle>
                <LogoMark size="sm" />
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1.5 py-6">
              {mainNav.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                >
                  <SheetClose
                    render={
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block rounded-2xl px-4 py-3 text-lg font-semibold transition-colors",
                          pathname === link.href
                            ? "bg-higarden-soft text-higarden-primary font-bold"
                            : "text-forest-900 hover:bg-higarden-soft/60"
                        )}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-higarden-soft">
              <MagneticButton
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full justify-center bg-higarden-bright text-forest-950 font-bold hover:bg-higarden-lime py-3 text-sm"
              >
                Get a Free Consultation
              </MagneticButton>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-forest-800 text-white px-4 py-3 text-xs font-semibold hover:bg-forest-900 transition-colors"
                >
                  <FaWhatsapp className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-forest-800/30 text-forest-900 px-4 py-3 text-xs font-semibold hover:bg-forest-800/5 transition-colors"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call Us
                </a>
              </div>
            </div>
          </SheetContent>
          <Button
            variant="outline"
            size="icon"
            aria-label="Open menu"
            className="rounded-full lg:hidden border-forest-800/20 text-forest-900 hover:bg-higarden-soft"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
        </Sheet>
      </div>
    </header>
  );
}
