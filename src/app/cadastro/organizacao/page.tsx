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

export default function CadastroOrganizacaoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    cnpj: "",
    email: "",
    password: "",
    confirmarSenha: "",
    phone: "",
    website: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    description: "",
    orgType: "",
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
          name: formData.name,
          cnpj: formData.cnpj,
          orgType: formData.orgType,
          phone: formData.phone,
          website: formData.website,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          description: formData.description,
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
              Cadastro de Organização
            </CardTitle>
          </div>
          <CardDescription>
            Preencha os dados da sua organização para anunciar vagas voluntárias
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
                  className="border-[#1c4020]"
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
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="orgType">Tipo de organização</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("orgType", value)
                  }
                >
                  <SelectTrigger className="border-[#1c4020]">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ong">ONG</SelectItem>
                    <SelectItem value="associacao">Associação</SelectItem>
                    <SelectItem value="fundacao">Fundação</SelectItem>
                    <SelectItem value="instituto">Instituto</SelectItem>
                    <SelectItem value="cooperativa">Cooperativa</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
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
                  className="border-[#1c4020]"
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
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Site (opcional)</Label>
                <Input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">Estado</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("state", value)}
                >
                  <SelectTrigger className="border-[#1c4020]">
                    <SelectValue placeholder="Selecione o estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AC">Acre (AC)</SelectItem>
                    <SelectItem value="AL">Alagoas (AL)</SelectItem>
                    <SelectItem value="AP">Amapá (AP)</SelectItem>
                    <SelectItem value="AM">Amazonas (AM)</SelectItem>
                    <SelectItem value="BA">Bahia (BA)</SelectItem>
                    <SelectItem value="CE">Ceará (CE)</SelectItem>
                    <SelectItem value="DF">Distrito Federal (DF)</SelectItem>
                    <SelectItem value="ES">Espírito Santo (ES)</SelectItem>
                    <SelectItem value="GO">Goiás (GO)</SelectItem>
                    <SelectItem value="MA">Maranhão (MA)</SelectItem>
                    <SelectItem value="MT">Mato Grosso (MT)</SelectItem>
                    <SelectItem value="MS">Mato Grosso do Sul (MS)</SelectItem>
                    <SelectItem value="MG">Minas Gerais (MG)</SelectItem>
                    <SelectItem value="PA">Pará (PA)</SelectItem>
                    <SelectItem value="PB">Paraíba (PB)</SelectItem>
                    <SelectItem value="PR">Paraná (PR)</SelectItem>
                    <SelectItem value="PE">Pernambuco (PE)</SelectItem>
                    <SelectItem value="PI">Piauí (PI)</SelectItem>
                    <SelectItem value="RJ">Rio de Janeiro (RJ)</SelectItem>
                    <SelectItem value="RN">Rio Grande do Norte (RN)</SelectItem>
                    <SelectItem value="RS">Rio Grande do Sul (RS)</SelectItem>
                    <SelectItem value="RO">Rondônia (RO)</SelectItem>
                    <SelectItem value="RR">Roraima (RR)</SelectItem>
                    <SelectItem value="SC">Santa Catarina (SC)</SelectItem>
                    <SelectItem value="SP">São Paulo (SP)</SelectItem>
                    <SelectItem value="SE">Sergipe (SE)</SelectItem>
                    <SelectItem value="TO">Tocantins (TO)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode">CEP</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="border-[#1c4020]"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Descrição da organização</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Descreva a missão, valores e áreas de atuação da sua organização"
                  value={formData.description}
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
