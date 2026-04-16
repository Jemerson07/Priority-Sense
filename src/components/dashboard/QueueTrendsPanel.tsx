import type { QueueTrend } from '../../types/alerts';
import '../../styles/alerts-panel.css';

type QueueTrendsPanelProps = {
  trends: QueueTrend[];
};

export function QueueTrendsPanel({ trends }: QueueTrendsPanelProps) {
  return (
    <section className="surface-card alerts-panel">
      <div>
        <span className="item-meta">Trend layer</span>
        <h3>Queue trends</h3>
      </div>

      <div className="alerts-list">
        {trends.map((trend) => (
          <article key={trend.label} className={`alert-item trend-${trend.direction}`}>
            <div>
              <strong>{trend.label}</strong>
              <p>{trend.helper}</p>
            </div>
            <span>{trend.value}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
