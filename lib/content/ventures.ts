export type Venture = {
  code: string;
  name: string;
  focus: string;
  stage: 'Pilot' | 'Seed' | 'Series A' | 'Series B' | 'Series C' | 'Growth' | 'Operational';
  description: string;
};

export const ventures: Venture[] = [
  { code: 'T01', name: 'Helios AI', focus: 'Foundation Models · NLP', stage: 'Series B', description: 'Pan-African LLM platform with Swahili, Hausa, Yoruba, Zulu, Amharic.' },
  { code: 'T02', name: 'Sovereign Cloud', focus: 'Data Center · IaaS', stage: 'Operational', description: 'Tier-III data center network across Johannesburg, Lagos, Nairobi.' },
  { code: 'T03', name: 'AgriSense', focus: 'Vertical AI', stage: 'Growth', description: 'Satellite-driven yield intelligence for FON Agro and continental clients.' },
  { code: 'T04', name: 'GridOS', focus: 'Energy Software', stage: 'Series A', description: 'Dispatch optimization and asset management for FON Energy assets.' },
  { code: 'T05', name: 'TerraID', focus: 'Digital Identity', stage: 'Pilot', description: 'Sovereign-grade identity infrastructure for government and finance.' },
  { code: 'T06', name: 'Industria', focus: 'Smart Factory', stage: 'Series A', description: 'Digital twin and automation platform for industrial deployments.' },
];
