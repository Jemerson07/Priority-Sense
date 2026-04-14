import { formatRealtimeEventLabel } from '../../utils/realtimeFeed';
import type { TicketRealtimeEvent } from '../../types/realtime';
import '../../styles/realtime-feed.css';

type RealtimeActivityPanelProps = {
  events: TicketRealtimeEvent[];
};

export function RealtimeActivityPanel({ events }: RealtimeActivityPanelProps) {
  return (
    <section className="surface-card realtime-panel">
      <div className="realtime-header">
        <div>
          <span className="item-meta">Live activity</span>
          <h3>Operational event feed</h3>
        </div>
        <span className="realtime-count">{events.length} events</span>
      </div>

      <div className="realtime-list">
        {events.map((event) => (
          <article key={`${event.ticketId}-${event.createdAt}-${event.type}`} className="realtime-item">
            <div>
              <strong>{formatRealtimeEventLabel(event)}</strong>
              <p>{event.ticketId}</p>
            </div>
            <small>{new Date(event.createdAt).toLocaleString()}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
