import { TicketDetailPageComposition } from '../components/inbox/TicketDetailPageComposition';
import { inboxWorkspaceMock } from '../data/inboxWorkspaceMock';

export function TicketDetailFinalView() {
  return <TicketDetailPageComposition ticket={inboxWorkspaceMock.selectedTicket} />;
}
