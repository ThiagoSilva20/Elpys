"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
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

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f7f5] p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2">
        <Heart className="h-6 w-6 text-[#25352a]" />
        <span className="text-xl font-bold text-[#25352a]">Elpys</span>
      </Link>

      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#25352a]">
          Escolha como deseja entrar
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="overflow-hidden shadow-lg">
            <div className="relative flex h-48 items-center justify-center">
              <FaUserGraduate className="h-40 w-40 text-[#25352a]" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#25352a]">
                Sou Voluntário
              </CardTitle>
              <CardDescription className="text-gray-700">
                Acesse sua conta para encontrar oportunidades de voluntariado
                que combinam com seus interesses e disponibilidade.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/login/voluntario">
                <Button className="w-full bg-[#25352a] hover:bg-[#1a261e]">
                  Entrar como Voluntário
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <div className="relative flex h-48 items-center justify-center">
              <IoIosBusiness className="h-40 w-40 text-[#25352a]" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#25352a]">
                Sou Organização
              </CardTitle>
              <CardDescription className="text-gray-700">
                Acesse sua conta para gerenciar vagas e encontrar voluntários
                para sua organização.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/login/organizacao">
                <Button className="w-full bg-[#25352a] hover:bg-[#1a261e]">
                  Entrar como Organização
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          Não tem uma conta?{" "}
          <Link href="/cadastro" className="text-[#25352a] hover:underline">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
