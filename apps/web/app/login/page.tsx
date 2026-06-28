import Link from "next/link";
import { Suspense } from "react";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#06110d] via-pitch to-[#020403] px-5 py-8 text-slate-50">
      <section className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-black/35 p-6 shadow-2xl shadow-black/40">
        <Link href="/" className="text-sm text-neon">← Voltar</Link>
        <h1 className="mt-6 text-3xl font-black">Entrar</h1>
        <p className="mt-2 text-sm text-slate-300">Acesse seu perfil do Telesoccer RP.</p>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </section>
    </main>
  );
}
