import type { TicketInteraction } from '../types/interaction';

export const mockInteractions: TicketInteraction[] = [
  {
    id: 'INT-001',
    ticketId: 'TCK-104',
    direction: 'inbound',
    channel: 'whatsapp',
    author: 'Fleet Supervisor',
    message: 'The vehicle cannot start the route because the blocking system is active.',
    createdAt: '2026-04-14T08:10:00-03:00',
  },
  {
    id: 'INT-002',
    ticketId: 'TCK-104',
    direction: 'internal',
    channel: 'system',
    author: 'Priority Engine',
    message: 'Priority score updated to 96 due to blocked route keywords and SLA risk.',
    createdAt: '2026-04-14T08:11:00-03:00',
  },
  {
    id: 'INT-003',
    ticketId: 'TCK-098',
    direction: 'inbound',
    channel: 'email',
    author: 'Porto Service Hub',
    message: 'The driver cannot access the application after password reset.',
    createdAt: '2026-04-14T08:42:00-03:00',
  },
  {
    id: 'INT-004',
    ticketId: 'TCK-098',
    direction: 'outbound',
    channel: 'email',
    author: 'Support Team',
    message: 'We are validating the authentication flow and will return shortly.',
    createdAt: '2026-04-14T08:50:00-03:00',
  },
];
