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
        {meta.map((item) => (
          <p key={item}>{item}</p>
        ))}
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
