export type InsightItem = {
  label: string;
  value: string;
  helper?: string;
};

export type QueueInsights = {
  channels: InsightItem[];
  priorities: InsightItem[];
  statuses: InsightItem[];
};
