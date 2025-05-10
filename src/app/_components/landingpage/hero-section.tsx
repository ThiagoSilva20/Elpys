import Link from "next/link";
import { Button } from "../ui/button";
import { TypingAnimation } from "@/app/_components/magicui/typing-animation";
import { GridPattern } from "@/app/_components/magicui/grid-pattern";
import { cn } from "@/app/_lib/utils";

const HeroSection = () => {
  return (
    <section className="bg-background relative flex h-screen w-full flex-col items-center justify-center">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        )}
      />
      <div className="flex w-full flex-col items-center justify-center space-y-4 px-4 lg:max-w-5xl">
        <TypingAnimation className="text-center text-2xl font-bold lg:text-7xl">
          Conectando corações voluntários a causas que importam
        </TypingAnimation>
        <p className="text-muted-foreground text-center md:text-xl">
          Encontre oportunidades de voluntariado que combinam com seus valores e
          disponibilidade ou anuncie vagas para sua organização.
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row">
        <Button asChild className="h-12 w-[23em]">
          <Link href="#cadastro-voluntario">Quero ser voluntário</Link>
        </Button>
        <Button variant="outline" asChild className="h-12 w-[23em]">
          <Link href="#cadastro-anunciante">Quero anunciar vagas</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
