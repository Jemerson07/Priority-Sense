import type { Ticket } from '../../types/ticket';
import '../../styles/inbox-quick-summary.css';

type InboxQuickSummaryProps = {
  tickets: Ticket[];
};

export function InboxQuickSummary({ tickets }: InboxQuickSummaryProps) {
  const total = tickets.length;
  const critical = tickets.filter((ticket) => ticket.priority === 'Critical').length;
  const whatsapp = tickets.filter((ticket) => ticket.channel === 'whatsapp').length;
  const inProgress = tickets.filter((ticket) => ticket.status === 'In Progress').length;

  const items = [
    { label: 'Queue size', value: String(total).padStart(2, '0') },
    { label: 'Critical', value: String(critical).padStart(2, '0') },
    { label: 'WhatsApp', value: String(whatsapp).padStart(2, '0') },
    { label: 'In progress', value: String(inProgress).padStart(2, '0') },
  ];

  return (
    <section className="page-grid four-columns">
      {items.map((item) => (
        <article key={item.label} className="surface-card quick-summary-card">
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </article>
      ))}
    </section>
  );
}
