import '../../styles/ui-extensions.css';

type IntegrationFallbackCardProps = {
  title?: string;
  description?: string;
};

export function IntegrationFallbackCard({
  title = 'Fallback mode active',
  description = 'Live integration is not active yet, so Priority-Sense is currently using resilient local fallback data.',
}: IntegrationFallbackCardProps) {
  return (
    <section className="surface-card integration-fallback-card">
      <strong>{title}</strong>
      <p>{description}</p>
    </section>
  );
}
