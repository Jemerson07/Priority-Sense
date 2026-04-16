import type { QueueInsights } from '../../types/queueInsights';
import '../../styles/queue-insights.css';

type OperationalInsightsPanelProps = {
  insights: QueueInsights;
};

function InsightGroup({ title, items }: { title: string; items: QueueInsights[keyof QueueInsights] }) {
  return (
    <article className="surface-card insight-group">
      <h3>{title}</h3>
      <div className="insight-list">
        {items.map((item) => (
          <div key={item.label} className="insight-item">
            <div>
              <strong>{item.label}</strong>
              {item.helper ? <p>{item.helper}</p> : null}
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export function OperationalInsightsPanel({ insights }: OperationalInsightsPanelProps) {
  return (
    <section className="page-grid three-columns section-gap">
      <InsightGroup title="Channels" items={insights.channels} />
      <InsightGroup title="Priorities" items={insights.priorities} />
      <InsightGroup title="Statuses" items={insights.statuses} />
    </section>
  );
}
