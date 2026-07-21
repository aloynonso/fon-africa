/**
 * FON — Media & Industry Intelligence
 * CMS-ready content layer.
 *
 * The /media page currently ships with its data inline (consistent with the
 * other division pages). This file is the single source of truth to migrate to
 * when you wire a headless CMS (Sanity / Contentful / Payload): replace the
 * static exports below with async fetchers and the page can import from here
 * without changing its markup.
 */

export type Production = {
  slug: string;
  title: string;
  category: string;
  body: string;
  trailerUrl?: string; // wire when trailers are live
  poster?: string; // /images/media/<slug>.jpg
};

export type ProduceFormat = { title: string; items: string[] };

export const mediaHero = {
  eyebrow: "FON · Media & Industry Intelligence",
  headline: "Telling Africa's Industrial Story.",
  sub: "We document the people, projects, technologies and ideas shaping Africa's industrial future through world-class media, documentary production and industry intelligence.",
  primaryCta: { label: "View Our Productions", href: "#productions" },
  secondaryCta: { label: "Partner With Us", href: "#partner" },
};

export const produceFormats: ProduceFormat[] = [
  { title: "Documentary Films", items: ["Mine visits", "Infrastructure projects", "Factories", "Industrial parks", "Construction"] },
  { title: "Executive Interviews", items: ["CEOs", "Government", "Investors", "Engineers", "Industry leaders"] },
  { title: "Industry Intelligence", items: ["Research", "Market reports", "Commodity insights", "Investment reports", "Country reports"] },
  { title: "Educational Content", items: ["Mining", "Beneficiation", "Energy", "Infrastructure", "Technology", "Industrial policy"] },
  { title: "Conference Coverage", items: ["Mining Indaba", "Energy conferences", "Government forums", "Industrial summits"] },
  { title: "Project Showcases", items: ["Plants", "Equipment", "Factories", "Renewable energy", "Mining projects", "Industrial developments"] },
];

export const industriesCovered = [
  "Mining", "Energy", "Agriculture", "Manufacturing", "Infrastructure", "Technology",
  "Ports", "Logistics", "Critical Minerals", "Water", "Construction", "Smart Cities",
];

export const partnerTypes = [
  "OEMs", "Mining companies", "Governments", "Investment funds",
  "Industrial developers", "Technology providers", "Development finance institutions",
];

export const featuredProductions: Production[] = [
  { slug: "inside-african-mining", title: "Inside African Mining", category: "Documentary Series", body: "From pit to port — the operators, engineers and communities building the continent's mineral value chain." },
  { slug: "africas-industrial-future", title: "Africa's Industrial Future", category: "Flagship Film", body: "A continental view of the shift from raw export to manufactured value." },
  { slug: "building-energy-africa", title: "Building Energy Africa", category: "Documentary Series", body: "Grid, generation and off-grid — how power is being built where it has never reached." },
  { slug: "the-future-of-beneficiation", title: "The Future of Beneficiation", category: "Intelligence Feature", body: "Why processing at source changes the economics of a nation, not just a mine." },
  { slug: "industrial-leaders", title: "Industrial Leaders", category: "Interview Series", body: "Long-form conversations with the CEOs, ministers and financiers shaping industrial policy." },
  { slug: "mining-explained", title: "Mining Explained", category: "Educational", body: "The methods, the machines and the markets — mining made legible." },
  { slug: "africas-infrastructure-stories", title: "Africa's Infrastructure Stories", category: "Documentary Series", body: "Roads, rail, ports and cities — the connective tissue of an industrialising continent." },
];

/**
 * FUTURE-READY PLACEHOLDERS
 * Each entry is a division sub-capability scaffolded for later build-out.
 * `status: "planned"` renders as a dimmed roadmap chip today; flip to
 * "live" and add a `href` to promote it into full navigation.
 */
export type RoadmapItem = { key: string; label: string; status: "planned" | "live"; href?: string };

export const mediaRoadmap: RoadmapItem[] = [
  { key: "podcasts", label: "Podcasts", status: "planned" },
  { key: "streaming", label: "Streaming", status: "planned" },
  { key: "newsletters", label: "Newsletters", status: "planned" },
  { key: "research", label: "Research", status: "planned" },
  { key: "market-intelligence", label: "Market Intelligence", status: "planned" },
  { key: "industry-awards", label: "Industry Awards", status: "planned" },
  { key: "annual-reports", label: "Annual Reports", status: "planned" },
  { key: "mining-tv", label: "Mining TV", status: "planned" },
  { key: "energy-tv", label: "Energy TV", status: "planned" },
  { key: "infrastructure-tv", label: "Infrastructure TV", status: "planned" },
  { key: "events", label: "Events", status: "planned" },
  { key: "training", label: "Training", status: "planned" },
  { key: "digital-magazine", label: "Digital Magazine", status: "planned" },
];
