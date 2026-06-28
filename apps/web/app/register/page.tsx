"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { registerAction } from "./actions";

export default function RegisterPage() {
  const [state, formAction] = useFormState(registerAction, {});

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#06110d] via-pitch to-[#020403] px-5 py-8 text-slate-50">
      <section className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-black/35 p-6 shadow-2xl shadow-black/40">
        <Link href="/" className="text-sm text-neon">← Voltar</Link>
        <h1 className="mt-6 text-3xl font-black">Criar conta</h1>
        <p className="mt-2 text-sm text-slate-300">Cadastre seu acesso inicial ao Telesoccer RP.</p>
        {state.error ? <p className="mt-4 rounded-2xl bg-red-500/15 p-3 text-sm text-red-200">{state.error}</p> : null}
        <form action={formAction} className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold">Nome de exibição<input name="displayName" required maxLength={80} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white" /></label>
          <label className="grid gap-2 text-sm font-semibold">E-mail<input name="email" type="email" required className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white" /></label>
          <label className="grid gap-2 text-sm font-semibold">Senha<input name="password" type="password" required minLength={8} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white" /></label>
          <button className="rounded-2xl bg-neon px-5 py-4 font-bold text-slate-950">Criar conta</button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-300">Já tem conta? <Link className="font-bold text-neon" href="/login">Entrar</Link></p>
      </section>
    </main>
  );
}
