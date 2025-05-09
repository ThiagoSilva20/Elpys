import { HeartHandshakeIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="flex flex-col items-center justify-between gap-4 px-6 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="from-primary to-secondary flex size-10 items-center justify-center rounded-lg bg-gradient-to-b p-2">
            <HeartHandshakeIcon className="size-6 text-white" />
          </div>
          <span className="text-xl font-bold">Elpys</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Elpys. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            Termos de Uso
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            Política de Privacidade
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
