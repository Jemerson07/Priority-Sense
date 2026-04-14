import '../../styles/page-shell.css';

export function SettingsPage() {
  return (
    <section className="page-shell">
      <article className="surface-card feature-panel">
        <h2>Environment settings</h2>
        <p>
          This area will configure integrations such as Supabase, email credentials, WhatsApp
          sandbox variables and automation endpoints from n8n.
        </p>
      </article>

      <div className="page-grid two-columns section-gap">
        <article className="surface-card feature-panel">
          <h3>Connectors</h3>
          <p>Email IMAP/SMTP, Twilio WhatsApp Sandbox and webhook endpoints.</p>
        </article>
        <article className="surface-card feature-panel">
          <h3>Operational rules</h3>
          <p>SLA windows, default assignees, queue labels and triage thresholds.</p>
        </article>
      </div>
    </section>
  );
}
