import type { MetadataRoute } from "next";
import { site } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Premium Landscaping & Garden Design`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F0",
    theme_color: "#1B3B2F",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
