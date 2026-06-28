"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })} className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-slate-100">
      Sair
    </button>
  );
}
