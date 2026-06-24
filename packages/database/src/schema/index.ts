import { relations } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", ["user", "moderator", "admin"]);

export const playerPositionEnum = pgEnum("player_position", [
  "GOL",
  "LD",
  "LE",
  "ZAG",
  "VOL",
  "MC",
  "MEI",
  "PD",
  "PE",
  "SA",
  "ATA"
]);

export const dominantFootEnum = pgEnum("dominant_foot", ["right", "left"]);

export const playerStyleEnum = pgEnum("player_style", [
  "balanced",
  "technical",
  "physical",
  "defensive",
  "playmaker",
  "finisher",
  "goalkeeper"
]);

export const careerStatusEnum = pgEnum("career_status", ["active", "retired"]);

const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull()
};

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash"),
  role: userRoleEnum("role").default("user").notNull(),
  ...timestamps
});

export const profiles = pgTable("profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  displayName: varchar("display_name", { length: 80 }).notNull(),
  avatarUrl: text("avatar_url"),
  bio: text("bio"),
  ...timestamps
});

export const players = pgTable("players", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  profileId: uuid("profile_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" })
    .unique(),
  athleteName: varchar("athlete_name", { length: 80 }).notNull(),
  nickname: varchar("nickname", { length: 40 }),
  position: playerPositionEnum("position").notNull(),
  dominantFoot: dominantFootEnum("dominant_foot").notNull(),
  heightCm: integer("height_cm").notNull(),
  weightKg: integer("weight_kg").notNull(),
  style: playerStyleEnum("style").default("balanced").notNull(),
  age: integer("age").default(16).notNull(),
  careerStatus: careerStatusEnum("career_status").default("active").notNull(),
  ...timestamps
});

export const playerAttributes = pgTable("player_attributes", {
  id: uuid("id").defaultRandom().primaryKey(),
  playerId: uuid("player_id")
    .notNull()
    .references(() => players.id, { onDelete: "cascade" })
    .unique(),
  pace: integer("pace").notNull(),
  stamina: integer("stamina").notNull(),
  strength: integer("strength").notNull(),
  agility: integer("agility").notNull(),
  passing: integer("passing").notNull(),
  finishing: integer("finishing").notNull(),
  dribbling: integer("dribbling").notNull(),
  crossing: integer("crossing").notNull(),
  tackling: integer("tackling").notNull(),
  marking: integer("marking").notNull(),
  goalkeeping: integer("goalkeeping").notNull(),
  reflexes: integer("reflexes").notNull(),
  positioning: integer("positioning").notNull(),
  decision: integer("decision").notNull(),
  composure: integer("composure").notNull(),
  leadership: integer("leadership").notNull(),
  ...timestamps
});

export const usersRelations = relations(users, ({ one }) => ({
  profile: one(profiles),
  player: one(players)
}));

export const profilesRelations = relations(profiles, ({ one }) => ({
  user: one(users, {
    fields: [profiles.userId],
    references: [users.id]
  }),
  player: one(players)
}));

export const playersRelations = relations(players, ({ one }) => ({
  user: one(users, {
    fields: [players.userId],
    references: [users.id]
  }),
  profile: one(profiles, {
    fields: [players.profileId],
    references: [profiles.id]
  }),
  attributes: one(playerAttributes)
}));

export const playerAttributesRelations = relations(playerAttributes, ({ one }) => ({
  player: one(players, {
    fields: [playerAttributes.playerId],
    references: [players.id]
  })
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Profile = typeof profiles.$inferSelect;
export type NewProfile = typeof profiles.$inferInsert;
export type Player = typeof players.$inferSelect;
export type NewPlayer = typeof players.$inferInsert;
export type PlayerAttributes = typeof playerAttributes.$inferSelect;
export type NewPlayerAttributes = typeof playerAttributes.$inferInsert;
