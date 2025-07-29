import { ReactNode } from "react";
import { Button } from "./button";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export default function EmptyState({
  icon,
  title,
  description,
  actionText,
  onAction,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 text-center ${className}`}
    >
      {icon && <div className="text-muted-foreground mb-4">{icon}</div>}

      <h3 className="mb-2 text-lg font-semibold">{title}</h3>

      {description && (
        <p className="text-muted-foreground mb-6 max-w-sm">{description}</p>
      )}

      {actionText && onAction && (
        <Button onClick={onAction}>{actionText}</Button>
      )}
    </div>
  );
}
