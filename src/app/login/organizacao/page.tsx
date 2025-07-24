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
import { AuthService } from "@/app/_lib/services/auth";

export default function LoginOrganizacaoPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await AuthService.login({ email, password });

      // Verificar se é realmente uma organização (empresa)
      if (!response.user.is_company) {
        throw new Error(
          "Este email não pertence a uma organização. Use o login de voluntário.",
        );
      }

      localStorage.setItem("user", JSON.stringify(response.user));
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Falha ao fazer login. Verifique suas credenciais.",
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
      <Link href="/" className="flex items-center gap-2">
        <div className="from-primary to-secondary flex size-10 items-center justify-center rounded-lg bg-gradient-to-b p-2">
          <HeartHandshakeIcon className="size-6 text-white" />
        </div>
        <span className="text-xl font-bold">Elpys</span>
      </Link>

      <Card className="bg-background border-primary/50 mt-4 w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="mb-2 flex items-center space-x-4">
            <Button asChild variant="secondary" className="rounded-full">
              <Link href="/login" className="flex items-center justify-center">
                <ArrowLeft className="h-5 w-5 text-white" />
              </Link>
            </Button>
            <CardTitle className="text-2xl font-bold">
              Login de Organização
            </CardTitle>
          </div>
          <CardDescription className="text-center">
            Entre com seu email e senha para acessar sua conta de organização
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="organizacao@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/recuperar-senha"
                  className="text-secondary text-sm hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="h-[em] w-full"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Não tem uma conta?{" "}
            <Link
              href="/cadastro/organizacao"
              className="text-secondary hover:underline"
            >
              Cadastre sua organização
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
