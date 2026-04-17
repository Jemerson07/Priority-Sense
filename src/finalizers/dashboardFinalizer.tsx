import { OperationalHomeShell } from '../components/dashboard/OperationalHomeShell';
import { operationalHomeMock } from '../data/operationalHomeMock';

export function DashboardFinalizer() {
  return <OperationalHomeShell {...operationalHomeMock} />;
}
