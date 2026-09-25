import { site } from "@/constants/site";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl border border-sand-300">
      <iframe
        src={site.mapEmbedSrc}
        title={`Map showing ${site.name} location`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full sm:h-96"
      />
    </div>
  );
}
