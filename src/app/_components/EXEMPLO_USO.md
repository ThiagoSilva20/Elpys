# Exemplo de Uso dos Componentes

## Importação Individual

```typescript
// Importar componentes específicos
import { Header } from "@/app/_components/layout";
import { Logo, LoadingSpinner } from "@/app/_components/ui";
import { DashboardCard } from "@/app/_components/dashboard";
```

## Importação Geral

```typescript
// Importar todos os componentes
import * as Components from "@/app/_components";
```

## Exemplo de Página

```typescript
import { Header, PageContainer, Logo, LoadingSpinner } from "@/app/_components";

export default function MinhaPagina() {
  return (
    <div className="min-h-screen">
      <Header showNavigation={false} />
      <PageContainer maxWidth="xl" padding="lg">
        <Logo size="lg" />
        <LoadingSpinner text="Carregando..." />
      </PageContainer>
    </div>
  );
}
```
```

## Exemplo de Dashboard

```typescript
import { DashboardHeader, DashboardCard, PageContainer } from "@/app/_components";

export default function DashboardPage() {
  const handleLogout = () => {
    // Lógica de logout
  };

  return (
    <div className="min-h-screen bg-[#f5f7f5] p-4">
      <DashboardHeader onLogout={handleLogout} />
      <PageContainer maxWidth="full">
        <DashboardCard
          title="Meu Perfil"
          description="Gerencie suas informações"
          buttonText="Editar"
        />
      </PageContainer>
    </div>
  );
}
```

## Exemplo de Formulário

```typescript
import { FormContainer, Logo } from "@/app/_components";

export default function LoginPage() {
  return (
    <FormContainer
      title="Entrar"
      subtitle="Faça login na sua conta"
      showLogo={true}
    >
      {/* Formulário aqui */}
    </FormContainer>
  );
}
``` 