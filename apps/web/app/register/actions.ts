"use server";

import { db, profiles, users } from "@telesoccer-rp/database";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { hashPassword } from "@/lib/auth/password";
import { registerSchema } from "@/lib/player/validation";

export type RegisterState = { error?: string };

export async function registerAction(_state: RegisterState, formData: FormData): Promise<RegisterState> {
  const parsed = registerSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    displayName: formData.get("displayName")
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Confira os dados do cadastro." };
  }

  const email = parsed.data.email.toLowerCase();
  const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
  if (existing.length > 0) {
    return { error: "Já existe uma conta com este e-mail." };
  }

  const passwordHash = await hashPassword(parsed.data.password);

  await db.transaction(async (tx) => {
    const [user] = await tx.insert(users).values({ email, passwordHash }).returning({ id: users.id });
    await tx.insert(profiles).values({ userId: user.id, displayName: parsed.data.displayName });
  });

  redirect("/login?registered=1");
}
