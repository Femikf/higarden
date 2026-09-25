import type { Metadata } from "next";
import { site } from "@/constants/site";
import type { BlogPost } from "@/types";

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      ...(image && { images: [{ url: image, width: 1200, height: 630, alt: title }] }),
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "State",
      name: "Kerala",
    },
    foundingDate: String(site.foundedYear),
    sameAs: [],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.cover.src,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/icon.svg`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };
}

export function serviceJsonLd(items: { name: string; description: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Landscaping and Garden Design",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: site.legalName,
    },
    areaServed: "Kerala, India",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HiGarden Services",
      itemListElement: items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.description,
        },
      })),
    },
  };
}
