import { mockTickets } from '../../data/mockTickets';
import type { TicketRealtimeEvent } from '../../types/interaction';

export function getMockRealtimeEvents(): TicketRealtimeEvent[] {
  const firstTicket = mockTickets[0];
  const secondTicket = mockTickets[1];

  return [
    {
      eventType: 'ticket.updated',
      ticketId: firstTicket?.id ?? 'TCK-000',
      timestamp: new Date().toISOString(),
      payload: {
        priority: firstTicket?.priority ?? 'High',
        status: firstTicket?.status ?? 'In Progress',
      },
    },
    {
      eventType: 'interaction.created',
      ticketId: secondTicket?.id ?? 'TCK-000',
      timestamp: new Date().toISOString(),
      payload: {
        channel: secondTicket?.channel ?? 'email',
        status: secondTicket?.status ?? 'Triaged',
      },
    },
  ];
}
