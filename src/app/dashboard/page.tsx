"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import DashboardHeader from "@/app/_components/dashboard/DashboardHeader";
import DashboardCard from "@/app/_components/dashboard/DashboardCard";
import LoadingSpinner from "@/app/_components/ui/LoadingSpinner";
import PageContainer from "@/app/_components/layout/PageContainer";

interface Organization {
  id: string;
  name: string;
  cnpj: string;
  city: string;
}

interface Volunteer {
  id: string;
  fullName: string;
  city: string;
  availability: string;
}

interface User {
  id: string;
  email: string;
  userType: string;
  organization?: Organization;
  volunteer?: Volunteer;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (!userData) {
      router.push("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (error) {
      console.error("Erro ao analisar dados do usuário:", error);
      localStorage.removeItem("user");
      router.push("/login");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size="lg" text="Carregando dashboard..." />
      </div>
    );
  }

  const renderProfileCard = () => (
    <DashboardCard title="Meu Perfil">
      <p className="mb-2">
        <strong>Email:</strong> {user?.email}
      </p>
      <p className="mb-2">
        <strong>Tipo de conta:</strong>{" "}
        {user?.userType === "organization" ? "Organização" : "Voluntário"}
      </p>
      {user?.userType === "organization" ? (
        <>
          <p className="mb-2">
            <strong>CNPJ:</strong> {user?.organization?.cnpj}
          </p>
          <p className="mb-2">
            <strong>Cidade:</strong> {user?.organization?.city}
          </p>
        </>
      ) : (
        <>
          <p className="mb-2">
            <strong>Cidade:</strong> {user?.volunteer?.city}
          </p>
          <p className="mb-2">
            <strong>Disponibilidade:</strong> {user?.volunteer?.availability}
          </p>
        </>
      )}
      <Button className="mt-4 bg-[#25352a] hover:bg-[#1a261e]">
        Editar Perfil
      </Button>
    </DashboardCard>
  );

  const renderOrganizationCards = () => (
    <>
      <DashboardCard
        title="Minhas Vagas"
        description="Gerencie suas vagas de voluntariado."
        buttonText="Publicar Nova Vaga"
        buttonHref="/publicar"
      />
      <DashboardCard
        title="Candidaturas"
        description="Veja quem se candidatou às suas vagas."
        buttonText="Ver Candidaturas"
      />
    </>
  );

  const renderVolunteerCards = () => (
    <>
      <DashboardCard
        title="Vagas Disponíveis"
        description="Encontre oportunidades de voluntariado que combinam com seu perfil."
        buttonText="Explorar Vagas"
      />
      <DashboardCard
        title="Minhas Candidaturas"
        description="Acompanhe o status das suas candidaturas."
        buttonText="Ver Candidaturas"
      />
    </>
  );

  return (
    <div className="min-h-screen bg-[#f5f7f5] p-4">
      <DashboardHeader onLogout={handleLogout} />

      <PageContainer maxWidth="full">
        <h1 className="mb-6 text-3xl font-bold text-[#25352a]">
          Bem-vindo,{" "}
          {user?.userType === "organization"
            ? user?.organization?.name
            : user?.volunteer?.fullName}
          !
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {renderProfileCard()}
          {user?.userType === "organization"
            ? renderOrganizationCards()
            : renderVolunteerCards()}
        </div>
      </PageContainer>
    </div>
  );
}
