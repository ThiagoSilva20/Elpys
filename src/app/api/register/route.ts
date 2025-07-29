import { NextRequest, NextResponse } from "next/server";

// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userType, ...data } = body;

    console.log("Dados recebidos:", { userType, ...data });

    // Verificações básicas
    if (!data.email || !data.password) {
      return NextResponse.json(
        { error: "Email e senha são obrigatórios" },
        { status: 400 },
      );
    }

    // Validações específicas por tipo de usuário
    if (userType === "volunteer" && !data.fullName) {
      return NextResponse.json(
        { error: "Nome completo é obrigatório para voluntários" },
        { status: 400 },
      );
    }

    if (userType === "organization" && !data.companyName) {
      return NextResponse.json(
        { error: "Nome da empresa é obrigatório para organizações" },
        { status: 400 },
      );
    }

    // Simular validação de CPF
    if (userType === "volunteer" && (!data.cpf || data.cpf.length < 11)) {
      return NextResponse.json(
        { error: "CPF é obrigatório e deve ter pelo menos 11 dígitos" },
        { status: 400 },
      );
    }

    // Simular validação de CNPJ
    if (userType === "organization" && (!data.cnpj || data.cnpj.length < 14)) {
      return NextResponse.json(
        { error: "CNPJ é obrigatório e deve ter pelo menos 14 dígitos" },
        { status: 400 },
      );
    }

    // Usar backend real agora que está funcionando
    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

    let endpoint = "";
    let payload = {};

    if (userType === "volunteer") {
      endpoint = "/persons/";
      payload = {
        username: data.email,
        email: data.email,
        password: data.password,
        cpf: data.cpf ? data.cpf.replace(/\D/g, "") : "00000000000",
        full_name: data.fullName,
        birth_date: data.birthDate || null,
      };
    } else if (userType === "organization") {
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

    console.log(
      "Enviando para backend:",
      `${API_BASE_URL}${endpoint}`,
      payload,
    );

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
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
        {
          error:
            responseData.error || responseData.detail || "Erro no cadastro",
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      message: "Cadastro realizado com sucesso!",
      user: responseData,
    });

    // Código original comentado para quando o backend estiver funcionando
    /*
    let endpoint = "";
    let payload = {};

    if (userType === "volunteer") {
      endpoint = "/persons/";
      payload = {
        username: data.email,
        email: data.email,
        password: data.password,
        cpf: data.cpf ? data.cpf.replace(/\D/g, '') : "00000000000",
        full_name: data.fullName,
        birth_date: data.birthDate || null,
      };
    } else if (userType === "organization") {
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

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    let responseData;
    try {
      responseData = await response.json();
    } catch (error) {
      return NextResponse.json(
        { error: "Servidor backend não está respondendo corretamente" },
        { status: 503 },
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: responseData.error || responseData.detail || "Erro no cadastro" },
        { status: response.status },
      );
    }

    return NextResponse.json({
      message: "Cadastro realizado com sucesso!",
      user: responseData,
    });
    */
  } catch (error) {
    console.error("Erro no registro:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
