import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, userType } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e senha são obrigatórios." },
        { status: 400 },
      );
    }

    // Buscar usuário pelo email
    const user: User | null = await prisma.user.findUnique({
      where: { email },
      include: {
        organization: true,
        volunteer: true,
      },
    });

    // Verificar se o usuário existe
    if (!user) {
      return NextResponse.json(
        { error: "Email ou senha incorretos." },
        { status: 401 },
      );
    }

    // Se um tipo de usuário específico foi solicitado, verificar se corresponde
    if (userType && user.userType !== userType) {
      const errorMessage =
        userType === "organization"
          ? "Este email não pertence a uma organização. Use o login de voluntário."
          : "Este email não pertence a um voluntário. Use o login de organização.";

      return NextResponse.json({ error: errorMessage }, { status: 401 });
    }

    // Verificar a senha
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Email ou senha incorretos." },
        { status: 401 },
      );
    }

    // Renomear a variável `password` durante a desestruturação para evitar conflitos
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;
    // Remover a propriedade manualmente, se necessário
    if ("password" in userWithoutPassword) {
      delete userWithoutPassword.password;
    }

    // Retornar os dados do usuário (sem a senha)
    return NextResponse.json({
      user: userWithoutPassword,
      message: "Login realizado com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return NextResponse.json(
      {
        error: "Falha ao fazer login",
        message: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 },
    );
  }
}
