import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { blogPosts } from "@/constants/blog";

export const metadata: Metadata = pageMetadata({
  title: "Blog — Landscaping Notes from HiGarden",
  description:
    "Practical notes on garden design, planting for the Kerala monsoon, vertical gardens, indoor plants and renovation, from the HiGarden studio.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])}
      />

      <section className="container-hg pb-16 pt-40 lg:pt-48">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
          Journal
        </span>
        <h1 className="mt-4 max-w-2xl font-heading text-5xl font-light leading-[1.1] text-forest-900 text-balance sm:text-6xl">
          Notes on gardens, from the studio.
        </h1>
      </section>

      <section className="container-hg pb-24 lg:pb-32">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={post.cover.src}
                  alt={post.cover.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-600">
                  {post.category}
                </span>
                <h2 className="flex items-start gap-1.5 font-heading text-xl font-medium text-forest-900">
                  {post.title}
                  <ArrowUpRight className="mt-1 size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </h2>
                <p className="text-sm leading-relaxed text-stone-600">{post.excerpt}</p>
                <p className="mt-1 text-xs text-stone-500">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  &middot; {post.readingTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
