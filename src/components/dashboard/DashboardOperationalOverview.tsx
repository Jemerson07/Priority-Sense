import { mockDashboardMetrics } from '../../data/mockDashboardMetrics';
import { mockRealtimeFeed } from '../../data/mockRealtimeFeed';
import { OverviewMetricsGrid } from './OverviewMetricsGrid';
import { RealtimeActivityPanel } from '../realtime/RealtimeActivityPanel';
import '../../styles/dashboard-overview.css';

export function DashboardOperationalOverview() {
  return (
    <section className="dashboard-overview">
      <OverviewMetricsGrid metrics={mockDashboardMetrics} />

      <div className="page-grid two-columns section-gap dashboard-overview-grid">
        <article className="surface-card feature-panel">
          <h2>Queue overview</h2>
          <p>
            Priority-Sense is prepared to centralize urgent email and WhatsApp requests, exposing the
            operational state through metrics, filters and live queue activity.
          </p>
        </article>

        <RealtimeActivityPanel events={mockRealtimeFeed} />
      </div>
    </section>
  );
}
