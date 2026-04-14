export type TicketRealtimeEventType =
  | 'ticket.created'
  | 'ticket.updated'
  | 'ticket.resolved'
  | 'interaction.created';

export type TicketRealtimeEvent = {
  type: TicketRealtimeEventType;
  ticketId: string;
  createdAt: string;
  payload?: Record<string, unknown>;
};
