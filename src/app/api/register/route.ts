import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userType, email, password, ...data } = body;

    if (userType !== "organization" && userType !== "volunteer") {
      return NextResponse.json(
        {
          error:
            'Tipo de usuário inválido. Deve ser "organization" ou "volunteer".',
        },
        { status: 400 },
      );
    }

    // Validação dos dados (exemplo básico)
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e senha são obrigatórios." },
        { status: 400 },
      );
    }

    // Verificar se o email já está em uso
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Este email já está em uso." },
        { status: 400 },
      );
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        userType,
      },
    });

    let result;
    if (userType === "organization") {
      // Validação específica da organização
      if (!data.name || !data.cnpj) {
        // Excluir o usuário criado para evitar usuários órfãos
        await prisma.user.delete({ where: { id: newUser.id } });

        return NextResponse.json(
          { error: "Nome e CNPJ são obrigatórios para organizações." },
          { status: 400 },
        );
      }

      try {
        result = await prisma.organization.create({
          data: {
            name: data.name,
            cnpj: data.cnpj,
            orgType: data.orgType || "outro",
            phone: data.phone || "",
            website: data.website || "",
            address: data.address || "",
            city: data.city || "",
            state: data.state || "",
            zipCode: data.zipCode || "",
            description: data.description || "",
            userId: newUser.id,
          },
        });
      } catch (orgError) {
        // Se falhar ao criar a organização, exclua o usuário para evitar inconsistências
        await prisma.user.delete({ where: { id: newUser.id } });
        throw orgError;
      }
    } else if (userType === "volunteer") {
      // Validação específica do voluntário
      if (!data.fullName) {
        // Excluir o usuário criado para evitar usuários órfãos
        await prisma.user.delete({ where: { id: newUser.id } });

        return NextResponse.json(
          { error: "Nome completo é obrigatório para voluntários." },
          { status: 400 },
        );
      }

      try {
        result = await prisma.volunteer.create({
          data: {
            fullName: data.fullName,
            phone: data.phone || "",
            city: data.city || "",
            state: data.state || "",
            availability: data.availability || "",
            interests: data.interests || "",
            userId: newUser.id,
          },
        });
      } catch (volError) {
        // Se falhar ao criar o voluntário, exclua o usuário para evitar inconsistências
        await prisma.user.delete({ where: { id: newUser.id } });
        throw volError;
      }
    }

    return NextResponse.json(
      {
        message: "Cadastro realizado com sucesso!",
        user: {
          id: newUser.id,
          email: newUser.email,
          userType: newUser.userType,
          ...result,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erro ao criar:", error);

    // Enviar mensagem de erro mais específica, se possível
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Falha ao criar", message: error.message },
        { status: 500 },
      );
    } else {
      return NextResponse.json({ error: "Falha ao criar" }, { status: 500 });
    }
  }
}
