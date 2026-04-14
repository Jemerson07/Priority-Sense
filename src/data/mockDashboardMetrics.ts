import type { DashboardMetric } from '../types/dashboard';

export const mockDashboardMetrics: DashboardMetric[] = [
  {
    label: 'Critical requests',
    value: '08',
    helper: 'Immediate response lane',
  },
  {
    label: 'High priority queue',
    value: '12',
    helper: 'Needs fast triage',
  },
  {
    label: 'Average SLA target',
    value: '49m',
    helper: 'Across active operational tickets',
  },
  {
    label: 'WhatsApp volume',
    value: '61%',
    helper: 'Primary inbound channel share',
  },
];
