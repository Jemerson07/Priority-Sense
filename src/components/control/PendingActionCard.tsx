import type { ConversationControlItem } from '../../types/conversationControl';
import '../../styles/conversation-control-cards.css';

type PendingActionCardProps = {
  item: ConversationControlItem;
};

export function PendingActionCard({ item }: PendingActionCardProps) {
  return (
    <article className="surface-card control-focus-card">
      <div>
        <span className="item-meta">Internal pending</span>
        <h3>{item.subject}</h3>
      </div>

      <p className="control-focus-message">{item.lastMessage}</p>

      <div className="control-focus-footer">
        <strong>{item.owner ?? 'Unassigned'}</strong>
        <small>{item.nextAction}</small>
      </div>
    </article>
  );
}
