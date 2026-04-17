import '../../styles/ui-states.css';

type SectionIntroCardProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionIntroCard({ eyebrow, title, description }: SectionIntroCardProps) {
  return (
    <section className="surface-card state-card">
      <span className="item-meta">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
