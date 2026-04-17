import '../../styles/ui-extensions.css';

type QueueBlankStateProps = {
  title?: string;
  description?: string;
};

export function QueueBlankState({
  title = 'No tickets in this queue',
  description = 'The current filters or queue state returned no operational tickets to display.',
}: QueueBlankStateProps) {
  return (
    <section className="surface-card queue-empty-state">
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
