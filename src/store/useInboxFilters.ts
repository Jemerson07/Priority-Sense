import { create } from 'zustand';
import type { TicketChannel, TicketPriority, TicketStatus } from '../types/ticket';

type InboxFiltersStore = {
  search: string;
  channel: TicketChannel | 'all';
  priority: TicketPriority | 'all';
  status: TicketStatus | 'all';
  setSearch: (value: string) => void;
  setChannel: (value: TicketChannel | 'all') => void;
  setPriority: (value: TicketPriority | 'all') => void;
  setStatus: (value: TicketStatus | 'all') => void;
  resetFilters: () => void;
};

const initialState = {
  search: '',
  channel: 'all' as const,
  priority: 'all' as const,
  status: 'all' as const,
};

export const useInboxFilters = create<InboxFiltersStore>((set) => ({
  ...initialState,
  setSearch: (value) => set({ search: value }),
  setChannel: (value) => set({ channel: value }),
  setPriority: (value) => set({ priority: value }),
  setStatus: (value) => set({ status: value }),
  resetFilters: () => set(initialState),
}));
