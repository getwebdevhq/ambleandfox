interface CardProps {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}

export default function Card({
  children,
  highlighted = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`p-8 md:p-12 rounded-2xl bg-brand-white transition-all duration-300 ${
        highlighted ? "shadow-soft-lg ring-1 ring-brand-primary/20" : "shadow-soft hover:shadow-soft-lg"
      } ${className}`}
    >
      {children}
    </div>
  );
}
