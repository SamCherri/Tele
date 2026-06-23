import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Telesoccer RP",
  description: "Jogo online mobile-first de futebol RP por cenas e decisões simultâneas."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
