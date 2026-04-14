import { create } from 'zustand';
import type { TicketRealtimeEvent } from '../types/realtime';

type RealtimeFeedStore = {
  events: TicketRealtimeEvent[];
  pushEvent: (event: TicketRealtimeEvent) => void;
  clearEvents: () => void;
};

export const useRealtimeFeed = create<RealtimeFeedStore>((set) => ({
  events: [],
  pushEvent: (event) =>
    set((state) => ({
      events: [event, ...state.events].slice(0, 50),
    })),
  clearEvents: () => set({ events: [] }),
}));
