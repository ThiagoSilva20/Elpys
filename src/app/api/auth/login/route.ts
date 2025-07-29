import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    console.log("Tentativa de login:", { email });

    // Verificações básicas
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e senha são obrigatórios" },
        { status: 400 },
      );
    }

    // Usar backend real agora que está funcionando
    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

    console.log("Tentando login no backend:", `${API_BASE_URL}/auth/login/`);

    const response = await fetch(`${API_BASE_URL}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    let responseData;
    try {
      responseData = await response.json();
      console.log("Resposta do backend:", responseData);
    } catch (error) {
      console.error("Erro ao parsear resposta:", error);
      return NextResponse.json(
        { error: "Servidor backend não está respondendo corretamente" },
        { status: 503 },
      );
    }

    if (!response.ok) {
      console.error("Erro no backend:", responseData);
      return NextResponse.json(
        { error: responseData.error || responseData.detail || "Erro no login" },
        { status: response.status },
      );
    }

    return NextResponse.json(responseData);

    // Código original comentado para quando o backend estiver funcionando
    /*
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
    
    const response = await fetch(`${API_BASE_URL}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: responseData.error || "Erro no login" },
        { status: response.status },
      );
    }

    return NextResponse.json(responseData);
    */
  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
