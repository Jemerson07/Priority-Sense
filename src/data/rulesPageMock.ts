import type { PriorityRuleView, ScoreBand } from '../types/rules';

export const priorityRulesMock: PriorityRuleView[] = [
  {
    id: 'RULE-01',
    name: 'Critical outage keywords',
    category: 'keyword',
    description: 'Escalate messages that mention blocked, stopped or unavailable operations.',
    weight: '+35',
    active: true,
  },
  {
    id: 'RULE-02',
    name: 'VIP customer boost',
    category: 'customer',
    description: 'Increase score for strategic accounts that require faster treatment.',
    weight: '+20',
    active: true,
  },
  {
    id: 'RULE-03',
    name: 'WhatsApp fast lane',
    category: 'channel',
    description: 'Operational WhatsApp requests enter a quicker triage lane.',
    weight: '+10',
    active: true,
  },
  {
    id: 'RULE-04',
    name: 'Repeated request escalation',
    category: 'repeat',
    description: 'Repeated messages within 24 hours increase urgency automatically.',
    weight: '+15',
    active: false,
  },
];

export const scoreBandsMock: ScoreBand[] = [
  { label: 'Low', range: '0–39', result: 'Backoffice / deferred queue' },
  { label: 'Medium', range: '40–69', result: 'Monitored queue' },
  { label: 'High', range: '70–89', result: 'Fast response lane' },
  { label: 'Critical', range: '90+', result: 'Immediate action lane' },
];
