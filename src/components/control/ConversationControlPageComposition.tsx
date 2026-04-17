import type { ConversationControlItem, ConversationControlSummary } from '../../types/conversationControl';
import { ConversationControlSummary as ControlSummary } from './ConversationControlSummary';
import '../../styles/conversation-control.css';

type ConversationControlPageCompositionProps = {
  summary: ConversationControlSummary;
  items: ConversationControlItem[];
};

export function ConversationControlPageComposition({ summary, items }: ConversationControlPageCompositionProps) {
  return (
    <section className="page-shell">
      <ControlSummary summary={summary} />

      <section className="surface-card control-board">
        <div>
          <span className="item-meta">Conversation control</span>
          <h3>Email and WhatsApp operational queue</h3>
        </div>

        <div className="control-list">
          {items.map((item) => (
            <article key={item.id} className="control-item">
              <div>
                <span className="item-meta">
                  {item.id} · {item.channel} · {item.customer}
                </span>
                <h4>{item.subject}</h4>
                <p>{item.lastMessage}</p>
              </div>

              <div className="control-meta">
                <strong>{item.status}</strong>
                <small>{item.nextAction}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
