import type { QueueInsights } from '../../types/queueInsights';
import { InsightGroupCard } from './InsightGroupCard';

type InsightsOverviewSectionProps = {
  insights: QueueInsights;
};

export function InsightsOverviewSection({ insights }: InsightsOverviewSectionProps) {
  return (
    <section className="page-grid three-columns section-gap">
      <InsightGroupCard title="Channels" items={insights.channels} />
      <InsightGroupCard title="Priorities" items={insights.priorities} />
      <InsightGroupCard title="Statuses" items={insights.statuses} />
    </section>
  );
}
