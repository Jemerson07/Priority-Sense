import { useQuery } from '@tanstack/react-query';
import { getRealtimeFeed } from '../services/realtime/realtimeRepository';

export function useRealtimeFeedQuery() {
  return useQuery({
    queryKey: ['realtime-feed'],
    queryFn: getRealtimeFeed,
  });
}
