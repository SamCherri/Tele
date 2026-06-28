import { db, playerAttributes, players, profiles, users } from "@telesoccer-rp/database";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { requireUserId } from "@/lib/auth/session";
import { LogoutButton } from "./logout-button";

export default async function ProfilePage() {
  const userId = await requireUserId();
  const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  const [profile] = await db.select().from(profiles).where(eq(profiles.userId, userId)).limit(1);
  const [player] = await db.select().from(players).where(eq(players.userId, userId)).limit(1);
  const [attributes] = player ? await db.select().from(playerAttributes).where(eq(playerAttributes.playerId, player.id)).limit(1) : [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#06110d] via-pitch to-[#020403] px-5 py-8 text-slate-50">
      <section className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-black/35 p-6 shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-sm text-neon">Telesoccer RP</Link>
          <LogoutButton />
        </div>
        <h1 className="mt-6 text-3xl font-black">Perfil</h1>
        <div className="mt-5 space-y-3 rounded-3xl bg-white/10 p-4 text-sm">
          <p><span className="text-slate-300">Nome:</span> {profile?.displayName}</p>
          <p><span className="text-slate-300">E-mail:</span> {user?.email}</p>
          <p><span className="text-slate-300">Personagem:</span> {player ? "Criado" : "Ainda não criado"}</p>
        </div>

        {player ? (
          <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-4">
            <h2 className="text-xl font-black">{player.athleteName}</h2>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-200">
              <div><dt className="text-slate-400">Apelido</dt><dd>{player.nickname || "—"}</dd></div>
              <div><dt className="text-slate-400">Posição</dt><dd>{player.position}</dd></div>
              <div><dt className="text-slate-400">Pé</dt><dd>{player.dominantFoot === "right" ? "Direito" : "Esquerdo"}</dd></div>
              <div><dt className="text-slate-400">Altura</dt><dd>{player.heightCm} cm</dd></div>
              <div><dt className="text-slate-400">Peso</dt><dd>{player.weightKg} kg</dd></div>
              <div><dt className="text-slate-400">Estilo</dt><dd>{player.style}</dd></div>
              <div><dt className="text-slate-400">Idade</dt><dd>{player.age} anos</dd></div>
              <div><dt className="text-slate-400">Carreira</dt><dd>{player.careerStatus}</dd></div>
            </dl>
            <p className="mt-4 text-xs text-slate-400">Atributos iniciais criados no servidor. Geral técnico inicial: passe {attributes?.passing}, decisão {attributes?.decision}, finalização {attributes?.finishing}.</p>
          </div>
        ) : (
          <Link href="/player/create" className="mt-6 block rounded-2xl bg-neon px-5 py-4 text-center font-bold text-slate-950">Criar personagem</Link>
        )}
      </section>
    </main>
  );
}
