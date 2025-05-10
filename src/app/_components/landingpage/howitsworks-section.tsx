import { Building, Search, Users } from "lucide-react";
import { Card } from "../ui/card";
import { TextAnimate } from "@/app/_components/magicui/text-animate";
import { BorderBeam } from "@/app/_components/magicui/border-beam";

const HowItsWorksSection = () => {
  return (
    <section id="howitsworks" className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conectar-se a oportunidades de voluntariado nunca foi tão fácil
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <Card className="border-border dark:border-primary/50 relative flex flex-col items-center space-y-2 rounded-lg border bg-transparent p-6 shadow-sm">
            <div className="bg-primary/20 rounded-full p-4">
              <Search className="h-6 w-6" />
            </div>
            <TextAnimate className="text-xl font-bold">
              Encontre Vagas
            </TextAnimate>
            <p className="text-muted-foreground text-center">
              Busque oportunidades de voluntariado que combinam com suas
              habilidades e disponibilidade.
            </p>
            <BorderBeam duration={8} size={100} />
          </Card>
          <Card className="border-border dark:border-primary/50 relative flex flex-col items-center space-y-2 rounded-lg border bg-transparent p-6 shadow-sm">
            <div className="bg-primary/20 rounded-full p-4">
              <Users className="h-6 w-6" />
            </div>
            <TextAnimate className="text-xl font-bold">Conecte-se</TextAnimate>
            <p className="text-muted-foreground text-center">
              Entre em contato diretamente com as organizações e inicie sua
              jornada voluntária.
            </p>
            <BorderBeam duration={8} size={100} />
          </Card>
          <Card className="border-border dark:border-primary/50 relative flex flex-col items-center space-y-2 rounded-lg border bg-transparent p-6 shadow-sm">
            <div className="bg-primary/20 rounded-full p-4">
              <Building className="h-6 w-6" />
            </div>
            <TextAnimate className="text-xl font-bold">
              Anuncie Vagas
            </TextAnimate>
            <p className="text-muted-foreground text-center">
              Organizações podem cadastrar e gerenciar vagas para encontrar os
              voluntários ideais.
            </p>
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItsWorksSection;
