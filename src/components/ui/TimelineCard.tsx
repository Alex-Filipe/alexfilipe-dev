type TimelineCardProps = {
  description: string;
  highlights?: string[];
  meta: string[];
  title: string;
};

export function TimelineCard({
  description,
  highlights,
  meta,
  title,
}: TimelineCardProps) {
  return (
    <article className="timeline-item">
      <div>
        <div className="timeline-meta-list">
          {meta.map((item) => (
            <span className="timeline-meta-item" key={item}>
              {item}
            </span>
          ))}
        </div>
        <h3>{title}</h3>
      </div>

      <p>{description}</p>

      {highlights?.length ? (
        <ul>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
