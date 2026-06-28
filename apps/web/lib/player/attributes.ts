import type { CreatePlayerAttributesInput, PlayerPosition } from "@telesoccer-rp/shared";

const BASE_ATTRIBUTES: CreatePlayerAttributesInput = {
  pace: 42,
  stamina: 44,
  strength: 42,
  agility: 42,
  passing: 42,
  finishing: 40,
  dribbling: 42,
  crossing: 40,
  tackling: 40,
  marking: 40,
  goalkeeping: 35,
  reflexes: 38,
  positioning: 42,
  decision: 42,
  composure: 42,
  leadership: 38
};

const clamp = (value: number) => Math.min(60, Math.max(35, value));

function boost(attributes: CreatePlayerAttributesInput, boosts: Partial<CreatePlayerAttributesInput>) {
  return Object.fromEntries(
    Object.entries({ ...attributes, ...boosts }).map(([key, value]) => [key, clamp(value)])
  ) as CreatePlayerAttributesInput;
}

export function generateInitialAttributes(position: PlayerPosition): CreatePlayerAttributesInput {
  if (position === "GOL") {
    return boost(BASE_ATTRIBUTES, { goalkeeping: 58, reflexes: 56, positioning: 52, agility: 48, composure: 46 });
  }

  if (["LD", "LE"].includes(position)) {
    return boost(BASE_ATTRIBUTES, { pace: 50, stamina: 50, tackling: 50, marking: 49, crossing: 47, strength: 45 });
  }

  if (position === "ZAG" || position === "VOL") {
    return boost(BASE_ATTRIBUTES, { marking: 54, tackling: 54, strength: 52, positioning: 50, decision: 47 });
  }

  if (position === "MC" || position === "MEI") {
    return boost(BASE_ATTRIBUTES, { passing: 55, decision: 53, composure: 50, dribbling: 48, positioning: 47 });
  }

  if (position === "PD" || position === "PE") {
    return boost(BASE_ATTRIBUTES, { pace: 55, dribbling: 54, crossing: 52, agility: 52, finishing: 45 });
  }

  return boost(BASE_ATTRIBUTES, { finishing: 56, positioning: 51, composure: 49, pace: 48, strength: 46 });
}
