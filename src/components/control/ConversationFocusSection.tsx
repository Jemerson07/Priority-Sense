import type { ConversationControlItem } from '../../types/conversationControl';
import { SuggestedReplyCard } from './SuggestedReplyCard';
import { PendingActionCard } from './PendingActionCard';
import { AwaitingCustomerCard } from './AwaitingCustomerCard';

type ConversationFocusSectionProps = {
  suggestedReplyItem: ConversationControlItem;
  pendingItem: ConversationControlItem;
  awaitingCustomerItem: ConversationControlItem;
};

export function ConversationFocusSection({
  suggestedReplyItem,
  pendingItem,
  awaitingCustomerItem,
}: ConversationFocusSectionProps) {
  return (
    <section className="page-grid three-columns section-gap">
      <SuggestedReplyCard item={suggestedReplyItem} />
      <PendingActionCard item={pendingItem} />
      <AwaitingCustomerCard item={awaitingCustomerItem} />
    </section>
  );
}
