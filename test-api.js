// Script para testar a API de cadastro de voluntário
const testData = {
  userType: "volunteer",
  email: "teste@teste.com",
  password: "123456",
  fullName: "João Silva",
  cpf: "12345678901",
  birthDate: "1990-01-01"
};

async function testAPI() {
  try {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const data = await response.json();
    
    console.log("Status:", response.status);
    console.log("Response:", data);
    
    if (!response.ok) {
      console.error("Erro na API:", data);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}

testAPI(); 