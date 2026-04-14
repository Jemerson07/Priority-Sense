import { useMemo } from 'react';
import { useTicketsQuery } from './useTicketsQuery';
import { buildDashboardMetrics } from '../utils/dashboardMetrics';

export function useDashboardMetrics() {
  const ticketsQuery = useTicketsQuery();

  const metrics = useMemo(() => {
    return buildDashboardMetrics(ticketsQuery.data ?? []);
  }, [ticketsQuery.data]);

  return {
    ...ticketsQuery,
    metrics,
  };
}
