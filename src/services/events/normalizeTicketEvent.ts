import type { TicketRealtimeEvent } from '../../types/realtime';

export function normalizeTicketEvent(raw: Record<string, unknown>): TicketRealtimeEvent {
  return {
    type: (raw.type as TicketRealtimeEvent['type']) ?? 'ticket.updated',
    ticketId: String(raw.ticketId ?? raw.ticket_id ?? 'unknown-ticket'),
    createdAt: String(raw.createdAt ?? raw.created_at ?? new Date().toISOString()),
    payload: raw,
  };
}
