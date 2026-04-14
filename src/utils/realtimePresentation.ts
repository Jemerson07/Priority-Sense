import type { TicketRealtimeEvent } from '../types/realtime';

export function getRealtimeEventLabel(event: TicketRealtimeEvent) {
  switch (event.type) {
    case 'ticket.created':
      return 'New ticket received';
    case 'ticket.updated':
      return 'Ticket updated';
    case 'ticket.resolved':
      return 'Ticket resolved';
    case 'interaction.created':
      return 'New interaction logged';
    default:
      return 'Queue event';
  }
}

export function getRealtimeEventTone(event: TicketRealtimeEvent) {
  switch (event.type) {
    case 'ticket.created':
      return 'event-created';
    case 'ticket.updated':
      return 'event-updated';
    case 'ticket.resolved':
      return 'event-resolved';
    case 'interaction.created':
      return 'event-interaction';
    default:
      return 'event-default';
  }
}
