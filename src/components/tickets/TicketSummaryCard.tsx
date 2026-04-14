import type { Ticket } from '../../types/ticket';
import { PriorityBadge } from './PriorityBadge';

type TicketSummaryCardProps = {
  ticket: Ticket;
  onOpen?: (ticketId: string) => void;
};

export function TicketSummaryCard({ ticket, onOpen }: TicketSummaryCardProps) {
  return (
    <article className="surface-card inbox-item">
      <div>
        <span className="item-meta">
          {ticket.id} · {ticket.channel} · {ticket.customer}
        </span>
        <h3>{ticket.subject}</h3>
        <p>{ticket.message}</p>
      </div>

      <div className="ticket-actions">
        <PriorityBadge priority={ticket.priority} />
        {onOpen ? (
          <button className="secondary-action compact-action" onClick={() => onOpen(ticket.id)}>
            Open ticket
          </button>
        ) : null}
      </div>
    </article>
  );
}
