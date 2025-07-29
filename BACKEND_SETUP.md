# Configuração do Backend Django

## Problema Identificado

O cadastro de voluntário estava retornando erro 400 porque o backend Django não estava rodando corretamente.

## Solução Temporária

A API de registro foi modificada para funcionar sem o backend, simulando o cadastro. Isso permite testar o frontend enquanto o backend é configurado.

## Como Configurar o Backend

### 1. Navegar para o diretório do backend
```bash
cd ../elpys-backend/elpys
```

### 2. Ativar o ambiente virtual
```bash
source ../venv/bin/activate
```

### 3. Instalar dependências
```bash
pip install -r ../requirements.txt
```

### 4. Verificar configurações
```bash
python manage.py check
```

### 5. Executar migrações
```bash
python manage.py migrate
```

### 6. Iniciar o servidor
```bash
python manage.py runserver
```

### 7. Testar se está funcionando
```bash
curl -X GET http://localhost:8000/api/persons/
```

## Como Reativar o Backend Real

Quando o backend estiver funcionando, descomente o código na API:

1. Abra `src/app/api/register/route.ts`
2. Descomente a linha `const API_BASE_URL = ...`
3. Descomente todo o bloco de código original (dentro de `/* */`)
4. Remova o código de simulação

## Estrutura do Backend

- **Models**: `User`, `User_Person`, `User_Company`
- **Serializers**: `UserPersonSerializer`, `UserCompanySerializer`
- **Views**: `UserPersonViewSet`, `UserCompanyViewSet`
- **URLs**: `/api/persons/`, `/api/companies/`

## Endpoints Disponíveis

- `POST /api/persons/` - Cadastro de voluntários
- `POST /api/companies/` - Cadastro de organizações
- `GET /api/persons/` - Listar voluntários
- `GET /api/companies/` - Listar organizações

## Dados Esperados

### Para Voluntários:
```json
{
  "username": "email@exemplo.com",
  "email": "email@exemplo.com",
  "password": "senha123",
  "cpf": "12345678901",
  "full_name": "Nome Completo",
  "birth_date": "1990-01-01"
}
```

### Para Organizações:
```json
{
  "username": "email@exemplo.com",
  "email": "email@exemplo.com",
  "password": "senha123",
  "cnpj": "12345678901234",
  "company_name": "Nome da Empresa",
  "trade_name": "Nome Fantasia",
  "state_registration": "123456789"
}
``` 