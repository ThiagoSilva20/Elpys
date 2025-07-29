import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { BorderBeam } from "../magicui/border-beam";

interface SelectionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  buttonText: string;
  className?: string;
}

export default function SelectionCard({
  title,
  description,
  icon,
  href,
  buttonText,
  className = "",
}: SelectionCardProps) {
  return (
    <Card
      className={`bg-background border-primary/50 relative overflow-hidden shadow-lg ${className}`}
    >
      <div className="relative flex h-48 items-center justify-center">
        <div className="text-primary h-40 w-40">{icon}</div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="h-[3em] w-full" asChild>
          <Link href={href}>{buttonText}</Link>
        </Button>
      </CardContent>
      <BorderBeam size={80} duration={8} />
    </Card>
  );
}
