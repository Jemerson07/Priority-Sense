import { mockRealtimeFeed } from '../../data/mockRealtimeFeed';
import type { TicketRealtimeEvent } from '../../types/realtime';

export async function getRealtimeFeed() {
  return mockRealtimeFeed as TicketRealtimeEvent[];
}
