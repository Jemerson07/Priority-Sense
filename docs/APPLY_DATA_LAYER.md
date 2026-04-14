# Apply the Priority-Sense data layer

This repository now includes the first shared data layer:

- `src/types/ticket.ts`
- `src/data/mockTickets.ts`
- `src/store/useTicketStore.ts`
- `src/utils/priority.ts`
- `src/components/tickets/PriorityBadge.tsx`
- `src/components/tickets/TicketSummaryCard.tsx`

## Why this matters
The app now has one source of truth for tickets, priorities and filters. This is the bridge between the visual shell and the future Supabase + n8n integrations.

## Manual change 1 — update `src/pages/Inbox/InboxPage.tsx`
Replace the current content with:

```tsx
import { useNavigate } from 'react-router-dom';
import { TicketSummaryCard } from '../../components/tickets/TicketSummaryCard';
import { useTicketStore } from '../../store/useTicketStore';
import '../../styles/page-shell.css';

export function InboxPage() {
  const navigate = useNavigate();
  const { tickets, selectTicket } = useTicketStore();

  function openTicket(ticketId: string) {
    selectTicket(ticketId);
    navigate(`/tickets/${ticketId}`);
  }

  return (
    <section className="page-shell section-gap">
      <article className="surface-card feature-panel">
        <h2>Unified inbox</h2>
        <p>
          Priority-Sense now reads from a shared ticket store, making this queue ready for Supabase,
          n8n and real-time updates.
        </p>
      </article>

      <div className="page-grid one-column">
        {tickets.map((ticket) => (
          <TicketSummaryCard key={ticket.id} ticket={ticket} onOpen={openTicket} />
        ))}
      </div>
    </section>
  );
}
```

## Manual change 2 — update `src/pages/TicketDetail/TicketDetailPage.tsx`
Replace the current content with:

```tsx
import { useParams } from 'react-router-dom';
import { PriorityBadge } from '../../components/tickets/PriorityBadge';
import { useTicketStore } from '../../store/useTicketStore';
import '../../styles/page-shell.css';

export function TicketDetailPage() {
  const { ticketId } = useParams();
  const { tickets } = useTicketStore();
  const ticket = tickets.find((item) => item.id === ticketId);

  if (!ticket) {
    return (
      <section className="page-shell">
        <article className="surface-card feature-panel">
          <h2>Ticket not found</h2>
          <p>The selected ticket does not exist in the current mock dataset.</p>
        </article>
      </section>
    );
  }

  return (
    <section className="page-shell">
      <article className="surface-card feature-panel">
        <h2>{ticket.subject}</h2>
        <p>{ticket.message}</p>
      </article>

      <div className="page-grid two-columns section-gap">
        <article className="surface-card feature-panel">
          <h3>Priority reasoning</h3>
          <p>Score: {ticket.priorityScore}</p>
          <PriorityBadge priority={ticket.priority} />
          <p>Current SLA target: {ticket.slaMinutes} minutes</p>
        </article>

        <article className="surface-card feature-panel">
          <h3>Channel history</h3>
          <p>Channel: {ticket.channel}</p>
          <p>Status: {ticket.status}</p>
          <p>Assigned to: {ticket.assignedTo ?? 'Unassigned'}</p>
        </article>
      </div>
    </section>
  );
}
```

## Manual change 3 — extend `src/styles/page-shell.css`
Add these classes at the end of the file:

```css
.ticket-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.compact-action {
  padding: 10px 14px;
}

.priority-critical {
  background: rgba(255, 95, 95, 0.18);
  border-color: rgba(255, 95, 95, 0.3);
  color: #ffd6d6;
}

.priority-high {
  background: rgba(255, 149, 0, 0.18);
  border-color: rgba(255, 149, 0, 0.28);
  color: #ffe5bf;
}

.priority-medium {
  background: rgba(255, 214, 10, 0.16);
  border-color: rgba(255, 214, 10, 0.24);
  color: #fff0b3;
}

.priority-low {
  background: rgba(92, 225, 198, 0.14);
  border-color: rgba(92, 225, 198, 0.24);
  color: #cbfff5;
}
```

## After that
Run:

```bash
npm install
npm run dev
```

## Result
- Inbox uses centralized ticket data
- Ticket detail opens using the selected route id
- Priority badges become reusable
- The app is ready for the next step: Supabase schema and n8n payload mapping
