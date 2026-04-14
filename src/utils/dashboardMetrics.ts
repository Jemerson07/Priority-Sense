import type { Ticket } from '../types/ticket';

export type DashboardMetric = {
  label: string;
  value: string;
  helper: string;
};

export function buildDashboardMetrics(tickets: Ticket[]): DashboardMetric[] {
  const criticalCount = tickets.filter((ticket) => ticket.priority === 'Critical').length;
  const whatsappCount = tickets.filter((ticket) => ticket.channel === 'whatsapp').length;
  const emailCount = tickets.filter((ticket) => ticket.channel === 'email').length;
  const triagedOrInProgress = tickets.filter(
    (ticket) => ticket.status === 'Triaged' || ticket.status === 'In Progress'
  ).length;
  const operationalHealth = tickets.length > 0 ? Math.round((triagedOrInProgress / tickets.length) * 100) : 0;

  return [
    {
      label: 'Critical requests',
      value: String(criticalCount).padStart(2, '0'),
      helper: 'Immediate response lane',
    },
    {
      label: 'WhatsApp volume',
      value: `${whatsappCount}`,
      helper: 'Messages in operational channel',
    },
    {
      label: 'Email volume',
      value: `${emailCount}`,
      helper: 'Inbox requests awaiting handling',
    },
    {
      label: 'Operational health',
      value: `${operationalHealth}%`,
      helper: 'Triaged and active queue ratio',
    },
  ];
}
