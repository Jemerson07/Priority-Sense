import type { ConversationControlItem } from '../../types/conversationControl';
import '../../styles/conversation-control-cards.css';

type SuggestedReplyCardProps = {
  item: ConversationControlItem;
};

export function SuggestedReplyCard({ item }: SuggestedReplyCardProps) {
  return (
    <article className="surface-card control-focus-card">
      <div>
        <span className="item-meta">Suggested reply</span>
        <h3>{item.subject}</h3>
      </div>

      <p className="control-focus-message">{item.suggestedReply ?? 'No suggested reply available yet.'}</p>

      <div className="control-focus-footer">
        <strong>{item.status}</strong>
        <small>{item.nextAction}</small>
      </div>
    </article>
  );
}
