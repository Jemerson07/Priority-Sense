export type InsightItem = {
  label: string;
  value: string;
  helper: string;
};

export type QueueInsightGroup = {
  title: string;
  items: InsightItem[];
};
