import { SectionCard } from '../components/ui/SectionCard';
import { DashboardFinalizer } from './dashboardFinalizer';
import { InboxFinalizer } from './inboxFinalizer';
import { RulesFinalizer } from './rulesFinalizer';
import { SettingsFinalizer } from './settingsFinalizer';
import { TicketDetailFinalizer } from './ticketDetailFinalizer';

export function ShowcaseFinalizer() {
  return (
    <section className="page-shell">
      <SectionCard
        eyebrow="Product shell"
        title="Priority-Sense finalizer showcase"
        description="A compact internal showcase to validate the final compositions before the closing route replacement pass."
      />
      <DashboardFinalizer />
      <InboxFinalizer />
      <RulesFinalizer />
      <SettingsFinalizer />
      <TicketDetailFinalizer />
    </section>
  );
}
