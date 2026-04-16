import type { InsightItem } from '../../types/queueInsights';

type InsightGroupCardProps = {
  title: string;
  items: InsightItem[];
};

export function InsightGroupCard({ title, items }: InsightGroupCardProps) {
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
