import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./options";

export async function getCurrentUserId(): Promise<string | null> {
  const session = await getServerSession(authOptions);
  return session?.user?.id ?? null;
}

export async function requireUserId(): Promise<string> {
  const userId = await getCurrentUserId();
  if (!userId) redirect("/login");
  return userId;
}
