import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      className={`text-muted-foreground flex items-center space-x-1 text-sm ${className}`}
    >
      <Link href="/" className="hover:text-foreground flex items-center">
        <Home className="size-4" />
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="size-4" />
          {item.href ? (
            <Link href={item.href} className="hover:text-foreground ml-1">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground ml-1">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
