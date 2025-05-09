import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";

export default function CadastroPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f7f5] p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2">
        <Heart className="h-6 w-6 text-[#25352a]" />
        <span className="text-xl font-bold text-[#25352a]">Elpys</span>
      </Link>

      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#25352a]">
          Escolha como deseja se cadastrar
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Voluntário ajudando"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#25352a]">
                Sou Voluntário
              </CardTitle>
              <CardDescription>
                Quero encontrar oportunidades de voluntariado que combinam com
                meus interesses e disponibilidade.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/cadastro/voluntario">
                <Button className="w-full bg-[#25352a] hover:bg-[#1a261e]">
                  Cadastrar como Voluntário
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Organização social"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#25352a]">
                Sou Organização
              </CardTitle>
              <CardDescription>
                Quero cadastrar minha organização para anunciar vagas e
                encontrar voluntários.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/cadastro/organizacao">
                <Button className="w-full bg-[#25352a] hover:bg-[#1a261e]">
                  Cadastrar como Organização
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-[#25352a] hover:underline">
            Faça login
          </Link>
        </div>
      </div>
    </div>
  );
}
