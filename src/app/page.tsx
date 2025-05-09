import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import {
  Heart,
  Search,
  Users,
  Building,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-[#25352a]" />
            <span className="text-xl font-bold text-[#25352a]">Elpys</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#como-funciona"
              className="text-muted-foreground hover:text-foreground text-sm font-medium"
            >
              Como Funciona
            </Link>
            <Link
              href="#beneficios"
              className="text-muted-foreground hover:text-foreground text-sm font-medium"
            >
              Benefícios
            </Link>
            <Link
              href="#depoimentos"
              className="text-muted-foreground hover:text-foreground text-sm font-medium"
            >
              Depoimentos
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="#cadastro">
              <Button className="bg-[#25352a] hover:bg-[#1a261e]">
                Cadastrar
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-[#f5f7f5] py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="grid items-center gap-6 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-[#25352a] sm:text-4xl md:text-5xl lg:text-6xl">
                  Conectando corações voluntários a causas que importam
                </h1>
                <p className="text-muted-foreground max-w-[600px] md:text-xl">
                  Encontre oportunidades de voluntariado que combinam com seus
                  valores e disponibilidade ou anuncie vagas para sua
                  organização.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="#cadastro-voluntario">
                    <Button className="w-full bg-[#25352a] hover:bg-[#1a261e] sm:w-auto">
                      Quero ser voluntário
                    </Button>
                  </Link>
                  <Link href="#cadastro-anunciante">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Quero anunciar vagas
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#25352a] sm:text-4xl md:text-5xl">
                  Como Funciona
                </h2>
                <p className="text-muted-foreground max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conectar-se a oportunidades de voluntariado nunca foi tão
                  fácil
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#e8efe9] p-4">
                  <Search className="h-6 w-6 text-[#25352a]" />
                </div>
                <h3 className="text-xl font-bold text-[#25352a]">
                  Encontre Vagas
                </h3>
                <p className="text-muted-foreground text-center">
                  Busque oportunidades de voluntariado que combinam com suas
                  habilidades e disponibilidade.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#e8efe9] p-4">
                  <Users className="h-6 w-6 text-[#25352a]" />
                </div>
                <h3 className="text-xl font-bold text-[#25352a]">Conecte-se</h3>
                <p className="text-muted-foreground text-center">
                  Entre em contato diretamente com as organizações e inicie sua
                  jornada voluntária.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#e8efe9] p-4">
                  <Building className="h-6 w-6 text-[#25352a]" />
                </div>
                <h3 className="text-xl font-bold text-[#25352a]">
                  Anuncie Vagas
                </h3>
                <p className="text-muted-foreground text-center">
                  Organizações podem cadastrar e gerenciar vagas para encontrar
                  os voluntários ideais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section
          id="beneficios"
          className="w-full bg-[#f5f7f5] py-12 md:py-24 lg:py-32"
        >
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#25352a] sm:text-4xl md:text-5xl">
                  Benefícios
                </h2>
                <p className="text-muted-foreground max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Por que escolher a Elpys para sua jornada voluntária
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#25352a]" />
                  <h3 className="text-xl font-bold text-[#25352a]">
                    Para Voluntários
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-[#25352a]" />
                    <span>Acesso a diversas oportunidades de voluntariado</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-[#25352a]" />
                    <span>
                      Filtros personalizados por causa, localização e
                      disponibilidade
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-[#25352a]" />
                    <span>
                      Histórico de atividades e certificados de participação
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-[#25352a]" />
                    <span>
                      Comunidade de voluntários para troca de experiências
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#25352a]" />
                  <h3 className="text-xl font-bold text-[#25352a]">
                    Para Organizações
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-[#25352a]" />
                    <span>Plataforma dedicada para divulgação de vagas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-[#25352a]" />
                    <span>Ferramentas de gestão de candidaturas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-[#25352a]" />
                    <span>Maior visibilidade para suas causas e projetos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-[#25352a]" />
                    <span>Relatórios e métricas de impacto social</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#25352a] sm:text-4xl md:text-5xl">
                  Depoimentos
                </h2>
                <p className="text-muted-foreground max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O que nossa comunidade diz sobre a Elpys
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div>
                  <p className="text-muted-foreground">
                    &quot;Através da Elpys encontrei uma oportunidade de
                    voluntariado que mudou minha vida. Agora dedico parte do meu
                    tempo para uma causa que realmente importa.&quot;
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-[#e8efe9] p-1">
                    <div className="h-10 w-10 rounded-full bg-[#25352a]"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ana Silva</p>
                    <p className="text-muted-foreground text-xs">Voluntária</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div>
                  <p className="text-muted-foreground">
                    &quot;Como coordenador de uma ONG, a Elpys facilitou muito
                    nosso processo de recrutamento de voluntários. Conseguimos
                    encontrar pessoas realmente comprometidas.&quot;
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-[#e8efe9] p-1">
                    <div className="h-10 w-10 rounded-full bg-[#25352a]"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Carlos Mendes</p>
                    <p className="text-muted-foreground text-xs">
                      Coordenador de ONG
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm md:col-span-2 lg:col-span-1">
                <div>
                  <p className="text-muted-foreground">
                    &quot;A plataforma é intuitiva e me permitiu encontrar vagas
                    de voluntariado compatíveis com minha agenda. Recomendo para
                    todos que querem fazer a diferença!&quot;
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-[#e8efe9] p-1">
                    <div className="h-10 w-10 rounded-full bg-[#25352a]"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Juliana Costa</p>
                    <p className="text-muted-foreground text-xs">Voluntária</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cadastro */}
        <section
          id="cadastro"
          className="w-full bg-[#25352a] py-12 text-white md:py-24 lg:py-32"
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
