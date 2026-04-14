import { BellRing, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import './styles/app.css';

const queueMetrics = [
  { label: 'Critical tickets', value: '08', detail: 'Needs immediate action' },
  { label: 'WhatsApp requests', value: '31', detail: 'Active customer conversations' },
  { label: 'Email requests', value: '18', detail: 'Inbox messages waiting triage' },
  { label: 'SLA health', value: '94%', detail: 'Within target response time' },
];

const channels = [
  {
    title: 'Email intake',
    description: 'Capture messages through IMAP/SMTP flows and transform them into structured tickets.',
    icon: Mail,
  },
  {
    title: 'WhatsApp intake',
    description: 'Receive inbound messages through sandbox or official webhook integrations.',
    icon: MessageCircle,
  },
  {
    title: 'Priority engine',
    description: 'Apply urgency, SLA, client impact and repetition rules to define the response queue.',
    icon: BellRing,
  },
];

export default function App() {
  return (
    <main className="app-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-grid" />

      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Sense Priority</span>
          <h1>Smart request triage for email and WhatsApp operations.</h1>
          <p>
            A premium React control center built to receive, classify and prioritize incoming
            requests with speed, clarity and operational intelligence.
          </p>

          <div className="hero-actions">
            <button className="primary-action">Start MVP build</button>
            <button className="secondary-action">Open roadmap</button>
          </div>
        </div>

        <div className="hero-status-card">
          <div className="status-header">
            <ShieldCheck size={20} />
            <span>Operational readiness</span>
          </div>

          <div className="status-metrics">
            {queueMetrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <small>{metric.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="channels-section">
        {channels.map((channel) => {
          const Icon = channel.icon;

          return (
            <article className="channel-card" key={channel.title}>
              <div className="channel-icon">
                <Icon size={22} />
              </div>
              <h2>{channel.title}</h2>
              <p>{channel.description}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
