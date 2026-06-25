/**
 * FON Minerals — Content Layer
 * lib/content/minerals.ts
 *
 * CMS-ready content configuration for the FON Minerals division.
 * All copy, data, and metadata lives here for easy CMS migration.
 */

export const MINERALS_META = {
  title: "FON Minerals — Pan-African Mineral Value Chain Development",
  description:
    "FON Minerals is a Pan-African mineral value chain development company building processing industries, industrial infrastructure, strategic partnerships, and responsible mineral supply chains.",
  keywords: [
    "mineral processing Africa",
    "beneficiation",
    "critical minerals",
    "battery minerals",
    "lithium processing",
    "copper concentrator",
    "chrome processing",
    "mineral value chain",
    "African mining investment",
    "commodity trading Africa",
  ],
  ogImage: "/images/minerals-og.jpg",
};

export const MINERALS_HERO = {
  eyebrow: "FON Minerals — Division Overview",
  headline: ["Africa's Mineral", "Value Chain", "Built Here."],
  accentLine: 1, // which headline line gets the copper accent
  body: "FON Minerals is a Pan-African mineral value chain development company building processing industries, industrial infrastructure, strategic partnerships, and responsible mineral supply chains across the continent.",
  primaryCTA: { label: "View Value Chain", href: "#value-chain" },
  secondaryCTA: { label: "Our Projects", href: "#projects" },
};

export const MINERALS_STATS = [
  { value: "54", label: "Countries Across Africa" },
  { value: "12+", label: "Target Mineral Commodities" },
  { value: "$2.4B", label: "Pipeline Project Value" },
  { value: "8", label: "Processing Verticals" },
];

export const MINERALS_VALUE_CHAIN = [
  {
    id: "mine",
    label: "MINE",
    sub: "Resource development & exploration support",
  },
  {
    id: "process",
    label: "PROCESSING",
    sub: "Concentrators, leach plants, flotation",
  },
  {
    id: "beneficiation",
    label: "BENEFICIATION",
    sub: "Value addition & grade upgrading",
  },
  {
    id: "manufacturing",
    label: "MANUFACTURING",
    sub: "Alloys, battery materials, cathodes",
  },
  {
    id: "export",
    label: "EXPORT",
    sub: "Ports, logistics, offtake structuring",
  },
  {
    id: "industrial",
    label: "INDUSTRIAL DEV",
    sub: "Industrial parks & downstream zones",
  },
];

export const MINERALS_LIFECYCLE = [
  "Exploration Support",
  "Resource Development",
  "Project Structuring",
  "Feasibility Support",
  "Financing",
  "Plant Design",
  "EPCM Partners",
  "Construction",
  "Commissioning",
  "Operations Support",
  "Commodity Sales",
  "Export Markets",
];

export const MINERALS_COMMODITIES = [
  { name: "Lithium", tag: "Battery", group: "Battery Minerals" },
  { name: "Copper", tag: "Base Metal", group: "Base Metals" },
  { name: "Chrome", tag: "Ferrochrome", group: "Base Metals" },
  { name: "Manganese", tag: "Alloys", group: "Base Metals" },
  { name: "Nickel", tag: "Battery", group: "Battery Minerals" },
  { name: "Cobalt", tag: "Critical", group: "Critical Minerals" },
  { name: "Graphite", tag: "Battery", group: "Battery Minerals" },
  { name: "Rare Earth Elements", tag: "Critical", group: "Critical Minerals" },
  { name: "Gold", tag: "Precious", group: "Precious Metals" },
  { name: "Tin", tag: "Industrial", group: "Industrial Minerals" },
  { name: "Iron Ore", tag: "Base Metal", group: "Base Metals" },
  { name: "Coal", tag: "Industrial", group: "Industrial Minerals" },
];

