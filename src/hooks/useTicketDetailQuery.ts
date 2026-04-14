import { useQuery } from '@tanstack/react-query';
import { getTicketById } from '../services/tickets/ticketRepository';

export function useTicketDetailQuery(ticketId?: string) {
  return useQuery({
    queryKey: ['ticket', ticketId],
    queryFn: () => getTicketById(ticketId ?? ''),
    enabled: Boolean(ticketId),
  });
}
