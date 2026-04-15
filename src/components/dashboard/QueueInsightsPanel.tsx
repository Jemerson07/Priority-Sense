import type { QueueInsightGroup } from '../../types/insights';
import '../../styles/queue-insights.css';

type QueueInsightsPanelProps = {
  groups: QueueInsightGroup[];
};

export function QueueInsightsPanel({ groups }: QueueInsightsPanelProps) {
  return (
    <section className="queue-insights-grid">
      {groups.map((group) => (
        <article key={group.title} className="surface-card queue-insight-card">
          <div className="queue-insight-header">
            <span className="item-meta">Operational insight</span>
            <h3>{group.title}</h3>
          </div>

          <div className="queue-insight-list">
            {group.items.map((item) => (
              <div key={`${group.title}-${item.label}`} className="queue-insight-item">
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.helper}</p>
                </div>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
