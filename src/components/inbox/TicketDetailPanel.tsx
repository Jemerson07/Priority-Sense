import type { Ticket } from '../../types/ticket';
import { PriorityBadge } from '../tickets/PriorityBadge';
import '../../styles/ticket-detail-panel.css';

type TicketDetailPanelProps = {
  ticket: Ticket;
};

export function TicketDetailPanel({ ticket }: TicketDetailPanelProps) {
  return (
    <section className="surface-card ticket-detail-panel">
      <div className="ticket-detail-header">
        <div>
          <span className="item-meta">
            {ticket.id} · {ticket.channel} · {ticket.customer}
          </span>
          <h3>{ticket.subject}</h3>
        </div>
        <PriorityBadge priority={ticket.priority} />
      </div>

      <p className="ticket-detail-message">{ticket.message}</p>

      <div className="ticket-detail-grid">
        <article className="ticket-detail-card">
          <span>Assigned to</span>
          <strong>{ticket.assignedTo ?? 'Unassigned'}</strong>
        </article>
        <article className="ticket-detail-card">
          <span>Status</span>
          <strong>{ticket.status}</strong>
        </article>
        <article className="ticket-detail-card">
          <span>SLA target</span>
          <strong>{ticket.slaMinutes} min</strong>
        </article>
        <article className="ticket-detail-card">
          <span>Priority score</span>
          <strong>{ticket.priorityScore}</strong>
        </article>
      </div>

      <div className="ticket-tag-row">
        {ticket.tags.map((tag) => (
          <span key={tag} className="ticket-tag">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
