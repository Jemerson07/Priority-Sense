import '../../styles/ui-states.css';

type EmptyStateCardProps = {
  title: string;
  description: string;
};

export function EmptyStateCard({ title, description }: EmptyStateCardProps) {
  return (
    <section className="surface-card state-card">
      <span className="item-meta">Empty state</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
