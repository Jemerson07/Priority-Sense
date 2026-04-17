import type { PriorityRuleView, ScoreBand } from '../../types/rules';
import { RuleCard } from './RuleCard';
import { ScoreBandsPanel } from './ScoreBandsPanel';

type RulesPageCompositionProps = {
  rules: PriorityRuleView[];
  bands: ScoreBand[];
};

export function RulesPageComposition({ rules, bands }: RulesPageCompositionProps) {
  return (
    <section className="page-shell">
      <div className="page-grid two-columns">
        <ScoreBandsPanel bands={bands} />
        <div className="page-grid one-column">
          {rules.map((rule) => (
            <RuleCard key={rule.id} rule={rule} />
          ))}
        </div>
      </div>
    </section>
  );
}
