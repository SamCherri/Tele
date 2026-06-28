import { describe, expect, it } from "vitest";
import { playerCreationSchema } from "./validation";

describe("playerCreationSchema", () => {
  it("aceita um personagem inicial válido", () => {
    expect(playerCreationSchema.safeParse({ athleteName: "João Bola", position: "MC", dominantFoot: "right", heightCm: 178, weightKg: 74, style: "playmaker" }).success).toBe(true);
  });

  it("recusa posição, altura e peso inválidos", () => {
    expect(playerCreationSchema.safeParse({ athleteName: "A", position: "INVALID", dominantFoot: "right", heightCm: 140, weightKg: 140, style: "balanced" }).success).toBe(false);
  });
});
