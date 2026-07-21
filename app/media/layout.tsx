import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Industry Intelligence — Telling Africa's Industrial Story",
  description:
    "FON's Media & Industry Intelligence division documents the people, projects and technologies shaping Africa's industrial future through world-class documentary production, executive interviews and industry intelligence.",
  keywords: [
    "African industrial media",
    "mining documentary",
    "industry intelligence",
    "FON Industrial Group",
    "energy documentary Africa",
    "beneficiation",
    "infrastructure storytelling",
  ],
  alternates: { canonical: "https://fon.africa/media" },
  openGraph: {
    title: "Media & Industry Intelligence · FON Industrial Group",
    description:
      "World-class documentary production, executive interviews and industry intelligence — telling Africa's industrial story.",
    url: "https://fon.africa/media",
    siteName: "FON Industrial Group",
    type: "website",
    images: [{ url: "https://fon.africa/images/media/og-media.jpg", width: 1200, height: 630, alt: "FON Media & Industry Intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Industry Intelligence · FON Industrial Group",
    description: "Telling Africa's industrial story through documentary, interviews and intelligence.",
    images: ["https://fon.africa/images/media/og-media.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Media & Industry Intelligence",
  serviceType: "Documentary Production & Industry Intelligence",
  provider: {
    "@type": "Organization",
    name: "FON Industrial Group",
    url: "https://fon.africa",
  },
  areaServed: { "@type": "Place", name: "Africa" },
  description:
    "A strategic division of FON Industrial Group producing documentary films, executive interviews, industry intelligence and educational content across mining, energy, agriculture, technology and infrastructure.",
  url: "https://fon.africa/media",
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
