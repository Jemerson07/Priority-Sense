import type { Ticket } from '../../types/ticket';
import { getPriorityFromScore } from '../../utils/priority';

type N8nInboundPayload = {
  id?: string;
  customer?: string;
  channel?: 'email' | 'whatsapp';
  subject?: string;
  message?: string;
  score?: number;
  status?: Ticket['status'];
  slaMinutes?: number;
  tags?: string[];
  assignedTo?: string;
};

export function mapN8nPayloadToTicket(payload: N8nInboundPayload): Ticket {
  const priorityScore = payload.score ?? 0;

  return {
    id: payload.id ?? `TCK-${Math.floor(Math.random() * 900 + 100)}`,
    customer: payload.customer ?? 'Unknown customer',
    channel: payload.channel ?? 'email',
    subject: payload.subject ?? 'Untitled request',
    message: payload.message ?? 'No message provided',
    createdAt: new Date().toISOString(),
    priority: getPriorityFromScore(priorityScore),
    priorityScore,
    status: payload.status ?? 'New',
    slaMinutes: payload.slaMinutes ?? 60,
    tags: payload.tags ?? [],
    assignedTo: payload.assignedTo,
  };
}
