"use client";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import Logo from "@/app/_components/ui/Logo";
import SelectionCard from "@/app/_components/ui/SelectionCard";
import PageContainer from "@/app/_components/layout/PageContainer";

export default function CadastroPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Logo size="lg" />

      <PageContainer maxWidth="2xl" className="w-full">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Escolha como deseja se cadastrar
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SelectionCard
            title="Sou Voluntário"
            description="Quero encontrar oportunidades de voluntariado que combinam com meus interesses e disponibilidade."
            icon={<FaUserGraduate />}
            href="/cadastro/voluntario"
            buttonText="Cadastrar como Voluntário"
          />

          <SelectionCard
            title="Sou Organização"
            description="Quero cadastrar minha organização para anunciar vagas e encontrar voluntários."
            icon={<IoIosBusiness />}
            href="/cadastro/organizacao"
            buttonText="Cadastrar como Organização"
          />
        </div>

        <div className="mt-8 text-center">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-secondary hover:underline">
            Faça login
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
