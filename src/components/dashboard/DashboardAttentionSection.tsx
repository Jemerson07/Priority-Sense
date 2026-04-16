import type { DashboardAlert, QueueTrend } from '../../types/alerts';
import { AlertsPanel } from './AlertsPanel';
import { QueueTrendsPanel } from './QueueTrendsPanel';

type DashboardAttentionSectionProps = {
  alerts: DashboardAlert[];
  trends: QueueTrend[];
};

export function DashboardAttentionSection({ alerts, trends }: DashboardAttentionSectionProps) {
  return (
    <section className="page-grid two-columns section-gap">
      <AlertsPanel alerts={alerts} />
      <QueueTrendsPanel trends={trends} />
    </section>
  );
}
