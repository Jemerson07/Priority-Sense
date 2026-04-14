import type { TicketRealtimeEvent } from '../../types/realtime';
import { getRealtimeEventLabel, getRealtimeEventTone } from '../../utils/realtimePresentation';
import '../../styles/realtime-feed.css';

type RealtimeFeedPanelProps = {
  events: TicketRealtimeEvent[];
};

export function RealtimeFeedPanel({ events }: RealtimeFeedPanelProps) {
  return (
    <section className="surface-card realtime-panel">
      <div className="realtime-panel-header">
        <div>
          <span className="item-meta">Operational feed</span>
          <h2>Live queue events</h2>
        </div>
        <span className="realtime-count">{events.length} events</span>
      </div>

      <div className="realtime-feed-list">
        {events.map((event) => (
          <article key={`${event.ticketId}-${event.createdAt}-${event.type}`} className="realtime-feed-item">
            <div className={`realtime-dot ${getRealtimeEventTone(event)}`} />
            <div className="realtime-feed-copy">
              <strong>{getRealtimeEventLabel(event)}</strong>
              <span>Ticket {event.ticketId}</span>
              <small>{event.createdAt}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
