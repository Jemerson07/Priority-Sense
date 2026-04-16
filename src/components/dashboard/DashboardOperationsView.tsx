import type { DashboardMetric } from '../../types/dashboard';
import type { TicketRealtimeEvent } from '../../types/realtime';
import type { QueueInsights } from '../../types/queueInsights';
import { DashboardOverviewPanel } from './DashboardOverviewPanel';
import { InsightsOverviewSection } from './InsightsOverviewSection';

type DashboardOperationsViewProps = {
  metrics: DashboardMetric[];
  events: TicketRealtimeEvent[];
  insights: QueueInsights;
};

export function DashboardOperationsView({
  metrics,
  events,
  insights,
}: DashboardOperationsViewProps) {
  return (
    <section className="page-shell">
      <DashboardOverviewPanel metrics={metrics} events={events} />
      <InsightsOverviewSection insights={insights} />
    </section>
  );
}
