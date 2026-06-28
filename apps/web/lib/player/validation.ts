import { DOMINANT_FOOTS, PLAYER_POSITIONS, PLAYER_STYLES } from "@telesoccer-rp/shared";
import { z } from "zod";

export const playerCreationSchema = z.object({
  athleteName: z.string().trim().min(2, "Informe o nome do atleta.").max(80, "Use até 80 caracteres."),
  nickname: z.string().trim().max(40, "Use até 40 caracteres.").optional().transform((value) => value || undefined),
  position: z.enum(PLAYER_POSITIONS, "Escolha uma posição oficial."),
  dominantFoot: z.enum(DOMINANT_FOOTS, "Escolha o pé dominante."),
  heightCm: z.coerce.number().int().min(150, "Altura mínima: 150 cm.").max(210, "Altura máxima: 210 cm."),
  weightKg: z.coerce.number().int().min(45, "Peso mínimo: 45 kg.").max(120, "Peso máximo: 120 kg."),
  style: z.enum(PLAYER_STYLES, "Escolha um estilo oficial.")
});

export const registerSchema = z.object({
  email: z.string().trim().email("Informe um e-mail válido.").max(255),
  password: z.string().min(8, "A senha precisa ter pelo menos 8 caracteres."),
  displayName: z.string().trim().min(2, "Informe um nome de exibição.").max(80, "Use até 80 caracteres.")
});
