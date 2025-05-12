import { ArrowRight, CheckCircle } from "lucide-react";
import { Card } from "../ui/card";
import { BorderBeam } from "@/app/_components/magicui/border-beam";
import { GridPattern } from "@/app/_components/magicui/grid-pattern";
import { cn } from "@/app/_lib/utils";
//oi
const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="bg-background relative w-full py-12 md:py-24 lg:py-32"
    >
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4, 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Benefícios
            </h2>
            <p className="text-muted-foreground max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Por que escolher a Elpys para sua jornada voluntária
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 flex w-full flex-col items-center justify-center gap-12 px-4 lg:max-w-7xl lg:flex-row">
          <Card className="dark:border-primary/50 bg-background relative z-10 flex w-full flex-col space-y-3 p-8 lg:w-[500px]">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-secondary h-5 w-5" />
              <h3 className="text-xl font-bold">Para Voluntários</h3>
            </div>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex items-start space-x-2">
                <ArrowRight className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <span>Acesso a diversas oportunidades de voluntariado</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  Filtros personalizados por causa, localização e
                  disponibilidade
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  Histórico de atividades e certificados de participação
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  Comunidade de voluntários para troca de experiências
                </span>
              </li>
            </ul>
            <BorderBeam size={120} duration={8} />
          </Card>
          <Card className="dark:border-primary/50 bg-background relative z-10 flex w-full flex-col space-y-3 p-8 lg:w-[500px]">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-secondary h-5 w-5" />
              <h3 className="text-xl font-bold">Para Organizações</h3>
            </div>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex items-start space-x-2">
                <ArrowRight className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <span>Plataforma dedicada para divulgação de vagas</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <span>Ferramentas de gestão de candidaturas</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <span>Maior visibilidade para suas causas e projetos</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                <span>Relatórios e métricas de impacto social</span>
              </li>
            </ul>
            <BorderBeam size={120} duration={8} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
