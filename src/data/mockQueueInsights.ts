import type { QueueInsightGroup } from '../types/insights';

export const mockQueueInsights: QueueInsightGroup[] = [
  {
    title: 'Channel distribution',
    items: [
      { label: 'WhatsApp', value: '61%', helper: 'Main operational entry point' },
      { label: 'Email', value: '39%', helper: 'Formal support and backoffice requests' },
    ],
  },
  {
    title: 'Priority distribution',
    items: [
      { label: 'Critical + High', value: '50%', helper: 'Requires close monitoring' },
      { label: 'Medium + Low', value: '50%', helper: 'Stable service lane' },
    ],
  },
  {
    title: 'Operational status',
    items: [
      { label: 'In progress', value: '01', helper: 'Active ownership' },
      { label: 'Waiting', value: '01', helper: 'Pending external response' },
      { label: 'New', value: '01', helper: 'Needs triage' },
    ],
  },
];
