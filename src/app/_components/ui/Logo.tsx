import { HeartHandshakeIcon } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export default function Logo({
  showText = true,
  size = "md",
  className = "",
  href = "/",
}: LogoProps) {
  const sizeClasses = {
    sm: "size-6",
    md: "size-8",
    lg: "size-10",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  };

  const iconSizes = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  const LogoContent = () => (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`from-primary to-secondary flex ${sizeClasses[size]} items-center justify-center rounded-lg bg-gradient-to-b p-2`}
      >
        <HeartHandshakeIcon className={`${iconSizes[size]} text-white`} />
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-bold`}>Elpys</span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}
