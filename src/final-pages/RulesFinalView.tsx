import { RulesPageComposition } from '../components/rules/RulesPageComposition';
import { priorityRulesMock, scoreBandsMock } from '../data/rulesPageMock';

export function RulesFinalView() {
  return <RulesPageComposition rules={priorityRulesMock} bands={scoreBandsMock} />;
}
