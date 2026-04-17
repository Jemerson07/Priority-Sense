import type { ConnectorCardView, EnvironmentVariableView } from '../../types/settings';
import { ConnectorCard } from './ConnectorCard';
import { EnvironmentVariablesPanel } from './EnvironmentVariablesPanel';

type SettingsPageCompositionProps = {
  connectors: ConnectorCardView[];
  variables: EnvironmentVariableView[];
};

export function SettingsPageComposition({ connectors, variables }: SettingsPageCompositionProps) {
  return (
    <section className="page-shell">
      <div className="page-grid two-columns">
        <EnvironmentVariablesPanel variables={variables} />
        <div className="page-grid one-column">
          {connectors.map((connector) => (
            <ConnectorCard key={connector.id} connector={connector} />
          ))}
        </div>
      </div>
    </section>
  );
}
