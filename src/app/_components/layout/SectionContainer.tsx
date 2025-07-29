import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  padding?: "sm" | "md" | "lg" | "xl";
}

export default function SectionContainer({
  children,
  id,
  className = "",
  padding = "lg",
}: SectionContainerProps) {
  const paddingClasses = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
  };

  return (
    <section id={id} className={`${paddingClasses[padding]} ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
