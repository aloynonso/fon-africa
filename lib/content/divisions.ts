/**
 * FON Divisions — content registry
 * CMS-ready: replace with API/CMS fetch in production.
 */

export type Division = {
  slug: 'energy' | 'agro' | 'technologies';
  code: string;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  theme: 'energy' | 'agro' | 'tech';
  metric: { value: string; label: string };
  href: string;
};

export const divisions: Division[] = [
  {
    slug: 'energy',
    code: '01',
    name: 'Energy',
    fullName: 'FON Energy',
    tagline: 'Powering the continent through sovereign energy.',
    description:
      'Develops, finances, and operates renewable generation, storage, and grid infrastructure across Africa — closing the continental energy deficit through institutional capital and engineering rigor.',
    theme: 'energy',
    metric: { value: '4.6 GW', label: 'Pipeline Capacity' },
    href: '/energy',
  },
  {
    slug: 'agro',
    code: '02',
    name: 'Agro',
    fullName: 'FON Agro',
    tagline: 'Feeding nations. Building the food system.',
    description:
      'Builds vertically integrated agricultural and food-processing ecosystems — from large-scale commercial farms to value-add manufacturing and export platforms — anchoring continental food security.',
    theme: 'agro',
    metric: { value: '53K ha', label: 'Land Under Management' },
    href: '/agro',
  },
  {
    slug: 'technologies',
    code: '03',
    name: 'Technologies',
    fullName: 'FON Technologies',
    tagline: 'The intelligence layer of an African century.',
    description:
      "Builds and operates the digital backbone of FON's industrial platform — applied AI, sovereign cloud, automation, and enterprise software at continental scale.",
    theme: 'tech',
    metric: { value: '12', label: 'Active Ventures' },
    href: '/technologies',
  },
];

export const getDivision = (slug: Division['slug']) =>
  divisions.find((d) => d.slug === slug);
