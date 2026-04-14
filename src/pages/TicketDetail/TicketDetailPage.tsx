import { useParams } from 'react-router-dom';
import '../../styles/page-shell.css';

export function TicketDetailPage() {
  const { ticketId } = useParams();

  return (
    <section className="page-shell">
      <article className="surface-card feature-panel">
        <h2>Ticket detail</h2>
        <p>
          Ticket <strong>{ticketId}</strong> will show the original message, assigned score,
          interaction history and response timeline.
        </p>
      </article>

      <div className="page-grid two-columns section-gap">
        <article className="surface-card feature-panel">
          <h3>Priority reasoning</h3>
          <p>Display urgency keywords, client status, SLA risk and repeated request patterns.</p>
        </article>
        <article className="surface-card feature-panel">
          <h3>Channel history</h3>
          <p>Track email or WhatsApp replies, automation steps and ownership changes.</p>
        </article>
      </div>
    </section>
  );
}
