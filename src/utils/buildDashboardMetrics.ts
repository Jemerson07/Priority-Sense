import type { Ticket } from '../types/ticket';
import type { DashboardMetric, QueueSnapshot } from '../types/dashboard';

export function buildQueueSnapshot(tickets: Ticket[]): QueueSnapshot {
  const totalTickets = tickets.length;
  const criticalCount = tickets.filter((ticket) => ticket.priority === 'Critical').length;
  const highCount = tickets.filter((ticket) => ticket.priority === 'High').length;
  const resolvedCount = tickets.filter((ticket) => ticket.status === 'Resolved').length;

  const averageSlaMinutes =
    totalTickets > 0
      ? Math.round(tickets.reduce((sum, ticket) => sum + ticket.slaMinutes, 0) / totalTickets)
      : 0;

  const whatsappCount = tickets.filter((ticket) => ticket.channel === 'whatsapp').length;
  const emailCount = tickets.filter((ticket) => ticket.channel === 'email').length;

  return {
    totalTickets,
    criticalCount,
    highCount,
    averageSlaMinutes,
    whatsappShare: totalTickets > 0 ? Math.round((whatsappCount / totalTickets) * 100) : 0,
    emailShare: totalTickets > 0 ? Math.round((emailCount / totalTickets) * 100) : 0,
    resolvedCount,
  };
}

export function buildDashboardMetrics(snapshot: QueueSnapshot): DashboardMetric[] {
  return [
    {
      label: 'Critical requests',
      value: String(snapshot.criticalCount).padStart(2, '0'),
      helper: 'Immediate response lane',
    },
    {
      label: 'High priority queue',
      value: String(snapshot.highCount).padStart(2, '0'),
      helper: 'Needs fast triage',
    },
    {
      label: 'Average SLA target',
      value: `${snapshot.averageSlaMinutes}m`,
      helper: 'Across active operational tickets',
    },
    {
      label: 'WhatsApp volume',
      value: `${snapshot.whatsappShare}%`,
      helper: 'Primary inbound channel share',
    },
  ];
}
