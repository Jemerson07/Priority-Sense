import type { DashboardAlert } from '../../types/alerts';
import '../../styles/alerts-panel.css';

type AlertsPanelProps = {
  alerts: DashboardAlert[];
};

export function AlertsPanel({ alerts }: AlertsPanelProps) {
  return (
    <section className="surface-card alerts-panel">
      <div>
        <span className="item-meta">Attention layer</span>
        <h3>Queue alerts</h3>
      </div>

      <div className="alerts-list">
        {alerts.map((alert) => (
          <article key={alert.id} className={`alert-item alert-${alert.severity}`}>
            <div>
              <strong>{alert.title}</strong>
              <p>{alert.description}</p>
            </div>
            <span>{alert.metric}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
