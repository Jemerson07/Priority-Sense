import { create } from 'zustand';
import { mockTickets } from '../data/mockTickets';
import type { Ticket, TicketPriority } from '../types/ticket';

type TicketStore = {
  tickets: Ticket[];
  selectedTicketId: string | null;
  activePriorityFilter: TicketPriority | 'All';
  selectTicket: (ticketId: string) => void;
  setPriorityFilter: (priority: TicketPriority | 'All') => void;
  getSelectedTicket: () => Ticket | undefined;
};

export const useTicketStore = create<TicketStore>((set, get) => ({
  tickets: mockTickets,
  selectedTicketId: mockTickets[0]?.id ?? null,
  activePriorityFilter: 'All',
  selectTicket: (ticketId) => set({ selectedTicketId: ticketId }),
  setPriorityFilter: (priority) => set({ activePriorityFilter: priority }),
  getSelectedTicket: () => {
    const { tickets, selectedTicketId } = get();
    return tickets.find((ticket) => ticket.id === selectedTicketId);
  },
}));
