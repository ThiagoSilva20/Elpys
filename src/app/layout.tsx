import type { Metadata } from "next";
import "./globals.css";
import BaseLayout from "./_components/layout/BaseLayout";

export const metadata: Metadata = {
  title: "Elpys - Plataforma de Voluntariado",
  description: "Conectando voluntários e organizações para fazer a diferença",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}
