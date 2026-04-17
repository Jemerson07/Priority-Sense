import type { ConversationControlItem } from '../../types/conversationControl';
import '../../styles/conversation-control-cards.css';

type AwaitingCustomerCardProps = {
  item: ConversationControlItem;
};

export function AwaitingCustomerCard({ item }: AwaitingCustomerCardProps) {
  return (
    <article className="surface-card control-focus-card">
      <div>
        <span className="item-meta">Awaiting customer</span>
        <h3>{item.subject}</h3>
      </div>

      <p className="control-focus-message">{item.lastReply ?? item.lastMessage}</p>

      <div className="control-focus-footer">
        <strong>{item.customer}</strong>
        <small>{item.nextAction}</small>
      </div>
    </article>
  );
}
