import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface DashboardCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  buttonText?: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
  className?: string;
}

export default function DashboardCard({
  title,
  description,
  children,
  buttonText,
  buttonHref,
  buttonOnClick,
  className = "",
}: DashboardCardProps) {
  const ButtonComponent = () => {
    if (!buttonText) return null;

    if (buttonHref) {
      return (
        <Button className="bg-[#25352a] hover:bg-[#1a261e]" asChild>
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      );
    }

    return (
      <Button
        className="bg-[#25352a] hover:bg-[#1a261e]"
        onClick={buttonOnClick}
      >
        {buttonText}
      </Button>
    );
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-[#25352a]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description && <p className="mb-4">{description}</p>}
        {children}
        <ButtonComponent />
      </CardContent>
    </Card>
  );
}
