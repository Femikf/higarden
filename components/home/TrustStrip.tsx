import { PenTool, Sprout, Palmtree, Scissors } from "lucide-react";

const trustItems = [
  {
    icon: PenTool,
    title: "Landscape Design",
    description: "Custom architectural planning & 3D visualization",
  },
  {
    icon: Sprout,
    title: "Garden Setup",
    description: "Complete soil prep, planting & irrigation setup",
  },
  {
    icon: Palmtree,
    title: "Plant Supply",
    description: "Acclimatized specimens from our Palakkad nursery",
  },
  {
    icon: Scissors,
    title: "Garden Maintenance",
    description: "Scheduled seasonal pruning, feeding & lawn care",
  },
];

export function TrustStrip() {
  return (
    <section className="relative z-20 -mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-higarden-soft/80 bg-white/95 p-6 shadow-[0_18px_45px_-10px_rgba(7,91,42,0.18)] backdrop-blur-xl sm:p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 ${
                  index !== 0 ? "lg:border-l lg:border-higarden-soft/70 lg:pl-6" : ""
                }`}
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-higarden-soft text-higarden-primary shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-higarden-bright hover:text-forest-950">
                  <Icon className="size-6 text-higarden-primary transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-extrabold text-forest-900">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-higarden-muted leading-tight mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
