import '../../styles/page-shell.css';

const inboxItems = [
  {
    id: 'TCK-104',
    channel: 'WhatsApp',
    subject: 'Vehicle blocked before route departure',
    priority: 'Critical',
  },
  {
    id: 'TCK-098',
    channel: 'Email',
    subject: 'Driver app access issue',
    priority: 'High',
  },
  {
    id: 'TCK-091',
    channel: 'WhatsApp',
    subject: 'Maintenance schedule clarification',
    priority: 'Medium',
  },
];

export function InboxPage() {
  return (
    <section className="page-shell section-gap">
      <article className="surface-card feature-panel">
        <h2>Unified inbox</h2>
        <p>
          This page will centralize inbound requests from email and WhatsApp, keeping one queue for
          triage, assignment and SLA visibility.
        </p>
      </article>

      <div className="page-grid one-column">
        {inboxItems.map((item) => (
          <article key={item.id} className="surface-card inbox-item">
            <div>
              <span className="item-meta">{item.id} · {item.channel}</span>
              <h3>{item.subject}</h3>
            </div>
            <span className="priority-pill">{item.priority}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
