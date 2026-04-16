import type { Ticket } from '../../types/ticket';
import { TicketFilterBar } from '../filters/TicketFilterBar';
import { TicketSummaryCard } from '../tickets/TicketSummaryCard';
import { TicketDetailPanel } from './TicketDetailPanel';
import '../../styles/inbox-workspace.css';

type InboxWorkspaceShellProps = {
  tickets: Ticket[];
  selectedTicket: Ticket;
};

export function InboxWorkspaceShell({ tickets, selectedTicket }: InboxWorkspaceShellProps) {
  return (
    <section className="page-shell">
      <TicketFilterBar />

      <div className="inbox-workspace-grid">
        <div className="inbox-list-column">
          {tickets.map((ticket) => (
            <TicketSummaryCard key={ticket.id} ticket={ticket} />
          ))}
        </div>

        <div className="inbox-detail-column">
          <TicketDetailPanel ticket={selectedTicket} />
        </div>
      </div>
    </section>
  );
}
