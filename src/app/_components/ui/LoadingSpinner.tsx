import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  text = "Carregando...",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <Loader2 className={`${sizeClasses[size]} animate-spin`} />
      {text && <p className="text-muted-foreground text-sm">{text}</p>}
    </div>
  );
}
