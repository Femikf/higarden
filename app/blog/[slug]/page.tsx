import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/shared/JsonLd";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { articleJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { blogPosts } from "@/constants/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.cover.src,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={articleJsonLd(post)} />

      <article className="pb-24 pt-40 lg:pt-48">
        <div className="container-hg mb-10 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-800/70 transition-colors hover:text-forest-900"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Journal
          </Link>
        </div>

        <div className="container-hg mb-10 flex max-w-3xl flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
            {post.category}
          </span>
          <h1 className="font-heading text-4xl font-light leading-[1.1] text-forest-900 text-balance sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-sm text-stone-500">
            {post.author} &middot;{" "}
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            &middot; {post.readingTime}
          </p>
        </div>

        <div className="container-hg mb-14 max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2.5rem]">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              priority
              sizes="(min-width: 1024px) 70vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="container-hg flex max-w-3xl flex-col gap-6">
          {post.body.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-stone-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="container-hg mt-16 flex max-w-3xl flex-col items-start gap-5 rounded-3xl border border-sand-300 bg-sand-100 p-8">
          <p className="font-heading text-xl font-medium text-forest-900">
            Thinking about a project like this?
          </p>
          <MagneticButton href="/contact">Book Consultation</MagneticButton>
        </div>
      </article>
    </>
  );
}
