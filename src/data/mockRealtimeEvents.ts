import type { TicketRealtimeEvent } from '../types/realtime';
import { mockTickets } from './mockTickets';

export const mockRealtimeEvents: TicketRealtimeEvent[] = [
  {
    type: 'ticket.updated',
    ticketId: mockTickets[0].id,
    createdAt: new Date().toISOString(),
    payload: {
      ticket: {
        status: 'Waiting',
        assignedTo: 'Dispatch Team',
      },
    },
  },
  {
    type: 'ticket.resolved',
    ticketId: mockTickets[1].id,
    createdAt: new Date().toISOString(),
    payload: {},
  },
];
