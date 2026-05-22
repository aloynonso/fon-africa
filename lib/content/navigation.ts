export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Energy', href: '/energy' },
  { label: 'Agro', href: '/agro' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Projects', href: '/projects' },
  { label: 'Investors', href: '/investors' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  Group: [
    { label: 'FON Group', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Leadership', href: '/about#leadership' },
    { label: 'ESG', href: '/about#esg' },
  ],
  Divisions: [
    { label: 'Energy', href: '/energy' },
    { label: 'Agro', href: '/agro' },
    { label: 'Technologies', href: '/technologies' },
  ],
  Engage: [
    { label: 'Projects', href: '/projects' },
    { label: 'Investors', href: '/investors' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Media', href: '/media' },
    { label: 'Reports', href: '/media#reports' },
    { label: 'Press Kit', href: '/media#press' },
  ],
  Legal: [
    { label: 'Privacy', href: '/legal/privacy' },
    { label: 'Terms', href: '/legal/terms' },
    { label: 'Disclosures', href: '/legal/disclosures' },
  ],
};
