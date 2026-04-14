import { useQuery } from '@tanstack/react-query';
import { getTickets } from '../services/tickets/ticketRepository';

export function useTicketsQuery() {
  return useQuery({
    queryKey: ['tickets'],
    queryFn: getTickets,
  });
}
