import '../../styles/ui-extensions.css';

type OperationalStatusPillProps = {
  label: string;
  tone?: 'neutral' | 'success' | 'warning' | 'critical';
};

export function OperationalStatusPill({
  label,
  tone = 'neutral',
}: OperationalStatusPillProps) {
  return <span className={`operational-status-pill status-${tone}`}>{label}</span>;
}
