import { SectionCard } from '../components/ui/SectionCard';
import { ShowcaseFinalizer } from './showcaseFinalizer';
import { ConversationControlFinalizer } from './conversationControlFinalizer';

export function ShowcasePlusControlFinalizer() {
  return (
    <section className="page-shell">
      <SectionCard
        eyebrow="Extended product shell"
        title="Priority-Sense showcase with conversation control"
        description="A broader internal showcase that includes the n8n-oriented conversation control module alongside the main product shells."
      />
      <ShowcaseFinalizer />
      <ConversationControlFinalizer />
    </section>
  );
}
