import { ReactNode } from "react";
import Logo from "./Logo";

interface FormContainerProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showLogo?: boolean;
  className?: string;
}

export default function FormContainer({
  children,
  title,
  subtitle,
  showLogo = true,
  className = "",
}: FormContainerProps) {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-4 ${className}`}
    >
      {showLogo && <Logo size="lg" className="mb-8" />}

      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}
