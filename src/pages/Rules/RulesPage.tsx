import '../../styles/page-shell.css';

const ruleGroups = [
  { title: 'Urgency keywords', value: '+35', helper: 'blocked, urgent, stopped, unavailable' },
  { title: 'VIP customer impact', value: '+20', helper: 'Strategic accounts receive faster lanes' },
  { title: 'Repeated request', value: '+15', helper: 'Messages duplicated in less than 24 hours' },
];

export function RulesPage() {
  return (
    <section className="page-shell">
      <article className="surface-card feature-panel">
        <h2>Priority rules engine</h2>
        <p>
          The rules panel will define score weights for urgency, customer impact, channel and SLA.
          This is the heart of the Priority-Sense decision layer.
        </p>
      </article>

      <div className="page-grid three-columns section-gap">
        {ruleGroups.map((rule) => (
          <article key={rule.title} className="surface-card metric-surface">
            <span>{rule.title}</span>
            <strong>{rule.value}</strong>
            <small>{rule.helper}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
