import type { PriorityRuleView } from '../../types/rules';
import '../../styles/rules-page.css';

type RuleCardProps = {
  rule: PriorityRuleView;
};

export function RuleCard({ rule }: RuleCardProps) {
  return (
    <article className="surface-card rule-card">
      <div className="rule-card-header">
        <div>
          <span className="item-meta">{rule.category}</span>
          <h3>{rule.name}</h3>
        </div>
        <span className={`rule-status ${rule.active ? 'rule-active' : 'rule-inactive'}`}>
          {rule.active ? 'Active' : 'Inactive'}
        </span>
      </div>

      <p>{rule.description}</p>

      <div className="rule-weight-row">
        <span>Weight</span>
        <strong>{rule.weight}</strong>
      </div>
    </article>
  );
}
