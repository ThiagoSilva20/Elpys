import { ReactNode } from "react";
import Header from "./Header";

interface AuthLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  className?: string;
}

export default function AuthLayout({
  children,
  showHeader = false,
  className = "",
}: AuthLayoutProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      {showHeader && <Header showNavigation={false} />}
      <main className="flex-1">{children}</main>
    </div>
  );
}
