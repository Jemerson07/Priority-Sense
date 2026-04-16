import type { DashboardAlert, QueueTrend } from '../types/alerts';

export const dashboardAlertsMock: DashboardAlert[] = [
  {
    id: 'ALT-01',
    title: 'Critical SLA breach risk',
    description: 'Three critical tickets are approaching the response deadline in less than 10 minutes.',
    severity: 'critical',
    metric: '3 tickets',
  },
  {
    id: 'ALT-02',
    title: 'WhatsApp queue spike',
    description: 'Inbound WhatsApp volume increased sharply compared with the previous hour.',
    severity: 'warning',
    metric: '+18%',
  },
  {
    id: 'ALT-03',
    title: 'Resolved flow stable',
    description: 'Resolution throughput remains healthy for the current operational window.',
    severity: 'info',
    metric: '9 resolved',
  },
];

export const queueTrendsMock: QueueTrend[] = [
  {
    label: 'Critical queue',
    value: '+2',
    direction: 'up',
    helper: 'Compared to the last 30 minutes',
  },
  {
    label: 'Average response',
    value: '-4m',
    direction: 'down',
    helper: 'Faster than the previous cycle',
  },
  {
    label: 'Resolution flow',
    value: 'Stable',
    direction: 'stable',
    helper: 'No major variance detected',
  },
];
