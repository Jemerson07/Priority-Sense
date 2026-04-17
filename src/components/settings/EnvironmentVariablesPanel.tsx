import type { EnvironmentVariableView } from '../../types/settings';
import '../../styles/settings-page.css';

type EnvironmentVariablesPanelProps = {
  variables: EnvironmentVariableView[];
};

export function EnvironmentVariablesPanel({ variables }: EnvironmentVariablesPanelProps) {
  return (
    <section className="surface-card env-panel">
      <div>
        <span className="item-meta">Environment</span>
        <h3>Configuration variables</h3>
      </div>

      <div className="env-list">
        {variables.map((variable) => (
          <article key={variable.key} className="env-item">
            <div>
              <strong>{variable.key}</strong>
              <p>{variable.description}</p>
            </div>
            <code>{variable.valuePreview}</code>
          </article>
        ))}
      </div>
    </section>
  );
}
