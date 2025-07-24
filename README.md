# 🚀 Elpys Frontend

Frontend Next.js para o sistema de vagas voluntárias de programação Elpys.

## 📋 Sobre

Este é o frontend do projeto Elpys, desenvolvido em Next.js 15 com TypeScript. O sistema se conecta com o backend Django para gerenciar vagas voluntárias de programação.

## 🏗️ Arquitetura

```
Frontend (Next.js) ←→ Backend (Django REST API)
     Porta 3000           Porta 8000
```

## 🚀 Configuração Rápida

### **Pré-requisitos**
- Node.js 18+
- npm ou yarn
- Backend Django rodando

### **1. Instalar dependências**
```bash
npm install
```

### **2. Configurar variáveis de ambiente**
O arquivo `.env.local` já está configurado com:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### **3. Iniciar servidor de desenvolvimento**
```bash
npm run dev
```

### **4. Acessar aplicação**
- **URL**: http://localhost:3000
- **API**: http://localhost:8000/api

## 📁 Estrutura do Projeto

```
src/app/
├── _components/          # Componentes reutilizáveis
├── _lib/                 # Utilitários e configurações
│   ├── api.ts           # Cliente HTTP para Django
│   ├── services/        # Serviços de API
│   │   ├── auth.ts      # Autenticação
│   │   ├── jobs.ts      # Vagas
│   │   └── applications.ts # Candidaturas
│   └── hooks/           # Hooks React
├── login/               # Páginas de login
├── cadastro/            # Páginas de cadastro
├── dashboard/           # Dashboard do usuário
└── ...
```

## 🔧 Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **React Hook Form** - Formulários
- **Zod** - Validação de dados

## 🔐 Autenticação

O sistema usa autenticação baseada em sessões Django:

### **Login de Voluntário**
- Endpoint: `POST /api/auth/login/`
- Validação: `is_person = true`

### **Login de Organização**
- Endpoint: `POST /api/auth/login/`
- Validação: `is_company = true`

### **Sessões**
- Cookies gerenciados automaticamente
- Sessões persistentes no Django

## 📊 Funcionalidades

### **Para Voluntários:**
- ✅ Login e cadastro
- ✅ Busca de vagas
- ✅ Candidatura para vagas
- ✅ Acompanhamento de candidaturas

### **Para Organizações:**
- ✅ Login e cadastro
- ✅ Publicação de vagas
- ✅ Gerenciamento de candidaturas
- ✅ Métricas de visualização

## 🧪 Testando

### **1. Verificar backend**
```bash
curl http://localhost:8000/api/categories/
```

### **2. Testar login**
- Acesse: http://localhost:3000/login
- Use credenciais de teste do backend

### **3. Dados de exemplo**
Execute no backend:
```bash
python populate_sample_data.py
```

## 🐛 Debugging

### **Problemas comuns:**

#### **CORS Error:**
- Verificar se backend está rodando
- Verificar configuração CORS no Django

#### **404 Not Found:**
- Verificar se `NEXT_PUBLIC_API_URL` está correto
- Verificar se endpoint existe no Django

#### **401 Unauthorized:**
- Verificar credenciais
- Verificar se usuário está logado

## 📈 Próximos Passos

1. **Implementar autenticação persistente**
2. **Adicionar loading states**
3. **Implementar cache de dados**
4. **Adicionar notificações**
5. **Implementar paginação**
6. **Adicionar busca avançada**

## 📞 Suporte

Para dúvidas:
1. Verificar este README
2. Verificar `FRONTEND_INTEGRATION.md` no backend
3. Verificar console do navegador
4. Verificar Network tab do DevTools

---

**🎉 Frontend configurado e pronto para uso!**
