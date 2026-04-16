export type AlertSeverity = 'info' | 'warning' | 'critical';

export type DashboardAlert = {
  id: string;
  title: string;
  description: string;
  severity: AlertSeverity;
  metric: string;
};

export type QueueTrend = {
  label: string;
  value: string;
  direction: 'up' | 'down' | 'stable';
  helper: string;
};
