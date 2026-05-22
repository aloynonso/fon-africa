export type Metric = {
  value: string;
  suffix?: string;
  label: string;
};

export const groupMetrics: Metric[] = [
  { value: '14', label: 'Countries Active' },
  { value: '47', label: 'Active Projects' },
  { value: '8.2', suffix: 'B USD', label: 'Pipeline Value' },
  { value: '62', suffix: 'K+', label: 'Jobs Supported' },
  { value: '4.6', suffix: 'GW', label: 'Energy Pipeline' },
];

export const energyMetrics: Metric[] = [
  { value: '4.6', suffix: 'GW', label: 'Pipeline Capacity' },
  { value: '2.1', suffix: 'B USD', label: 'Energy AUM' },
  { value: '8', label: 'Countries Active' },
  { value: '12', suffix: 'M+', label: 'People Powered' },
];

export const agroMetrics: Metric[] = [
  { value: '53', suffix: 'K ha', label: 'Land Under Mgmt' },
  { value: '1.6', suffix: 'B USD', label: 'Agro AUM' },
  { value: '7', label: 'Countries Active' },
  { value: '42', suffix: 'K+', label: 'Jobs Supported' },
];

export const techMetrics: Metric[] = [
  { value: '12', label: 'Active Ventures' },
  { value: '850', suffix: 'M USD', label: 'Tech AUM' },
  { value: '94', label: 'Engineers' },
  { value: '5', label: 'Data Center Sites' },
];
