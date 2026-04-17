import '../../styles/ui-kit.css';

type LoadingStateProps = {
  label?: string;
};

export function LoadingState({ label = 'Loading operational data...' }: LoadingStateProps) {
  return (
    <section className="surface-card ui-state-card">
      <div className="loading-pulse" />
      <p>{label}</p>
    </section>
  );
}
