import '../../styles/page-shell.css';

const dashboardCards = [
  { label: 'Critical requests', value: '08', helper: 'Immediate response lane' },
  { label: 'Average first reply', value: '06m', helper: 'Across all active channels' },
  { label: 'WhatsApp volume', value: '61%', helper: 'Main entry channel today' },
  { label: 'Priority confidence', value: '91%', helper: 'Rules applied successfully' },
];

export function DashboardPage() {
  return (
    <section className="page-shell">
      <div className="page-grid four-columns">
        {dashboardCards.map((card) => (
          <article key={card.label} className="surface-card metric-surface">
            <span>{card.label}</span>
            <strong>{card.value}</strong>
            <small>{card.helper}</small>
          </article>
        ))}
      </div>

      <div className="page-grid two-columns section-gap">
        <article className="surface-card feature-panel">
          <h2>Priority flow</h2>
          <p>
            Email and WhatsApp requests arrive, pass through validation, receive a score and are
            routed to the right queue according to urgency, SLA and client impact.
          </p>
        </article>

        <article className="surface-card feature-panel">
          <h2>Operational focus</h2>
          <p>
            The next milestone is wiring this page to live data from Supabase and n8n workflows so
            the dashboard reflects the real ticket queue in motion.
          </p>
        </article>
      </div>
    </section>
  );
}
