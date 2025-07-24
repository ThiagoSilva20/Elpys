import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userType, ...data } = body;

    let endpoint = "";
    let payload = {};

    if (userType === "volunteer") {
      // Para voluntários, usamos o endpoint de pessoas
      endpoint = "/persons/";

      // Mapear os dados do frontend para o formato do backend
      payload = {
        username: data.email, // Usar email como username
        email: data.email,
        password: data.password,
        cpf: data.cpf || "00000000000", // CPF obrigatório no backend
        full_name: data.fullName,
        birth_date: data.birthDate || null,
      };
    } else if (userType === "organization") {
      // Para organizações, usamos o endpoint de empresas
      endpoint = "/companies/";

      payload = {
        username: data.email,
        email: data.email,
        password: data.password,
        cnpj: data.cnpj,
        company_name: data.companyName,
        trade_name: "",
        state_registration: "",
      };
    } else {
      return NextResponse.json(
        { error: "Tipo de usuário inválido" },
        { status: 400 },
      );
    }

    // Fazer a requisição para o backend Django
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: responseData.error || "Erro no cadastro" },
        { status: response.status },
      );
    }

    return NextResponse.json({
      message: "Cadastro realizado com sucesso!",
      user: responseData,
    });
  } catch (error) {
    console.error("Erro no registro:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
