import { db, players } from "@telesoccer-rp/database";
import { DOMINANT_FOOTS, PLAYER_POSITIONS, PLAYER_STYLES } from "@telesoccer-rp/shared";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";
import { requireUserId } from "@/lib/auth/session";
import { CreatePlayerForm } from "./player-form";

export default async function CreatePlayerPage() {
  const userId = await requireUserId();
  const existingPlayer = await db.select({ id: players.id }).from(players).where(eq(players.userId, userId)).limit(1);
  if (existingPlayer.length > 0) redirect("/profile");

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#06110d] via-pitch to-[#020403] px-5 py-8 text-slate-50">
      <section className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-black/35 p-6 shadow-2xl shadow-black/40">
        <Link href="/profile" className="text-sm text-neon">← Perfil</Link>
        <h1 className="mt-6 text-3xl font-black">Criar personagem</h1>
        <p className="mt-2 text-sm text-slate-300">Seu atleta começa com 16 anos e atributos modestos gerados pelo servidor.</p>
        <CreatePlayerForm positions={PLAYER_POSITIONS} feet={DOMINANT_FOOTS} styles={PLAYER_STYLES} />
      </section>
    </main>
  );
}
