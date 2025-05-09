import Link from "next/link";
import { Heart, CheckCircle } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";

export default function CadastroSucessoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f7f5] p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2">
        <Heart className="h-6 w-6 text-[#25352a]" />
        <span className="text-xl font-bold text-[#25352a]">Elpys</span>
      </Link>

      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-1">
          <div className="mb-4 flex justify-center">
            <CheckCircle className="h-16 w-16 text-[#25352a]" />
          </div>
          <CardTitle className="text-2xl font-bold text-[#25352a]">
            Cadastro realizado com sucesso!
          </CardTitle>
          <CardDescription>
            Sua conta foi criada e você já pode começar a usar a plataforma
            Elpys.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Enviamos um email de confirmação para o endereço fornecido. Por
            favor, verifique sua caixa de entrada e confirme seu email para ter
            acesso a todas as funcionalidades.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link href="/login" className="w-full">
            <Button className="w-full bg-[#25352a] hover:bg-[#1a261e]">
              Fazer login
            </Button>
          </Link>
          <Link href="/" className="text-sm text-[#25352a] hover:underline">
            Voltar para a página inicial
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
