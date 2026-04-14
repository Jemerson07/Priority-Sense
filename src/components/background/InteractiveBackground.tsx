type InteractiveBackgroundProps = {
  intensity?: 'low' | 'medium' | 'high';
};

export function InteractiveBackground({ intensity = 'medium' }: InteractiveBackgroundProps) {
  return (
    <>
      <div className={`background-orb orb-one orb-${intensity}`} />
      <div className={`background-orb orb-two orb-${intensity}`} />
      <div className="background-grid" />
      <div className="background-noise" />
    </>
  );
}
