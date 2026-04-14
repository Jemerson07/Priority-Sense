import type { Ticket } from '../types/ticket';

type Filters = {
  search: string;
  channel: Ticket['channel'] | 'all';
  priority: Ticket['priority'] | 'all';
  status: Ticket['status'] | 'all';
};

export function filterTickets(tickets: Ticket[], filters: Filters) {
  const normalizedSearch = filters.search.trim().toLowerCase();

  return tickets.filter((ticket) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      ticket.subject.toLowerCase().includes(normalizedSearch) ||
      ticket.message.toLowerCase().includes(normalizedSearch) ||
      ticket.customer.toLowerCase().includes(normalizedSearch) ||
      ticket.id.toLowerCase().includes(normalizedSearch);

    const matchesChannel = filters.channel === 'all' || ticket.channel === filters.channel;
    const matchesPriority = filters.priority === 'all' || ticket.priority === filters.priority;
    const matchesStatus = filters.status === 'all' || ticket.status === filters.status;

    return matchesSearch && matchesChannel && matchesPriority && matchesStatus;
  });
}
