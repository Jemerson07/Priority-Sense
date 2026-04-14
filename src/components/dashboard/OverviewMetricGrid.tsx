import type { DashboardMetric } from '../../types/dashboard';
import '../../styles/dashboard-widgets.css';

type OverviewMetricGridProps = {
  metrics: DashboardMetric[];
};

export function OverviewMetricGrid({ metrics }: OverviewMetricGridProps) {
  return (
    <div className="dashboard-grid four-columns">
      {metrics.map((metric) => (
        <article key={metric.label} className="surface-card metric-surface dashboard-widget">
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
          <small>{metric.helper}</small>
        </article>
      ))}
    </div>
  );
}
