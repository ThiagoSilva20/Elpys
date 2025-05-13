"use client";
import Link from "next/link";
import { HeartHandshakeIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { FaUserGraduate } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { BorderBeam } from "../_components/magicui/border-beam";

export default function CadastroPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Link href="/" className="flex items-center gap-2">
        <div className="from-primary to-secondary flex size-10 items-center justify-center rounded-lg bg-gradient-to-b p-2">
          <HeartHandshakeIcon className="size-6 text-white" />
        </div>
        <span className="text-xl font-bold">Elpys</span>
      </Link>

      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Escolha como deseja se cadastrar
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="bg-background border-primary/50 relative overflow-hidden shadow-lg">
            <div className="relative flex h-48 items-center justify-center">
              <FaUserGraduate className="text-primary h-40 w-40" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Sou Voluntário
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Quero encontrar oportunidades de voluntariado que combinam com
                meus interesses e disponibilidade.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="h-[3em] w-full" asChild>
                <Link href="/cadastro/voluntario">
                  Cadastrar como Voluntário
                </Link>
              </Button>
            </CardContent>
            <BorderBeam size={80} duration={8} />
          </Card>

          <Card className="bg-background border-primary/50 relative overflow-hidden shadow-lg">
            <div className="relative flex h-48 items-center justify-center">
              <IoIosBusiness className="text-primary h-40 w-40" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Sou Organização
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Quero cadastrar minha organização para anunciar vagas e
                encontrar voluntários.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="h-[3em] w-full" asChild>
                <Link href="/cadastro/organizacao">
                  Cadastrar como Organização
                </Link>
              </Button>
            </CardContent>
            <BorderBeam size={80} duration={8} />
          </Card>
        </div>

        <div className="mt-8 text-center">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-secondary hover:underline">
            Faça login
          </Link>
        </div>
      </div>
    </div>
  );
}
