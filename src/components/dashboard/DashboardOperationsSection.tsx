import type { QueueInsights } from '../../types/queueInsights';
import { InsightsOverviewSection } from './InsightsOverviewSection';

type DashboardOperationsSectionProps = {
  insights: QueueInsights;
};

export function DashboardOperationsSection({ insights }: DashboardOperationsSectionProps) {
  return (
    <section className="page-shell section-gap">
      <InsightsOverviewSection insights={insights} />
    </section>
  );
}
