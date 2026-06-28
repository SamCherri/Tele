export const PROJECT_NAME = "Telesoccer RP";

export const MVP_RULES = [
  "11vs11 com goleiro player real desde o começo.",
  "Partidas por cenas e decisões, não por controle livre.",
  "Cliente não calcula resultado de partida.",
  "Free-to-play justo, sem pay-to-win."
] as const;

export const PLAYER_POSITIONS = ["GOL", "LD", "LE", "ZAG", "VOL", "MC", "MEI", "PD", "PE", "SA", "ATA"] as const;
export type PlayerPosition = (typeof PLAYER_POSITIONS)[number];

export const DOMINANT_FOOTS = ["right", "left"] as const;
export const PLAYER_FEET = DOMINANT_FOOTS;
export type PlayerFoot = (typeof DOMINANT_FOOTS)[number];

export const PLAYER_STYLES = [
  "balanced",
  "technical",
  "physical",
  "defensive",
  "playmaker",
  "finisher",
  "goalkeeper"
] as const;
export type PlayerStyle = (typeof PLAYER_STYLES)[number];

export type PlayerCreationInput = {
  athleteName: string;
  nickname?: string;
  position: PlayerPosition;
  dominantFoot: PlayerFoot;
  heightCm: number;
  weightKg: number;
  style: PlayerStyle;
};

export type CreatePlayerInput = PlayerCreationInput & {
  profileId: string;
};

export type CreatePlayerAttributesInput = {
  pace: number;
  stamina: number;
  strength: number;
  agility: number;
  passing: number;
  finishing: number;
  dribbling: number;
  crossing: number;
  tackling: number;
  marking: number;
  goalkeeping: number;
  reflexes: number;
  positioning: number;
  decision: number;
  composure: number;
  leadership: number;
};
