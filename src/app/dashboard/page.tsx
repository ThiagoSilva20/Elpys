"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";

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
    // Verificar se o usuário está logado
    const userData = localStorage.getItem("user");

    if (!userData) {
      // Redirecionar para a página de login se não estiver logado
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
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7f5] p-4">
      <header className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-[#25352a]" />
          <span className="text-xl font-bold text-[#25352a]">Elpys</span>
        </Link>
        <Button
          variant="outline"
          className="border-[#25352a] text-[#25352a]"
          onClick={handleLogout}
        >
          Sair
        </Button>
      </header>

      <main className="container mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold text-[#25352a]">
          Bem-vindo,{" "}
          {user?.userType === "organization"
            ? user?.organization?.name
            : user?.volunteer?.fullName}
          !
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#25352a]">Meu Perfil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                <strong>Email:</strong> {user?.email}
              </p>
              <p className="mb-2">
                <strong>Tipo de conta:</strong>{" "}
                {user?.userType === "organization"
                  ? "Organização"
                  : "Voluntário"}
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
                    <strong>Disponibilidade:</strong>{" "}
                    {user?.volunteer?.availability}
                  </p>
                </>
              )}
              <Button className="mt-4 bg-[#25352a] hover:bg-[#1a261e]">
                Editar Perfil
              </Button>
            </CardContent>
          </Card>

          {user?.userType === "organization" ? (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#25352a]">Minhas Vagas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Gerencie suas vagas de voluntariado.</p>
                  <Button className="bg-[#25352a] hover:bg-[#1a261e]">
                    <Link href="/publicar">Publicar Nova Vaga</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#25352a]">Candidaturas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Veja quem se candidatou às suas vagas.</p>
                  <Button className="bg-[#25352a] hover:bg-[#1a261e]">
                    Ver Candidaturas
                  </Button>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#25352a]">
                    Vagas Disponíveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Encontre oportunidades de voluntariado que combinam com seu
                    perfil.
                  </p>
                  <Button className="bg-[#25352a] hover:bg-[#1a261e]">
                    Explorar Vagas
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#25352a]">
                    Minhas Candidaturas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Acompanhe o status das suas candidaturas.
                  </p>
                  <Button className="bg-[#25352a] hover:bg-[#1a261e]">
                    Ver Candidaturas
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
