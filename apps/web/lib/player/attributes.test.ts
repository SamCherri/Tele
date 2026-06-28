import { describe, expect, it } from "vitest";
import { PLAYER_POSITIONS } from "@telesoccer-rp/shared";
import { generateInitialAttributes } from "./attributes";

describe("generateInitialAttributes", () => {
  it("mantém todos os atributos na faixa segura", () => {
    for (const position of PLAYER_POSITIONS) {
      const attributes = generateInitialAttributes(position);
      for (const value of Object.values(attributes)) {
        expect(value).toBeGreaterThanOrEqual(35);
        expect(value).toBeLessThanOrEqual(60);
      }
    }
  });

  it("prioriza grupos de atributos por posição", () => {
    expect(generateInitialAttributes("GOL").goalkeeping).toBeGreaterThan(generateInitialAttributes("GOL").finishing);
    expect(generateInitialAttributes("ATA").finishing).toBeGreaterThan(generateInitialAttributes("ATA").marking);
    expect(generateInitialAttributes("MEI").passing).toBeGreaterThan(generateInitialAttributes("MEI").tackling);
    expect(generateInitialAttributes("ZAG").marking).toBeGreaterThan(generateInitialAttributes("ZAG").dribbling);
    expect(generateInitialAttributes("PE").dribbling).toBeGreaterThan(generateInitialAttributes("PE").tackling);
  });
});
