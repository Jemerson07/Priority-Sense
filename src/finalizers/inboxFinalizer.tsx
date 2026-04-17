import { InboxPageComposition } from '../components/inbox/InboxPageComposition';
import { inboxViewMock } from '../data/inboxViewMock';

export function InboxFinalizer() {
  return <InboxPageComposition {...inboxViewMock} />;
}
