import type { QueueInsights } from '../types/queueInsights';

export const queueInsightsMock: QueueInsights = {
  channels: [
    { label: 'WhatsApp', value: '61%', helper: 'Primary inbound channel' },
    { label: 'Email', value: '39%', helper: 'Structured formal requests' },
  ],
  priorities: [
    { label: 'Critical', value: '08', helper: 'Immediate response lane' },
    { label: 'High', value: '12', helper: 'Fast triage needed' },
    { label: 'Medium', value: '17', helper: 'Monitored queue' },
    { label: 'Low', value: '06', helper: 'Backoffice and deferred work' },
  ],
  statuses: [
    { label: 'New', value: '09', helper: 'Awaiting first triage' },
    { label: 'In Progress', value: '14', helper: 'Active operational handling' },
    { label: 'Waiting', value: '11', helper: 'Pending response or dependency' },
    { label: 'Resolved', value: '09', helper: 'Closed successfully' },
  ],
};
