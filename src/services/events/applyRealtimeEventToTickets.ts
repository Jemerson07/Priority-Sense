import type { Ticket } from '../../types/ticket';
import type { TicketRealtimeEvent } from '../../types/realtime';

type EventPayload = {
  status?: Ticket['status'];
  priority?: Ticket['priority'];
  priorityScore?: number;
  assignedTo?: string;
};

export function applyRealtimeEventToTickets(
  tickets: Ticket[],
  event: TicketRealtimeEvent
): Ticket[] {
  return tickets.map((ticket) => {
    if (ticket.id !== event.ticketId) {
      return ticket;
    }

    const payload = (event.payload ?? {}) as EventPayload;

    return {
      ...ticket,
      status: payload.status ?? ticket.status,
      priority: payload.priority ?? ticket.priority,
      priorityScore: payload.priorityScore ?? ticket.priorityScore,
      assignedTo: payload.assignedTo ?? ticket.assignedTo,
    };
  });
}