export const MINERALS_SERVICES = [
  {
    title: "Mineral Processing",
    desc: "Full-circuit processing plant development including comminution, flotation, leaching and gravity separation systems.",
  },
  {
    title: "Beneficiation Facilities",
    desc: "Value-addition infrastructure that upgrades raw ore to high-grade concentrates, pellets and refined products.",
  },
  {
    title: "Commodity Trading",
    desc: "Structured offtake and trading solutions connecting African mineral producers with global industrial buyers.",
  },
  {
    title: "Project Development",
    desc: "End-to-end project development from scoping and feasibility through financing, EPCM delivery and commissioning.",
  },
  {
    title: "Processing Plant Engineering",
    desc: "Modular and fixed plant design in partnership with tier-one engineering houses for rapid deployment.",
  },
  {
    title: "Supply Chain Structuring",
    desc: "Integrated logistics, warehousing, port arrangements and export pathway development.",
  },
  {
    title: "Strategic Partnerships",
    desc: "Joint venture structures with governments, mining companies, DFIs and industrial groups.",
  },
  {
    title: "Investment Advisory",
    desc: "Bankable feasibility, financial modelling and investor relations for mineral processing projects.",
  },
  {
    title: "Offtake Solutions",
    desc: "Pre-production offtake agreements and streaming arrangements to underpin project financing.",
  },
  {
    title: "Industrial Development",
    desc: "Special Economic Zones, processing parks and downstream industrial cluster development.",
  },
];

export const MINERALS_PROJECTS = [
  {
    name: "Chrome Processing Facility",
    country: "Zimbabwe",
    status: "Development",
    commodity: "Chrome / Ferrochrome",
    capacity: "120,000 tpa Ferrochrome",
    investment: "USD 180M",
    desc: "Integrated chrome ore processing and ferrochrome smelting facility targeting European and Asian steel markets.",
  },
  {
    name: "Copper Concentrator",
    country: "Zambia",
    status: "Feasibility",
    commodity: "Copper",
    capacity: "500,000 tpa Ore",
    investment: "USD 240M",
    desc: "Greenfield copper concentrator producing 28% Cu concentrate for international smelters and local refineries.",
  },
  {
    name: "Lithium Beneficiation Facility",
    country: "Zimbabwe",
    status: "Scoping",
    commodity: "Lithium",
    capacity: "50,000 tpa LCE",
    investment: "USD 320M",
    desc: "Battery-grade lithium carbonate and hydroxide production serving global EV supply chains.",
  },
  {
    name: "Gold Processing Plant",
    country: "DRC",
    status: "Development",
    commodity: "Gold",
    capacity: "150,000 oz/yr",
    investment: "USD 95M",
    desc: "Carbon-in-leach gold processing plant supporting artisanal and small-scale mining formalisation.",
  },
  {
    name: "Critical Minerals Hub",
    country: "South Africa",
    status: "Concept",
    commodity: "Multi-mineral",
    capacity: "Industrial Park",
    investment: "USD 600M",
    desc: "Multi-commodity mineral processing and beneficiation park targeting the EU Critical Raw Materials Act supply chain.",
  },
  {
    name: "Industrial Mineral Processing Park",
    country: "Tanzania",
    status: "Development",
    commodity: "Graphite / REE",
    capacity: "75,000 tpa",
    investment: "USD 210M",
    desc: "Integrated graphite and rare earth element processing park linked to a dedicated export corridor.",
  },
];

export const MINERALS_PARTNERS = [
  "Governments & Sovereign Entities",
  "Established Mining Companies",
  "Junior Miners & Explorers",
  "Industrial & Manufacturing Groups",
  "Global Commodity Buyers",
  "Infrastructure Developers",
  "Development Finance Institutions",
  "Institutional Investors",
  "Engineering & EPCM Companies",
  "Technology Providers",
];

export const MINERALS_INVESTMENT = [
  {
    title: "Strategic Partnerships",
    desc: "Long-term JV structures with aligned equity and governance",
  },
  {
    title: "Special Purpose Vehicles",
    desc: "Project-specific SPVs for ring-fenced mineral assets",
  },
  {
    title: "Project Finance",
    desc: "Bankable structures backed by offtake and processing contracts",
  },
  {
    title: "Development Finance",
    desc: "DFI, MDB and bilateral agency co-financing",
  },
  {
    title: "Equity Partnerships",
    desc: "Direct equity with institutional and strategic investors",
  },
  {
    title: "Offtake Financing",
    desc: "Streaming and royalty instruments underpinning capital raises",
  },
];
