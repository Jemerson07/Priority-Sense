import type { DashboardMetric } from '../../types/dashboard';
import type { TicketRealtimeEvent } from '../../types/realtime';
import type { QueueInsights } from '../../types/queueInsights';
import type { DashboardAlert, QueueTrend } from '../../types/alerts';
import { DashboardHomeComposition } from './DashboardHomeComposition';
import { DashboardAttentionSection } from './DashboardAttentionSection';

type OperationalHomePageProps = {
  metrics: DashboardMetric[];
  events: TicketRealtimeEvent[];
  insights: QueueInsights;
  alerts: DashboardAlert[];
  trends: QueueTrend[];
};

export function OperationalHomePage({ metrics, events, insights, alerts, trends }: OperationalHomePageProps) {
  return (
    <section className="page-shell">
      <DashboardHomeComposition metrics={metrics} events={events} insights={insights} />
      <DashboardAttentionSection alerts={alerts} trends={trends} />
    </section>
  );
}
