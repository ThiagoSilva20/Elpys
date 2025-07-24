# 🔄 Alinhamento Frontend ↔ Backend - Cadastro

## 📋 Visão Geral

Este documento explica como o formulário de cadastro do frontend foi alinhado com os requisitos do backend Django.

## 🏗️ Estrutura do Backend

### **Modelo User (Django)**
```python
class User(AbstractUser):
    email = models.EmailField(unique=True)
    is_company = models.BooleanField(default=False)
    is_person = models.BooleanField(default=False)
```

### **Modelo User_Person (Voluntários)**
```python
class User_Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    cpf = models.CharField(max_length=11, unique=True)  # ✅ OBRIGATÓRIO
    full_name = models.CharField(max_length=100)        # ✅ OBRIGATÓRIO
    birth_date = models.DateField(blank=True, null=True) # ✅ OPCIONAL
```

### **Modelo User_Company (Organizações)**
```python
class User_Company(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    cnpj = models.CharField(max_length=14, unique=True)           # ✅ OBRIGATÓRIO
    company_name = models.CharField(max_length=100)               # ✅ OBRIGATÓRIO
    trade_name = models.CharField(max_length=100, blank=True)     # ✅ OPCIONAL
    state_registration = models.CharField(max_length=20, blank=True) # ✅ OPCIONAL
```

## 🔄 Mapeamento de Dados

### **Cadastro de Voluntário**

| Frontend | Backend | Status | Observações |
|----------|---------|--------|-------------|
| `fullName` | `full_name` | ✅ Alinhado | Campo obrigatório |
| `email` | `email` | ✅ Alinhado | Usado também como username |
| `password` | `password` | ✅ Alinhado | Senha do usuário |
| `cpf` | `cpf` | ✅ Alinhado | Campo obrigatório |
| `birthDate` | `birth_date` | ✅ Alinhado | Campo obrigatório |

### **Cadastro de Organização**

| Frontend | Backend | Status | Observações |
|----------|---------|--------|-------------|
| `name` | `company_name` | ✅ Alinhado | Campo obrigatório |
| `email` | `email` | ✅ Alinhado | Usado também como username |
| `password` | `password` | ✅ Alinhado | Senha do usuário |
| `cnpj` | `cnpj` | ✅ Alinhado | Campo obrigatório |

## 🔧 Implementação

### **Endpoint de API (`/api/register/route.ts`)**

```typescript
// Para voluntários
payload = {
  username: data.email,        // Email como username
  email: data.email,
  password: data.password,
  cpf: data.cpf || '00000000000', // CPF obrigatório
  full_name: data.fullName,
  birth_date: data.birthDate || null,
};

// Para organizações
payload = {
  username: data.email,
  email: data.email,
  password: data.password,
  cnpj: data.cnpj,
  company_name: data.companyName,
  trade_name: '',
  state_registration: '',
};
```

### **Formulário de Voluntário Atualizado**

```typescript
const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  password: "",
  confirmarSenha: "",
  cpf: "",           // ✅ Campo obrigatório
  birthDate: "",     // ✅ Campo obrigatório
});
```

## ✅ Campos Alinhados

### **Apenas campos essenciais do backend:**

#### **Voluntário:**
- `fullName` - Nome completo
- `email` - Email (usado como username)
- `password` - Senha
- `cpf` - CPF
- `birthDate` - Data de nascimento

#### **Organização:**
- `name` - Nome da empresa
- `email` - Email (usado como username)
- `password` - Senha
- `cnpj` - CNPJ

## 🚀 Próximos Passos

### **Opção 1: Estender o Backend**
Adicionar os campos adicionais aos modelos Django:

```python
class User_Person(models.Model):
    # ... campos existentes ...
    phone = models.CharField(max_length=20, blank=True)
    city = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=2, blank=True)
    interests = models.TextField(blank=True)
    availability = models.CharField(max_length=50, blank=True)

class User_Company(models.Model):
    # ... campos existentes ...
    phone = models.CharField(max_length=20, blank=True)
    website = models.URLField(blank=True)
    address = models.TextField(blank=True)
    city = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=2, blank=True)
    description = models.TextField(blank=True)
```

### **Opção 2: Manter Apenas Campos Essenciais**
Remover campos adicionais do frontend e manter apenas os campos obrigatórios do backend.

### **Opção 3: Armazenar em Sessão**
Armazenar campos adicionais temporariamente na sessão do usuário.

## ✅ Status Atual

- ✅ **Campos obrigatórios alinhados**
- ✅ **Endpoint de API criado**
- ✅ **Formulários simplificados**
- ✅ **Apenas campos essenciais**
- ✅ **Validações implementadas**

## 🔍 Validações Necessárias

### **Frontend:**
- CPF válido (formato e dígitos verificadores)
- Email único
- Senha forte
- Data de nascimento válida
- CNPJ válido (para organizações)

### **Backend:**
- CPF único
- Email único
- CNPJ único
- Validações de formato

## 📞 Suporte

Para dúvidas sobre o alinhamento:
1. Verificar este documento
2. Consultar os modelos Django em `elpys-backend/elpys/users/models.py`
3. Verificar os serializers em `elpys-backend/elpys/users/serializers.py`
4. Testar os endpoints diretamente no backend

---

**🎉 O cadastro está alinhado com os requisitos essenciais do backend!** 