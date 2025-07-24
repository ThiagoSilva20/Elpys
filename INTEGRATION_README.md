# 🔗 Integração com Backend Django

## 📋 Visão Geral

Este frontend Next.js está configurado para se comunicar com o backend Django do projeto Elpys.

## 🚀 Configuração Rápida

### 1. **Instalar dependências**
```bash
npm install
```

### 2. **Configurar variáveis de ambiente**
Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### 3. **Iniciar servidor de desenvolvimento**
```bash
npm run dev
```

## 📁 Estrutura de Arquivos

```
src/app/_lib/
├── api.ts                    # Cliente HTTP e tipos TypeScript
├── services/
│   ├── auth.ts              # Serviços de autenticação
│   ├── jobs.ts              # Serviços de vagas
│   └── applications.ts      # Serviços de candidaturas
└── hooks/
    └── useApi.ts            # Hooks React para gerenciar API
```

## 🔧 Como Usar

### **Importar serviços:**
```typescript
import { AuthService } from '@/app/_lib/services/auth';
import { JobsService } from '@/app/_lib/services/jobs';
import { ApplicationsService } from '@/app/_lib/services/applications';
```

### **Exemplo de uso em componente:**
```typescript
'use client';

import { useEffect, useState } from 'react';
import { JobsService } from '@/app/_lib/services/jobs';
import { Job } from '@/app/_lib/api';

export default function JobsList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await JobsService.getJobs({ status: 'active' });
        setJobs(jobsData);
      } catch (error) {
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      {jobs.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}
```

## 🔐 Autenticação

### **Login:**
```typescript
const loginData = {
  email: 'user@example.com',
  password: 'password123'
};

try {
  const response = await AuthService.login(loginData);
  console.log('Login realizado:', response.user);
} catch (error) {
  console.error('Erro no login:', error.message);
}
```

### **Registro de empresa:**
```typescript
const companyData = {
  email: 'empresa@example.com',
  password: 'password123',
  cnpj: '12345678000100',
  company_name: 'Minha Empresa LTDA',
  trade_name: 'Minha Empresa'
};

try {
  const response = await AuthService.registerCompany(companyData);
  console.log('Empresa registrada:', response.user_company);
} catch (error) {
  console.error('Erro no registro:', error.message);
}
```

## 📊 Gerenciamento de Vagas

### **Listar vagas:**
```typescript
// Todas as vagas ativas
const jobs = await JobsService.getJobs({ status: 'active' });

// Vagas com filtros
const filteredJobs = await JobsService.getJobs({
  status: 'active',
  category: 1,
  location: 'São Paulo',
  job_type: 'remote',
  search: 'react'
});
```

### **Criar vaga:**
```typescript
const jobData = {
  title: 'Desenvolvedor Frontend React',
  description: 'Vaga para desenvolvedor React...',
  requirements: 'Conhecimento em React, TypeScript...',
  location: 'São Paulo',
  job_type: 'remote',
  hours_per_week: 20,
  is_flexible_hours: true,
  is_flexible_duration: true,
  category: 1
};

try {
  const job = await JobsService.createJob(jobData);
  console.log('Vaga criada:', job);
} catch (error) {
  console.error('Erro ao criar vaga:', error.message);
}
```

## 📝 Gerenciamento de Candidaturas

### **Criar candidatura:**
```typescript
const applicationData = {
  job: 1,
  cover_letter: 'Sou interessado nesta vaga...',
  resume: file // File object (opcional)
};

try {
  const application = await ApplicationsService.createApplication(applicationData);
  console.log('Candidatura criada:', application);
} catch (error) {
  console.error('Erro ao criar candidatura:', error.message);
}
```

### **Listar candidaturas:**
```typescript
// Minhas candidaturas (para desenvolvedores)
const myApplications = await ApplicationsService.getMyApplications();

// Candidaturas da empresa (para empresas)
const companyApplications = await ApplicationsService.getCompanyApplications();
```

## 🎯 Hooks Personalizados

### **useApi Hook:**
```typescript
import { useApi } from '@/app/_lib/hooks/useApi';

function MyComponent() {
  const { data, loading, error, execute } = useApi(JobsService.getJobs);

  useEffect(() => {
    execute({ status: 'active' });
  }, [execute]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      {data?.map(job => (
        <div key={job.id}>{job.title}</div>
      ))}
    </div>
  );
}
```

## 🚨 Tratamento de Erros

### **Estrutura de erro:**
```typescript
try {
  const data = await JobsService.getJobs();
} catch (error) {
  if (error instanceof ApiError) {
    console.error('Erro da API:', error.message);
    console.error('Status:', error.status);
    console.error('Dados:', error.data);
  } else {
    console.error('Erro de rede:', error.message);
  }
}
```

## 🔄 Upload de Arquivos

### **Upload de currículo:**
```typescript
const handleFileUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('job', '1');
  formData.append('cover_letter', 'Minha carta de apresentação...');
  formData.append('resume', file);

  try {
    const application = await ApplicationsService.createApplication(formData);
    console.log('Candidatura com currículo criada:', application);
  } catch (error) {
    console.error('Erro ao fazer upload:', error.message);
  }
};
```

## 🧪 Testando

### **1. Verificar se o backend está rodando:**
```bash
curl http://localhost:8000/api/categories/
```

### **2. Testar no console do navegador:**
```javascript
// Abrir console do navegador (F12)
fetch('http://localhost:8000/api/categories/')
  .then(response => response.json())
  .then(data => console.log(data));
```

### **3. Usar o script de teste:**
```bash
# No diretório do backend
python test_integration.py
```

## 🐛 Debugging

### **Problemas comuns:**

#### **CORS Error:**
- Verificar se o backend está rodando
- Verificar se `NEXT_PUBLIC_API_URL` está correto
- Verificar configuração CORS no Django

#### **404 Not Found:**
- Verificar se a URL da API está correta
- Verificar se o endpoint existe no backend

#### **401 Unauthorized:**
- Verificar se o usuário está logado
- Verificar credenciais

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

**🎉 Frontend configurado e pronto para integração!** 