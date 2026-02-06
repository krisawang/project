type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle
}: SectionHeadingProps) {
  return (
    <div className="text-center">
      {eyebrow ? <p className="badge">{eyebrow}</p> : null}
      <h2 className="section-title mt-4">{title}</h2>
      {subtitle ? <p className="section-subtitle mx-auto max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}
