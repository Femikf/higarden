import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { JsonLd } from "@/components/shared/JsonLd";
import { localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/constants/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Landscaping & Garden Services in Kerala`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "landscaping Kerala",
    "garden design Kochi",
    "HiGarden Kerala",
    "tropical landscaping",
    "villa gardens Kerala",
    "nursery Kerala",
    "indoor plants Kerala",
    "vertical gardens Kerala",
    "garden maintenance Kerala",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Landscaping & Garden Services in Kerala`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Landscaping & Garden Services in Kerala`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-forest-900 selection:bg-higarden-bright/30 selection:text-higarden-dark">
        <JsonLd data={localBusinessJsonLd()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-900 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
