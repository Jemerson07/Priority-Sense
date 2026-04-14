import type { Ticket } from '../types/ticket';
import type { TicketRealtimeEvent } from '../types/realtime';

export function applyRealtimeTicketEvent(
  tickets: Ticket[],
  event: TicketRealtimeEvent
): Ticket[] {
  switch (event.type) {
    case 'ticket.created': {
      const incoming = event.payload?.ticket as Ticket | undefined;
      if (!incoming) return tickets;
      return [incoming, ...tickets.filter((ticket) => ticket.id !== incoming.id)];
    }

    case 'ticket.updated': {
      const patch = event.payload?.ticket as Partial<Ticket> | undefined;
      if (!patch) return tickets;

      return tickets.map((ticket) =>
        ticket.id === event.ticketId ? { ...ticket, ...patch } : ticket
      );
    }

    case 'ticket.resolved': {
      return tickets.map((ticket) =>
        ticket.id === event.ticketId ? { ...ticket, status: 'Resolved', priority: 'Low' } : ticket
      );
    }

    default:
      return tickets;
  }
}
