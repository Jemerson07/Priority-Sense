export type DashboardMetric = {
  label: string;
  value: string;
  helper: string;
};

export type QueueSnapshot = {
  totalTickets: number;
  criticalCount: number;
  highCount: number;
  averageSlaMinutes: number;
  whatsappShare: number;
  emailShare: number;
  resolvedCount: number;
};
