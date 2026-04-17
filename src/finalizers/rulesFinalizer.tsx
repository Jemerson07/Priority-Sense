import { RulesPageComposition } from '../components/rules/RulesPageComposition';
import { priorityRulesMock, scoreBandsMock } from '../data/rulesPageMock';

export function RulesFinalizer() {
  return <RulesPageComposition rules={priorityRulesMock} bands={scoreBandsMock} />;
}
