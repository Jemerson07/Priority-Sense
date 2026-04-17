import type { ReactNode } from 'react';
import '../../styles/ui-kit.css';

type SectionCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionCard({ eyebrow, title, description, children }: SectionCardProps) {
  return (
    <section className="surface-card section-card">
      <div className="section-card-header">
        {eyebrow ? <span className="item-meta">{eyebrow}</span> : null}
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
      {children ? <div className="section-card-body">{children}</div> : null}
    </section>
  );
}
