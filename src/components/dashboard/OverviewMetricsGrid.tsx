import type { DashboardMetric } from '../../types/dashboard';

type OverviewMetricsGridProps = {
  metrics: DashboardMetric[];
};

export function OverviewMetricsGrid({ metrics }: OverviewMetricsGridProps) {
  return (
    <div className="page-grid four-columns">
      {metrics.map((metric) => (
        <article key={metric.label} className="surface-card metric-surface">
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
          <small>{metric.helper}</small>
        </article>
      ))}
    </div>
  );
}
