import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Heart, Users, Building } from "lucide-react";
import Header from "./_components/landingpage/header";
import HeroSection from "./_components/landingpage/hero-section";
import HowItsWorksSection from "./_components/landingpage/howitsworks-section";
import BenefitsSection from "./_components/landingpage/benefits-section";
import TestimonialsSection from "./_components/landingpage/testimonials-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        {/* Como Funciona */}
        <HowItsWorksSection />

        {/* Benefícios */}
        <BenefitsSection />

        {/* Depoimentos */}
        <TestimonialsSection />

        {/* Cadastro */}
        <section
          id="advertise"
          className="bg-background w-full py-12 md:py-24 lg:py-32"
        >
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Junte-se à Comunidade Elpys
                </h2>
                <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Escolha como você quer participar e comece sua jornada hoje
                  mesmo
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div
                id="cadastro-voluntario"
                className="text-foreground flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-sm"
              >
                <Users className="h-12 w-12 text-[#25352a]" />
                <h3 className="text-2xl font-bold text-[#25352a]">
                  Sou Voluntário
                </h3>
                <p className="text-muted-foreground text-center">
                  Cadastre-se para encontrar oportunidades de voluntariado que
                  combinam com seus interesses e disponibilidade.
                </p>
                <Link href="/cadastro/voluntario" className="w-full">
                  <Button className="w-full bg-[#25352a] hover:bg-[#1a261e]">
                    Cadastrar como Voluntário
                  </Button>
                </Link>
              </div>
              <div
                id="cadastro-anunciante"
                className="text-foreground flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-sm"
              >
                <Building className="h-12 w-12 text-[#25352a]" />
                <h3 className="text-2xl font-bold text-[#25352a]">
                  Sou Organização
                </h3>
                <p className="text-muted-foreground text-center">
                  Cadastre sua organização para anunciar vagas e encontrar
                  voluntários comprometidos com sua causa.
                </p>
                <Link href="/cadastro/organizacao" className="w-full">
                  <Button className="w-full bg-[#25352a] hover:bg-[#1a261e]">
                    Cadastrar como Organização
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-[#25352a]" />
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Elpys. Todos os direitos reservados.
            </p>
          </div>
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
    </div>
  );
}
