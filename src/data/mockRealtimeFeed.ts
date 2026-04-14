import type { TicketRealtimeEvent } from '../types/realtime';

export const mockRealtimeFeed: TicketRealtimeEvent[] = [
  {
    type: 'ticket.created',
    ticketId: 'TCK-104',
    createdAt: '2026-04-14T10:12:00-03:00',
    payload: { channel: 'whatsapp', priority: 'Critical' },
  },
  {
    type: 'ticket.updated',
    ticketId: 'TCK-098',
    createdAt: '2026-04-14T10:16:00-03:00',
    payload: { status: 'Triaged' },
  },
  {
    type: 'interaction.created',
    ticketId: 'TCK-091',
    createdAt: '2026-04-14T10:18:00-03:00',
    payload: { channel: 'whatsapp' },
  }
];
