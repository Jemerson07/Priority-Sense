import type { DashboardMetric } from '../../types/dashboard';
import type { TicketRealtimeEvent } from '../../types/realtime';
import type { QueueInsights } from '../../types/queueInsights';
import { DashboardOverviewPanel } from './DashboardOverviewPanel';
import { DashboardOperationsSection } from './DashboardOperationsSection';

type DashboardHomeCompositionProps = {
  metrics: DashboardMetric[];
  events: TicketRealtimeEvent[];
  insights: QueueInsights;
};

export function DashboardHomeComposition({ metrics, events, insights }: DashboardHomeCompositionProps) {
  return (
    <section className="page-shell">
      <DashboardOverviewPanel metrics={metrics} events={events} />
      <DashboardOperationsSection insights={insights} />
    </section>
  );
}
