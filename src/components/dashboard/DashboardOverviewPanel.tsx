import type { DashboardMetric } from '../../types/dashboard';
import type { TicketRealtimeEvent } from '../../types/realtime';
import { OverviewMetricsGrid } from './OverviewMetricsGrid';
import { RealtimeActivityPanel } from '../realtime/RealtimeActivityPanel';

type DashboardOverviewPanelProps = {
  metrics: DashboardMetric[];
  events: TicketRealtimeEvent[];
};

export function DashboardOverviewPanel({ metrics, events }: DashboardOverviewPanelProps) {
  return (
    <section className="page-shell section-gap">
      <OverviewMetricsGrid metrics={metrics} />
      <RealtimeActivityPanel events={events} />
    </section>
  );
}
