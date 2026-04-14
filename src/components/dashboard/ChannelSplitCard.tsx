import type { QueueSnapshot } from '../../types/dashboard';
import '../../styles/dashboard-widgets.css';

type ChannelSplitCardProps = {
  snapshot: QueueSnapshot;
};

export function ChannelSplitCard({ snapshot }: ChannelSplitCardProps) {
  return (
    <article className="surface-card dashboard-widget dashboard-widget-tall">
      <h3>Channel split</h3>
      <div className="channel-split-row">
        <span>WhatsApp</span>
        <strong>{snapshot.whatsappShare}%</strong>
      </div>
      <div className="channel-progress">
        <div className="channel-progress-fill" style={{ width: `${snapshot.whatsappShare}%` }} />
      </div>

      <div className="channel-split-row secondary-row">
        <span>Email</span>
        <strong>{snapshot.emailShare}%</strong>
      </div>
      <div className="channel-progress email-progress">
        <div className="channel-progress-fill" style={{ width: `${snapshot.emailShare}%` }} />
      </div>
    </article>
  );
}
