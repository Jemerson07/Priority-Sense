import { getPriorityTone } from '../../utils/priority';
import type { TicketPriority } from '../../types/ticket';

type PriorityBadgeProps = {
  priority: TicketPriority;
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  return <span className={`priority-pill priority-${getPriorityTone(priority)}`}>{priority}</span>;
}
