export type Project = {
  id: string;
  name: string;
  division: 'energy' | 'agro' | 'technologies';
  country: string;
  region: string;
  scale?: string;
  capacity?: string;
  value: string;
  status: 'Operational' | 'Construction' | 'Development' | 'Financing' | 'Planning' | 'Pre-construction';
  progress: number;
  description?: string;
};

export const projects: Project[] = [
  // Energy
  { id: 'karoo-bess', name: 'Karoo Battery Network', division: 'energy', country: 'South Africa', region: 'Southern Africa', capacity: '1.2 GWh', value: '$540M', status: 'Pre-construction', progress: 65 },
  { id: 'victoria-solar', name: 'Lake Victoria Solar Belt', division: 'energy', country: 'Uganda', region: 'East Africa', capacity: '310 MW', value: '$310M', status: 'Financing', progress: 40 },
  { id: 'mahikeng-power', name: 'Mahikeng Power Hub', division: 'energy', country: 'South Africa', region: 'Southern Africa', capacity: '180 MW', value: '$220M', status: 'Development', progress: 25 },
  { id: 'copperbelt-ipp', name: 'Copperbelt Industrial PPA', division: 'energy', country: 'Zambia', region: 'Southern Africa', capacity: '450 MW', value: '$380M', status: 'Construction', progress: 78 },
  { id: 'volta-hybrid', name: 'Volta Hybrid Grid', division: 'energy', country: 'Ghana', region: 'West Africa', capacity: '85 MW', value: '$95M', status: 'Operational', progress: 100 },
  { id: 'lagos-distributed', name: 'Lagos Distributed Network', division: 'energy', country: 'Nigeria', region: 'West Africa', capacity: '240 MW', value: '$310M', status: 'Development', progress: 30 },

  // Agro
  { id: 'mahikeng-agro', name: 'Mahikeng Agro/Power', division: 'agro', country: 'South Africa', region: 'Southern Africa', scale: '12,000 ha', value: '$420M', status: 'Development', progress: 35 },
  { id: 'ashanti-corridor', name: 'Ashanti Agro Corridor', division: 'agro', country: 'Ghana', region: 'West Africa', scale: '8,500 ha', value: '$240M', status: 'Planning', progress: 15 },
  { id: 'limpopo-citrus', name: 'Limpopo Citrus Belt', division: 'agro', country: 'South Africa', region: 'Southern Africa', scale: '4,200 ha', value: '$180M', status: 'Operational', progress: 100 },
  { id: 'kafue-wheat', name: 'Kafue Wheat Platform', division: 'agro', country: 'Zambia', region: 'Southern Africa', scale: '15,000 ha', value: '$295M', status: 'Construction', progress: 70 },
  { id: 'niger-rice', name: 'Niger Delta Rice', division: 'agro', country: 'Nigeria', region: 'West Africa', scale: '9,800 ha', value: '$310M', status: 'Financing', progress: 45 },
  { id: 'rift-hort', name: 'Rift Valley Hort Hub', division: 'agro', country: 'Uganda', region: 'East Africa', scale: '3,600 ha', value: '$140M', status: 'Development', progress: 30 },

  // Tech
  { id: 'helios-ai', name: 'Helios AI Platform', division: 'technologies', country: 'South Africa', region: 'Southern Africa', value: '$120M', status: 'Operational', progress: 100 },
  { id: 'sovereign-cloud', name: 'Sovereign Cloud Tier-III', division: 'technologies', country: 'Pan-African', region: 'Continental', value: '$220M', status: 'Operational', progress: 100 },
  { id: 'gridos', name: 'GridOS Energy Software', division: 'technologies', country: 'South Africa', region: 'Southern Africa', value: '$45M', status: 'Construction', progress: 80 },
];
