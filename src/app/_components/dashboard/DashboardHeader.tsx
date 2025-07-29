import { Button } from "../ui/button";
import Logo from "../ui/Logo";

interface DashboardHeaderProps {
  onLogout: () => void;
  className?: string;
}

export default function DashboardHeader({
  onLogout,
  className = "",
}: DashboardHeaderProps) {
  return (
    <header
      className={`mb-8 flex items-center justify-between border-b border-gray-200 pb-4 ${className}`}
    >
      <Logo size="md" />
      <Button
        variant="outline"
        className="border-[#25352a] text-[#25352a]"
        onClick={onLogout}
      >
        Sair
      </Button>
    </header>
  );
}
