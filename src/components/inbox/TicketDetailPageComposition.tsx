import type { Ticket } from '../../types/ticket';
import { TicketDetailPanel } from './TicketDetailPanel';

type TicketDetailPageCompositionProps = {
  ticket: Ticket;
};

export function TicketDetailPageComposition({ ticket }: TicketDetailPageCompositionProps) {
  return (
    <section className="page-shell">
      <TicketDetailPanel ticket={ticket} />
    </section>
  );
}
