import { mockTickets } from '../../data/mockTickets';
import { fetchTickets } from './ticketService';
import type { Ticket } from '../../types/ticket';

export async function getTickets() {
  try {
    const remoteTickets = await fetchTickets();

    if (remoteTickets.length > 0) {
      return remoteTickets;
    }

    return mockTickets;
  } catch {
    return mockTickets;
  }
}

export async function getTicketById(ticketId: string) {
  const tickets = await getTickets();
  return tickets.find((ticket) => ticket.id === ticketId) as Ticket | undefined;
}
