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

export default function CadastroPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2">
        <Heart className="h-6 w-6 text-green-700" />
        <span className="text-xl font-bold text-green-700">Elpys</span>
      </Link>

      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-green-700">
          Escolha como deseja se cadastrar
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="overflow-hidden shadow-lg">
            <div className="relative flex h-48 items-center justify-center">
              <FaUserGraduate className="h-40 w-40 text-green-700" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-700">
                Sou Voluntário
              </CardTitle>
              <CardDescription className="text-gray-700">
                Quero encontrar oportunidades de voluntariado que combinam com
                meus interesses e disponibilidade.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/cadastro/voluntario">
                <Button className="w-full bg-green-700 hover:bg-green-800">
                  Cadastrar como Voluntário
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <div className="relative flex h-48 items-center justify-center">
              <IoIosBusiness className="h-40 w-40 text-green-700" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-700">
                Sou Organização
              </CardTitle>
              <CardDescription className="text-gray-700">
                Quero cadastrar minha organização para anunciar vagas e
                encontrar voluntários.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/cadastro/organizacao">
                <Button className="w-full bg-green-700 hover:bg-green-800">
                  Cadastrar como Organização
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-green-700 hover:underline">
            Faça login
          </Link>
        </div>
      </div>
    </div>
  );
}
