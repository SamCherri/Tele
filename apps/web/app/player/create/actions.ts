"use server";

import { db, playerAttributes, players, profiles } from "@telesoccer-rp/database";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { requireUserId } from "@/lib/auth/session";
import { generateInitialAttributes } from "@/lib/player/attributes";
import { playerCreationSchema } from "@/lib/player/validation";

export type CreatePlayerState = { error?: string };

export async function createPlayerAction(_state: CreatePlayerState, formData: FormData): Promise<CreatePlayerState> {
  const userId = await requireUserId();
  const parsed = playerCreationSchema.safeParse({
    athleteName: formData.get("athleteName"),
    nickname: formData.get("nickname"),
    position: formData.get("position"),
    dominantFoot: formData.get("dominantFoot"),
    heightCm: formData.get("heightCm"),
    weightKg: formData.get("weightKg"),
    style: formData.get("style")
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Confira os dados do personagem." };
  }

  const [profile] = await db.select().from(profiles).where(eq(profiles.userId, userId)).limit(1);
  if (!profile) return { error: "Perfil não encontrado para este usuário." };

  const existingPlayer = await db.select({ id: players.id }).from(players).where(eq(players.userId, userId)).limit(1);
  if (existingPlayer.length > 0) return { error: "Você já criou seu personagem inicial." };

  await db.transaction(async (tx) => {
    const [player] = await tx
      .insert(players)
      .values({
        userId,
        profileId: profile.id,
        athleteName: parsed.data.athleteName,
        nickname: parsed.data.nickname,
        position: parsed.data.position,
        dominantFoot: parsed.data.dominantFoot,
        heightCm: parsed.data.heightCm,
        weightKg: parsed.data.weightKg,
        style: parsed.data.style,
        age: 16,
        careerStatus: "active"
      })
      .returning({ id: players.id });

    await tx.insert(playerAttributes).values({
      playerId: player.id,
      ...generateInitialAttributes(parsed.data.position)
    });
  });

  redirect("/profile");
}
