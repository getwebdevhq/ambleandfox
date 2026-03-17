import Link from "next/link";

type Variant = "primary" | "secondary" | "danger";

interface BrutalistButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-brand-yellow text-brand-black hover:bg-yellow-300",
  secondary: "bg-brand-white text-brand-black hover:bg-gray-100",
  danger: "bg-brand-red text-brand-white hover:bg-red-600",
};

export default function BrutalistButton({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  className = "",
  external = false,
}: BrutalistButtonProps) {
  const baseStyles = `inline-block border-3 border-brand-black px-6 py-3 font-heading text-base font-bold uppercase tracking-wide shadow-brutal transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
