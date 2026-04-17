import type { ConversationControlSummary as ConversationControlSummaryType } from '../../types/conversationControl';
import '../../styles/conversation-control.css';

type ConversationControlSummaryProps = {
  summary: ConversationControlSummaryType;
};

export function ConversationControlSummary({ summary }: ConversationControlSummaryProps) {
  const items = [
    { label: 'Inbound', value: String(summary.inbound).padStart(2, '0') },
    { label: 'Replied', value: String(summary.replied).padStart(2, '0') },
    { label: 'Pending', value: String(summary.pending).padStart(2, '0') },
    { label: 'Awaiting customer', value: String(summary.awaitingCustomer).padStart(2, '0') },
  ];

  return (
    <section className="page-grid four-columns">
      {items.map((item) => (
        <article key={item.label} className="surface-card control-summary-card">
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </article>
      ))}
    </section>
  );
}
