export type RuleCategory = 'keyword' | 'customer' | 'channel' | 'sla' | 'repeat';

export type PriorityRuleView = {
  id: string;
  name: string;
  category: RuleCategory;
  description: string;
  weight: string;
  active: boolean;
};

export type ScoreBand = {
  label: string;
  range: string;
  result: string;
};
