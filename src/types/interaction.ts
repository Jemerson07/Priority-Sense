export type InteractionDirection = 'inbound' | 'outbound' | 'internal';
export type InteractionChannel = 'email' | 'whatsapp' | 'system';

export type TicketInteraction = {
  id: string;
  ticketId: string;
  direction: InteractionDirection;
  channel: InteractionChannel;
  author?: string;
  message: string;
  createdAt: string;
};

export type TicketRealtimeEvent = {
  eventType: 'ticket.created' | 'ticket.updated' | 'interaction.created';
  ticketId: string;
  timestamp: string;
  payload: Record<string, unknown>;
};
