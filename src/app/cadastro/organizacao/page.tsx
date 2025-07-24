"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, HeartHandshakeIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Alert, AlertDescription } from "@/app/_components/ui/alert";

import { Checkbox } from "@/app/_components/ui/checkbox";
import { GridPattern } from "@/app/_components/magicui/grid-pattern";
import { cn } from "@/app/_lib/utils";

export default function CadastroOrganizacaoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    cnpj: "",
    email: "",
    password: "",
    confirmarSenha: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [termos, setTermos] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!termos) {
      setError(
        "Você precisa aceitar os termos de uso e política de privacidade.",
      );
      return;
    }

    if (formData.password !== formData.confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    setIsLoading(true);

    try {
      // Chamada real para a API de cadastro
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userType: "organization",
          email: formData.email,
          password: formData.password,
          companyName: formData.name,
          cnpj: formData.cnpj,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Falha ao realizar cadastro");
      }

      // Cadastro bem-sucedido
      router.push("/cadastro/sucesso");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Falha ao realizar cadastro. Tente novamente.",
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="border-primary/50 relative w-1/2 p-6">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
          )}
        />
        <Link href="/" className="flex items-center gap-2">
          <div className="from-primary to-secondary flex size-10 items-center justify-center rounded-lg bg-gradient-to-b p-2">
            <HeartHandshakeIcon className="size-6 text-white" />
          </div>
          <span className="text-xl font-bold">Elpys</span>
        </Link>
      </div>
      <div className="bg-background flex h-full w-1/2 flex-col items-center p-6">
        <Card className="bg-background w-full">
          <CardHeader className="space-y-1">
            <div className="mb-2 flex items-center space-x-4">
              <Button asChild variant="secondary" className="rounded-full">
                <Link
                  href="/cadastro"
                  className="flex items-center justify-center"
                >
                  <ArrowLeft className="h-5 w-5 text-white" />
                </Link>
              </Button>
              <CardTitle className="text-2xl font-bold">
                Cadastro de Organização
              </CardTitle>
            </div>
            <CardDescription>
              Preencha os dados da sua organização para anunciar vagas
              voluntárias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome da organização</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input
                    id="cnpj"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email institucional</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmarSenha">Confirmar senha</Label>
                  <Input
                    id="confirmarSenha"
                    name="confirmarSenha"
                    type="password"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2 md:col-span-2">
                  <Checkbox
                    id="termos"
                    checked={termos}
                    onCheckedChange={(checked) => setTermos(checked as boolean)}
                  />
                  <label
                    htmlFor="termos"
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Concordo com os{" "}
                    <Link
                      href="/termos"
                      className="text-secondary hover:underline"
                    >
                      termos de uso
                    </Link>{" "}
                    e{" "}
                    <Link
                      href="/privacidade"
                      className="text-secondary hover:underline"
                    >
                      política de privacidade
                    </Link>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="h-[3em] w-full"
                disabled={isLoading}
              >
                {isLoading ? "Cadastrando..." : "Concluir cadastro"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-center text-sm">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-secondary hover:underline">
                Faça login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
