"use client";

import { useFormState } from "react-dom";
import { createPlayerAction } from "./actions";

export function CreatePlayerForm({ positions, feet, styles }: { positions: readonly string[]; feet: readonly string[]; styles: readonly string[] }) {
  const [state, formAction] = useFormState(createPlayerAction, {});
  return (
    <form action={formAction} className="mt-6 grid gap-4">
      {state.error ? <p className="rounded-2xl bg-red-500/15 p-3 text-sm text-red-200">{state.error}</p> : null}
      <label className="grid gap-2 text-sm font-semibold">Nome do atleta<input name="athleteName" required maxLength={80} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white" /></label>
      <label className="grid gap-2 text-sm font-semibold">Apelido opcional<input name="nickname" maxLength={40} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white" /></label>
      <label className="grid gap-2 text-sm font-semibold">Posição<select name="position" required className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white">{positions.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label className="grid gap-2 text-sm font-semibold">Pé dominante<select name="dominantFoot" required className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white">{feet.map((item) => <option key={item} value={item}>{item === "right" ? "Direito" : "Esquerdo"}</option>)}</select></label>
      <label className="grid gap-2 text-sm font-semibold">Altura (cm)<input name="heightCm" type="number" min={150} max={210} defaultValue={175} required className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white" /></label>
      <label className="grid gap-2 text-sm font-semibold">Peso (kg)<input name="weightKg" type="number" min={45} max={120} defaultValue={70} required className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white" /></label>
      <label className="grid gap-2 text-sm font-semibold">Estilo<select name="style" required className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white">{styles.map((item) => <option key={item}>{item}</option>)}</select></label>
      <button className="rounded-2xl bg-neon px-5 py-4 font-bold text-slate-950">Salvar personagem</button>
    </form>
  );
}
