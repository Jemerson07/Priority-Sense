import type { Ticket } from '../../types/ticket';
import { InboxQuickSummary } from './InboxQuickSummary';
import { InboxWorkspaceShell } from './InboxWorkspaceShell';

type InboxPageCompositionProps = {
  tickets: Ticket[];
  selectedTicket: Ticket;
};

export function InboxPageComposition({ tickets, selectedTicket }: InboxPageCompositionProps) {
  return (
    <section className="page-shell">
      <InboxQuickSummary tickets={tickets} />
      <InboxWorkspaceShell tickets={tickets} selectedTicket={selectedTicket} />
    </section>
  );
}
