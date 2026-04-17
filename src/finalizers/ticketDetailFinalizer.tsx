import { TicketDetailPageComposition } from '../components/inbox/TicketDetailPageComposition';
import { inboxWorkspaceMock } from '../data/inboxWorkspaceMock';

export function TicketDetailFinalizer() {
  return <TicketDetailPageComposition ticket={inboxWorkspaceMock.selectedTicket} />;
}
