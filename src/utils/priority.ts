import type { TicketPriority } from '../types/ticket';

export function getPriorityTone(priority: TicketPriority) {
  switch (priority) {
    case 'Critical':
      return 'critical';
    case 'High':
      return 'high';
    case 'Medium':
      return 'medium';
    default:
      return 'low';
  }
}

export function getPriorityFromScore(score: number): TicketPriority {
  if (score >= 90) return 'Critical';
  if (score >= 70) return 'High';
  if (score >= 40) return 'Medium';
  return 'Low';
}
