import { SettingsPageComposition } from '../components/settings/SettingsPageComposition';
import { connectorCardsMock, environmentVariablesMock } from '../data/settingsPageMock';

export function SettingsFinalizer() {
  return <SettingsPageComposition connectors={connectorCardsMock} variables={environmentVariablesMock} />;
}
