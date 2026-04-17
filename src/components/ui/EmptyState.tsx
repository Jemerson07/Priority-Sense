import '../../styles/ui-kit.css';

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <section className="surface-card ui-state-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
