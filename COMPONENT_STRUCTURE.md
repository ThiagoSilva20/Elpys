# Estrutura de Componentes Refatorada

## Visão Geral

A aplicação foi refatorada para melhorar a componentização, reutilização e manutenibilidade do código. A nova estrutura organiza os componentes em categorias lógicas e fornece interfaces TypeScript bem definidas.

## Estrutura de Diretórios

```
src/app/_components/
├── layout/           # Componentes de layout reutilizáveis
├── ui/              # Componentes de interface do usuário
├── dashboard/       # Componentes específicos do dashboard
├── auth/            # Componentes de autenticação
├── landingpage/     # Componentes da página inicial
├── magicui/         # Componentes de animação e efeitos
└── index.ts         # Exportações centralizadas
```

## Componentes Principais

### Layout Components (`/layout`)

- **BaseLayout**: Layout base com ThemeProvider
- **Header**: Header reutilizável com navegação opcional
- **PageContainer**: Container para páginas com largura e padding configuráveis
- **AuthLayout**: Layout específico para páginas de autenticação
- **SectionContainer**: Container para seções da landing page

### UI Components (`/ui`)

- **Logo**: Componente de logo reutilizável com diferentes tamanhos
- **SelectionCard**: Card para seleção de opções (usado no cadastro)
- **LoadingSpinner**: Spinner de carregamento reutilizável
- **FormContainer**: Container para formulários
- **ErrorBoundary**: Boundary para captura de erros
- **Breadcrumb**: Navegação breadcrumb
- **EmptyState**: Estado vazio para listas

### Dashboard Components (`/dashboard`)

- **DashboardHeader**: Header específico do dashboard
- **DashboardCard**: Card reutilizável para o dashboard

## Benefícios da Refatoração

### 1. Reutilização
- Componentes modulares que podem ser usados em múltiplas páginas
- Props bem definidas com TypeScript
- Configurações flexíveis através de props

### 2. Manutenibilidade
- Código organizado em categorias lógicas
- Interfaces TypeScript para type safety
- Componentes com responsabilidades únicas

### 3. Consistência
- Design system unificado
- Padrões consistentes de layout
- Componentes com estilos padronizados

### 4. Performance
- Componentes otimizados
- Lazy loading quando necessário
- Error boundaries para captura de erros

## Como Usar

### Importação de Componentes

```typescript
// Importação individual
import { Header } from "@/app/_components/layout";
import { Logo, LoadingSpinner } from "@/app/_components/ui";

// Importação de todos os componentes
import * as Components from "@/app/_components";
```

### Exemplo de Uso

```typescript
import { PageContainer, Header, Logo } from "@/app/_components";

export default function MinhaPagina() {
  return (
    <div className="min-h-screen">
      <Header showNavigation={false} />
      <PageContainer maxWidth="xl" padding="lg">
        <Logo size="lg" />
        {/* Conteúdo da página */}
      </PageContainer>
    </div>
  );
}
```

## Convenções

### Nomenclatura
- Componentes: PascalCase
- Arquivos: kebab-case
- Props: camelCase
- Interfaces: PascalCase com sufixo "Props"

### Estrutura de Componentes
```typescript
interface ComponentProps {
  // Props obrigatórias primeiro
  requiredProp: string;
  
  // Props opcionais depois
  optionalProp?: string;
  
  // Props de estilo por último
  className?: string;
}

export default function Component({ 
  requiredProp, 
  optionalProp, 
  className = "" 
}: ComponentProps) {
  return (
    <div className={className}>
      {/* Conteúdo do componente */}
    </div>
  );
}
```

## Próximos Passos

1. Refatorar páginas restantes para usar os novos componentes
2. Adicionar testes unitários para os componentes
3. Criar storybook para documentação visual
4. Implementar tema escuro/claro consistente
5. Adicionar animações e transições 