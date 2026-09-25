import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  logoSrc?: string;
  showSubtitle?: boolean;
}

export function LogoMark({
  className,
  tone = "dark",
  size = "md",
  logoSrc,
  showSubtitle = true,
}: LogoMarkProps) {
  // If a future PNG or SVG logo asset is passed or placed at /higarden-logo.svg or /higarden-logo.png
  if (logoSrc) {
    const heightMap = { sm: 28, md: 36, lg: 48 };
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          src={logoSrc}
          alt="HiGarden"
          width={heightMap[size] * 3.5}
          height={heightMap[size]}
          className={cn("h-auto object-contain", size === "sm" ? "max-h-7" : size === "lg" ? "max-h-12" : "max-h-9")}
          priority
        />
      </span>
    );
  }

  const textColor = tone === "dark" ? "text-forest-900" : "text-white";
  const leafColorPrimary = tone === "dark" ? "#075B2A" : "#FFFFFF";
  const leafColorAccent = tone === "dark" ? "#63C132" : "#8ED63F";
  const subtitleColor = tone === "dark" ? "text-forest-700" : "text-higarden-lime";

  const sizeClasses = {
    sm: { icon: "size-6", text: "text-lg", sub: "text-[0.55rem]" },
    md: { icon: "size-8", text: "text-2xl", sub: "text-[0.62rem]" },
    lg: { icon: "size-10", text: "text-3xl", sub: "text-[0.7rem]" },
  }[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5 font-heading select-none", className)}>
      {/* Botanical Emblem */}
      <span className="relative flex shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 44 44"
          aria-hidden="true"
          className={cn("shrink-0 transition-transform duration-300 group-hover:scale-105", sizeClasses.icon)}
        >
          {/* Main Leaf Body */}
          <path
            d="M22 4C30 8 36 15 36 24C36 31.7 29.7 38 22 38C14.3 38 8 31.7 8 24C8 18 10 13 14 9C17 14 20 18 22 22C22.6 15 22.8 9 22 4Z"
            fill={leafColorPrimary}
          />
          {/* Bright Green Sprout / Leaf Vein Accent */}
          <path
            d="M22 10C26 14 27.5 20 25.5 26"
            stroke={leafColorAccent}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Growth Dot */}
          <circle cx="22" cy="7" r="2.5" fill={leafColorAccent} />
        </svg>
      </span>

      {/* Brand Typography */}
      <span className={cn("flex flex-col leading-none tracking-tight", textColor)}>
        <span className={cn("font-bold tracking-tight font-heading flex items-baseline", sizeClasses.text)}>
          <span>Hi</span>
          <span className={tone === "dark" ? "text-higarden-primary" : "text-higarden-bright"}>Garden</span>
        </span>
        {showSubtitle && (
          <span
            className={cn(
              "hidden font-semibold uppercase tracking-[0.2em] sm:block pt-0.5",
              subtitleColor,
              sizeClasses.sub
            )}
          >
            Landscaping &middot; Nursery
          </span>
        )}
      </span>
    </span>
  );
}
