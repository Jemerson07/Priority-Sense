import type { ConnectorCardView } from '../../types/settings';
import '../../styles/settings-page.css';

type ConnectorCardProps = {
  connector: ConnectorCardView;
};

export function ConnectorCard({ connector }: ConnectorCardProps) {
  return (
    <article className="surface-card connector-card">
      <div className="connector-card-header">
        <div>
          <span className="item-meta">Connector</span>
          <h3>{connector.name}</h3>
        </div>
        <span className={`connector-status connector-${connector.status}`}>
          {connector.status}
        </span>
      </div>

      <p>{connector.description}</p>

      <button className="secondary-action compact-action">{connector.actionLabel}</button>
    </article>
  );
}
