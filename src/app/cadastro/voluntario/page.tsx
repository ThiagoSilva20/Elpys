"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Textarea } from "@/app/_components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Alert, AlertDescription } from "@/app/_components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Checkbox } from "@/app/_components/ui/checkbox";

export default function CadastroVoluntarioPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    cidade: "",
    estado: "",
    areasInteresse: "",
    disponibilidade: "",
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

  const handleSelectChange = (name: string, value: string) => {
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

    if (formData.senha !== formData.confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    setIsLoading(true);

    // Simulação de cadastro - substituir por integração real
    try {
      // Aqui você implementaria a lógica real de cadastro
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/cadastro/sucesso");
    } catch (err) {
      setError("Falha ao realizar cadastro. Tente novamente.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2">
        <Heart className="h-6 w-6 text-[#25352a]" />
        <span className="text-xl font-bold text-[#25352a]">Elpys</span>
      </Link>

      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-1">
          <div className="mb-2 flex items-center">
            <Link
              href="/cadastro"
              className="mr-2 text-[#25352a] hover:text-[#1a261e]"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <CardTitle className="text-2xl font-bold text-[#25352a]">
              Cadastro de Voluntário
            </CardTitle>
          </div>
          <CardDescription>
            Preencha seus dados para se cadastrar como voluntário
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
                <Label htmlFor="nome">Nome completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  name="senha"
                  type="password"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  className="border-[#1c4020]"
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
                  className="border-[#1c4020]"
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
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="estado">Estado</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("estado", value)}
                >
                  <SelectTrigger className="border-[#1c4020]">
                    <SelectValue placeholder="Selecione seu estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AC">Acre</SelectItem>
                    <SelectItem value="AL">Alagoas</SelectItem>
                    <SelectItem value="AP">Amapá</SelectItem>
                    <SelectItem value="AM">Amazonas</SelectItem>
                    <SelectItem value="BA">Bahia</SelectItem>
                    <SelectItem value="CE">Ceará</SelectItem>
                    <SelectItem value="DF">Distrito Federal</SelectItem>
                    <SelectItem value="ES">Espírito Santo</SelectItem>
                    <SelectItem value="GO">Goiás</SelectItem>
                    <SelectItem value="MA">Maranhão</SelectItem>
                    <SelectItem value="MT">Mato Grosso</SelectItem>
                    <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                    <SelectItem value="MG">Minas Gerais</SelectItem>
                    <SelectItem value="PA">Pará</SelectItem>
                    <SelectItem value="PB">Paraíba</SelectItem>
                    <SelectItem value="PR">Paraná</SelectItem>
                    <SelectItem value="PE">Pernambuco</SelectItem>
                    <SelectItem value="PI">Piauí</SelectItem>
                    <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                    <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                    <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                    <SelectItem value="RO">Rondônia</SelectItem>
                    <SelectItem value="RR">Roraima</SelectItem>
                    <SelectItem value="SC">Santa Catarina</SelectItem>
                    <SelectItem value="SP">São Paulo</SelectItem>
                    <SelectItem value="SE">Sergipe</SelectItem>
                    <SelectItem value="TO">Tocantins</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="disponibilidade">Disponibilidade</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("disponibilidade", value)
                  }
                >
                  <SelectTrigger className="border-[#1c4020]">
                    <SelectValue placeholder="Selecione sua disponibilidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dias-uteis">Dias úteis</SelectItem>
                    <SelectItem value="finais-semana">
                      Finais de semana
                    </SelectItem>
                    <SelectItem value="noites">Noites</SelectItem>
                    <SelectItem value="flexivel">Flexível</SelectItem>
                    <SelectItem value="remoto">Apenas remoto</SelectItem>
                    <SelectItem value="todos">Todos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="areasInteresse">Áreas de interesse</Label>
                <Textarea
                  id="areasInteresse"
                  name="areasInteresse"
                  placeholder="Descreva suas áreas de interesse para voluntariado (educação, meio ambiente, saúde, etc.)"
                  value={formData.areasInteresse}
                  onChange={handleChange}
                  className="min-h-[100px] border-[#1c4020]"
                  required
                />
              </div>

              <div className="flex items-center space-x-2 md:col-span-2">
                <Checkbox
                  id="termos"
                  checked={termos}
                  onCheckedChange={(checked) => setTermos(checked as boolean)}
                  className="border-[#1c4020]"
                />
                <label
                  htmlFor="termos"
                  className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Concordo com os{" "}
                  <Link
                    href="/termos"
                    className="text-[#25352a] hover:underline"
                  >
                    termos de uso
                  </Link>{" "}
                  e{" "}
                  <Link
                    href="/privacidade"
                    className="text-[#25352a] hover:underline"
                  >
                    política de privacidade
                  </Link>
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#25352a] hover:bg-[#1a261e]"
              disabled={isLoading}
            >
              {isLoading ? "Cadastrando..." : "Concluir cadastro"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-center text-sm">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-[#25352a] hover:underline">
              Faça login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
