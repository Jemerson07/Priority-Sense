import type { TicketRealtimeEvent } from '../types/realtime';

export function formatRealtimeEventLabel(event: TicketRealtimeEvent) {
  switch (event.type) {
    case 'ticket.created':
      return 'Ticket created';
    case 'ticket.updated':
      return 'Ticket updated';
    case 'ticket.resolved':
      return 'Ticket resolved';
    case 'interaction.created':
      return 'Interaction created';
    default:
      return 'Queue event';
  }
}

export function groupEventsByTicket(events: TicketRealtimeEvent[]) {
  return events.reduce<Record<string, TicketRealtimeEvent[]>>((acc, event) => {
    if (!acc[event.ticketId]) {
      acc[event.ticketId] = [];
    }

    acc[event.ticketId].push(event);
    return acc;
  }, {});
}
