"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ArrowLeft } from "lucide-react";
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

export default function LoginVoluntarioPage() {
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
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          userType: "volunteer",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Falha ao fazer login");
      }

      // Verificar se é realmente um voluntário
      if (data.user.userType !== "volunteer") {
        throw new Error(
          "Este email não pertence a um voluntário. Use o login de organização.",
        );
      }

      localStorage.setItem("user", JSON.stringify(data.user));
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f7f5] p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2">
        <Heart className="h-6 w-6 text-[#25352a]" />
        <span className="text-xl font-bold text-[#25352a]">Elpys</span>
      </Link>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="mb-2 flex items-center">
            <Link
              href="/login"
              className="mr-2 text-[#25352a] hover:text-[#1a261e]"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <CardTitle className="text-2xl font-bold text-[#25352a]">
              Login de Voluntário
            </CardTitle>
          </div>
          <CardDescription className="text-center">
            Entre com seu email e senha para acessar sua conta de voluntário
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
                placeholder="voluntario@email.com"
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
                  className="text-sm text-[#25352a] hover:underline"
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
              className="w-full bg-[#25352a] hover:bg-[#1a261e]"
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
              href="/cadastro/voluntario"
              className="text-[#25352a] hover:underline"
            >
              Cadastre-se como voluntário
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
