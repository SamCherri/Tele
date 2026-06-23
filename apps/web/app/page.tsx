import { PROJECT_NAME, MVP_RULES } from "@telesoccer-rp/shared";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#06110d] via-pitch to-[#020403] px-5 py-8 text-slate-50">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md flex-col justify-between rounded-[2rem] border border-white/10 bg-black/30 p-6 shadow-2xl shadow-black/40 backdrop-blur">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neon">Mobile-first web</p>
          <h1 className="mt-4 text-4xl font-black leading-tight">{PROJECT_NAME}</h1>
          <p className="mt-4 text-base leading-7 text-slate-200">
            Futebol RP 11vs11 por cenas, decisões simultâneas e servidor autoritativo. Esta é a base técnica para o MVP web.
          </p>
        </div>

        <div className="mt-8 space-y-3 rounded-3xl bg-white/10 p-4">
          {MVP_RULES.map((rule) => (
            <div key={rule} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100">
              {rule}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3">
          <button className="rounded-2xl bg-neon px-5 py-4 font-bold text-slate-950">Entrar em breve</button>
          <p className="text-center text-xs text-slate-300">Autenticação, banco e motor de partida serão implementados em etapas futuras.</p>
        </div>
      </section>
    </main>
  );
}
