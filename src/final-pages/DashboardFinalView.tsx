import { OperationalHomeShell } from '../components/dashboard/OperationalHomeShell';
import { operationalHomeMock } from '../data/operationalHomeMock';

export function DashboardFinalView() {
  return <OperationalHomeShell {...operationalHomeMock} />;
}
