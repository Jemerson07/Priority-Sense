import type { DashboardMetric } from '../../types/dashboard';
import '../../styles/page-shell.css';

type DashboardMetricsGridProps = {
  metrics: DashboardMetric[];
};

export function DashboardMetricsGrid({ metrics }: DashboardMetricsGridProps) {
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
