import { ArrowRightIcon, Building, Users } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card } from "../ui/card";
import { BorderBeam } from "@/app/_components/magicui/border-beam";
import { GridPattern } from "@/app/_components/magicui/grid-pattern";
import { cn } from "@/app/_lib/utils";

const CtaAdvertiseSection = () => {
  return (
    <section
      id="advertise"
      className="bg-background relative w-full py-12 md:py-24 lg:py-32"
    >
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Junte-se à Comunidade Elpys
            </h2>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Escolha como você quer participar e comece sua jornada hoje mesmo
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          <Card
            id="cadastro-voluntario"
            className="text-foreground dark:border-primary/50 bg-background relative z-10 flex flex-col items-center space-y-4 rounded-lg p-6 shadow-sm"
          >
            <div className="bg-primary/20 flex size-16 items-center justify-center rounded-full">
              <Users className="size-6" />
            </div>
            <h3 className="text-2xl font-bold">Sou Voluntário</h3>
            <p className="text-muted-foreground text-center">
              Cadastre-se para encontrar oportunidades de voluntariado que
              combinam com seus interesses e disponibilidade.
            </p>
            <Button className="h-16 w-full lg:w-[23em]" asChild>
              <Link href="/" className="w-full">
                Cadastrar como Voluntário <ArrowRightIcon />
              </Link>
            </Button>
            <BorderBeam duration={8} size={100} />
          </Card>
          <Card
            id="cadastro-anunciante"
            className="text-foreground dark:border-primary/50 bg-background relative z-10 flex flex-col items-center space-y-4 rounded-lg p-6 shadow-sm"
          >
            <div className="bg-primary/20 flex size-16 items-center justify-center rounded-full">
              <Building className="size-6" />
            </div>
            <h3 className="text-2xl font-bold">Sou Organização</h3>
            <p className="text-muted-foreground text-center">
              Cadastre sua organização para anunciar vagas e encontrar
              voluntários comprometidos com sua causa.
            </p>
            <Button className="h-16 w-full lg:w-[23em]" asChild>
              <Link href="/" className="w-full">
                Cadastrar como Organização <ArrowRightIcon />
              </Link>
            </Button>
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CtaAdvertiseSection;
