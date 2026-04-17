import { InboxPageComposition } from '../components/inbox/InboxPageComposition';
import { inboxViewMock } from '../data/inboxViewMock';

export function InboxFinalView() {
  return <InboxPageComposition {...inboxViewMock} />;
}
