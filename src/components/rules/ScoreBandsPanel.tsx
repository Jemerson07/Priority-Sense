import type { ScoreBand } from '../../types/rules';
import '../../styles/rules-page.css';

type ScoreBandsPanelProps = {
  bands: ScoreBand[];
};

export function ScoreBandsPanel({ bands }: ScoreBandsPanelProps) {
  return (
    <section className="surface-card score-bands-panel">
      <div>
        <span className="item-meta">Scoring model</span>
        <h3>Priority score bands</h3>
      </div>

      <div className="score-band-list">
        {bands.map((band) => (
          <article key={band.label} className="score-band-item">
            <div>
              <strong>{band.label}</strong>
              <p>{band.result}</p>
            </div>
            <span>{band.range}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
