import {
  Sun, Battery, Grid3x3, Zap, Radio, Cpu,
  Wheat, Factory, Snowflake, Sprout, Truck, Globe2,
  Brain, Database, Layers, Network, ShieldCheck,
} from 'lucide-react';

export type Capability = {
  name: string;
  description: string;
  icon: string;
};

// Icon registry — lookup by string for CMS compatibility
export const iconRegistry = {
  // energy
  sun: Sun,
  battery: Battery,
  grid: Grid3x3,
  zap: Zap,
  radio: Radio,
  cpu: Cpu,
  // agro
  wheat: Wheat,
  factory: Factory,
  snowflake: Snowflake,
  sprout: Sprout,
  truck: Truck,
  globe: Globe2,
  // tech
  brain: Brain,
  database: Database,
  layers: Layers,
  network: Network,
  shield: ShieldCheck,
} as const;

export const energyCapabilities: Capability[] = [
  { icon: 'sun', name: 'Utility-Scale Solar', description: 'Grid-connected photovoltaic plants, 50MW–1GW deployments.' },
  { icon: 'battery', name: 'Battery Storage', description: 'Lithium-ion BESS systems for grid stability and arbitrage.' },
  { icon: 'grid', name: 'Mini-Grid Networks', description: 'Distributed hybrid systems for off-grid electrification.' },
  { icon: 'zap', name: 'Industrial Power', description: 'Dedicated generation for mines, factories, and SEZs.' },
  { icon: 'radio', name: 'Grid Modernization', description: 'Smart transmission, SCADA, and digital substations.' },
  { icon: 'cpu', name: 'Energy Intelligence', description: 'AI-driven forecasting, dispatch, and asset optimization.' },
];

export const agroCapabilities: Capability[] = [
  { icon: 'wheat', name: 'Commercial Farming', description: 'Large-scale grain, oilseed, and horticulture across irrigation belts.' },
  { icon: 'factory', name: 'Agro-Processing', description: 'Milling, oil pressing, beverages, and packaged food manufacturing.' },
  { icon: 'snowflake', name: 'Cold Chain Infrastructure', description: 'Pre-cooling, refrigerated logistics, and export-grade storage.' },
  { icon: 'sprout', name: 'Smart Agriculture', description: 'Precision farming, satellite intelligence, and yield optimization.' },
  { icon: 'truck', name: 'Commodity Logistics', description: 'Inland terminals, rail linkages, and port aggregation hubs.' },
  { icon: 'globe', name: 'Export Platforms', description: 'Compliance-grade SEZ access to EU, GCC, and Asian markets.' },
];

export const techCapabilities: Capability[] = [
  { icon: 'brain', name: 'Applied AI', description: 'Foundation models, vision systems, and decision intelligence platforms.' },
  { icon: 'database', name: 'Data Centers', description: 'Sovereign cloud infrastructure, hyperscale colocation, edge nodes.' },
  { icon: 'cpu', name: 'Industrial Automation', description: 'Smart factories, robotics, and digital twins for industrial operations.' },
  { icon: 'layers', name: 'Enterprise Platforms', description: 'Vertical SaaS for finance, logistics, healthcare, and government.' },
  { icon: 'network', name: 'Smart Infrastructure', description: 'IoT mesh, smart grids, intelligent transport, smart cities.' },
  { icon: 'shield', name: 'Cyber & Sovereignty', description: 'Cryptographic infrastructure, secure compute, sovereign data systems.' },
];
