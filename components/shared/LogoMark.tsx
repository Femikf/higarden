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
  logoSrc = "/images/logo/higarden-logo.png",
  showSubtitle = true,
}: LogoMarkProps) {
  const textColor = tone === "dark" ? "text-forest-900" : "text-white";
  const subtitleColor = tone === "dark" ? "text-forest-700" : "text-higarden-lime";

  const sizeConfig = {
    sm: {
      badgeSize: 34,
      badgeClass: "size-[34px]",
      text: "text-lg",
      sub: "text-[0.58rem]",
    },
    md: {
      badgeSize: 44,
      badgeClass: "size-10 sm:size-[44px]",
      text: "text-xl sm:text-2xl",
      sub: "text-[0.66rem] sm:text-[0.7rem]",
    },
    lg: {
      badgeSize: 56,
      badgeClass: "size-14 sm:size-16",
      text: "text-2xl sm:text-3xl",
      sub: "text-xs",
    },
  }[size];

  return (
    <span className={cn("inline-flex items-center gap-3 font-heading select-none group", className)}>
      {/* Official HiGarden Circular Badge Logo */}
      <span className={cn("relative shrink-0 overflow-hidden rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105", sizeConfig.badgeClass)}>
        <Image
          src={logoSrc}
          alt="HiGarden official logo"
          width={sizeConfig.badgeSize * 2}
          height={sizeConfig.badgeSize * 2}
          className="size-full object-cover"
          priority
        />
      </span>

      {/* Brand Typography & Official Tagline */}
      <span className={cn("flex flex-col leading-tight tracking-tight", textColor)}>
        <span className={cn("font-extrabold tracking-tight font-heading flex items-baseline", sizeConfig.text)}>
          <span>Hi</span>
          <span className={tone === "dark" ? "text-higarden-primary" : "text-higarden-bright"}>Garden</span>
        </span>
        {showSubtitle && (
          <span
            className={cn(
              "font-medium italic tracking-wide text-nowrap hidden sm:inline-block",
              tone === "light" && "!inline-block",
              subtitleColor,
              sizeConfig.sub
            )}
          >
            Stay green and be seen
          </span>
        )}
      </span>
    </span>
  );
}
