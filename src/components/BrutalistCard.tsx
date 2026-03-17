interface BrutalistCardProps {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}

export default function BrutalistCard({
  children,
  highlighted = false,
  className = "",
}: BrutalistCardProps) {
  return (
    <div
      className={`${
        highlighted ? "brutal-card-highlight" : "brutal-card-hover"
      } p-6 ${className}`}
    >
      {children}
    </div>
  );
}
