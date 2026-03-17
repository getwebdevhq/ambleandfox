interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-20 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}>
      <h2 className="font-heading text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-inherit">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 font-body text-lg opacity-75 md:text-xl leading-relaxed text-inherit">
          {subtitle}
        </p>
      )}
    </div>
  );
}
