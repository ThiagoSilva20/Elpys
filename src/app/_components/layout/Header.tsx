import { HeartHandshakeIcon, LogInIcon, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import ToggleTheme from "@/app/themes/toggle-theme";

interface HeaderProps {
  showNavigation?: boolean;
  showAuthButtons?: boolean;
  className?: string;
}

export default function Header({
  showNavigation = true,
  showAuthButtons = true,
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`bg-background supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur ${className}`}
    >
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="from-primary to-secondary flex size-10 items-center justify-center rounded-lg bg-gradient-to-b p-2">
              <HeartHandshakeIcon className="size-6 text-white" />
            </div>
            <span className="text-xl font-bold">Elpys</span>
          </Link>
        </div>

        {showNavigation && (
          <nav className="hidden items-center justify-center gap-6 md:flex">
            <Button variant="ghost">
              <Link href="#howitsworks">Como Funciona</Link>
            </Button>
            <Button variant="ghost">
              <Link href="#benefits">Benefícios</Link>
            </Button>
            <Button variant="ghost">
              <Link href="#testimonials">Depoimentos</Link>
            </Button>
            <Button variant="ghost">
              <Link href="#faq">FAQ</Link>
            </Button>
            <Button variant="ghost">
              <Link href="#advertise">Anuncie Agora</Link>
            </Button>
          </nav>
        )}

        {showAuthButtons && (
          <div className="flex items-center gap-4">
            <ToggleTheme />
            <Button variant="outline" asChild>
              <Link href="/login" className="flex items-center">
                Entrar <User className="size-4" />
              </Link>
            </Button>
            <Button>
              <Link href="/cadastro" className="flex items-center">
                Cadastrar <LogInIcon className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
