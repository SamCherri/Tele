"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(undefined);
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false
    });

    setIsLoading(false);
    if (result?.error) {
      setError("E-mail ou senha inválidos.");
      return;
    }

    router.push("/profile");
    router.refresh();
  }

  return (
    <>
      {searchParams.get("registered") ? <p className="mt-4 rounded-2xl bg-neon/15 p-3 text-sm text-neon">Conta criada. Agora entre com seu e-mail e senha.</p> : null}
      {error ? <p className="mt-4 rounded-2xl bg-red-500/15 p-3 text-sm text-red-200">{error}</p> : null}
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold">E-mail<input name="email" type="email" required className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white" /></label>
        <label className="grid gap-2 text-sm font-semibold">Senha<input name="password" type="password" required className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white" /></label>
        <button disabled={isLoading} className="rounded-2xl bg-neon px-5 py-4 font-bold text-slate-950 disabled:opacity-60">{isLoading ? "Entrando..." : "Entrar"}</button>
      </form>
      <p className="mt-5 text-center text-sm text-slate-300">Ainda não tem conta? <Link className="font-bold text-neon" href="/register">Criar conta</Link></p>
    </>
  );
}
