import { useMemo } from 'react';
import { getMockRealtimeEvents } from '../services/realtime/mockTicketEvents';

export function useEventFeed() {
  const events = useMemo(() => getMockRealtimeEvents(), []);

  return {
    events,
    isLive: false,
    source: 'mock-fallback' as const,
  };
}
