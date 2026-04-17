import type {
  ConversationControlItem,
  ConversationControlSummary,
} from '../../types/conversationControl';
import { ConversationControlPageComposition } from './ConversationControlPageComposition';
import { ConversationFocusSection } from './ConversationFocusSection';

type ConversationControlFinalPageProps = {
  summary: ConversationControlSummary;
  items: ConversationControlItem[];
  suggestedReplyItem: ConversationControlItem;
  pendingItem: ConversationControlItem;
  awaitingCustomerItem: ConversationControlItem;
};

export function ConversationControlFinalPage({
  summary,
  items,
  suggestedReplyItem,
  pendingItem,
  awaitingCustomerItem,
}: ConversationControlFinalPageProps) {
  return (
    <section className="page-shell">
      <ConversationControlPageComposition summary={summary} items={items} />
      <ConversationFocusSection
        suggestedReplyItem={suggestedReplyItem}
        pendingItem={pendingItem}
        awaitingCustomerItem={awaitingCustomerItem}
      />
    </section>
  );
}
