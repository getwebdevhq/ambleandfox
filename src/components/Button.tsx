import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-brand-primary text-brand-white hover:bg-[#d6701b]",
  secondary: "bg-brand-black text-brand-white hover:bg-gray-800",
  outline: "bg-transparent border border-gray-300 text-brand-black hover:border-brand-primary hover:text-brand-primary",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center px-8 py-4 font-body text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyles}>
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
