CREATE TYPE "public"."career_status" AS ENUM('active', 'retired');--> statement-breakpoint
CREATE TYPE "public"."dominant_foot" AS ENUM('right', 'left');--> statement-breakpoint
CREATE TYPE "public"."player_position" AS ENUM('GOL', 'LD', 'LE', 'ZAG', 'VOL', 'MC', 'MEI', 'PD', 'PE', 'SA', 'ATA');--> statement-breakpoint
CREATE TYPE "public"."player_style" AS ENUM('balanced', 'technical', 'physical', 'defensive', 'playmaker', 'finisher', 'goalkeeper');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('user', 'moderator', 'admin');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "player_attributes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"player_id" uuid NOT NULL,
	"pace" integer NOT NULL,
	"stamina" integer NOT NULL,
	"strength" integer NOT NULL,
	"agility" integer NOT NULL,
	"passing" integer NOT NULL,
	"finishing" integer NOT NULL,
	"dribbling" integer NOT NULL,
	"crossing" integer NOT NULL,
	"tackling" integer NOT NULL,
	"marking" integer NOT NULL,
	"goalkeeping" integer NOT NULL,
	"reflexes" integer NOT NULL,
	"positioning" integer NOT NULL,
	"decision" integer NOT NULL,
	"composure" integer NOT NULL,
	"leadership" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "player_attributes_player_id_unique" UNIQUE("player_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "players" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"profile_id" uuid NOT NULL,
	"athlete_name" varchar(80) NOT NULL,
	"nickname" varchar(40),
	"position" "player_position" NOT NULL,
	"dominant_foot" "dominant_foot" NOT NULL,
	"height_cm" integer NOT NULL,
	"weight_kg" integer NOT NULL,
	"style" "player_style" DEFAULT 'balanced' NOT NULL,
	"age" integer DEFAULT 16 NOT NULL,
	"career_status" "career_status" DEFAULT 'active' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "players_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "players_profile_id_unique" UNIQUE("profile_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profiles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"display_name" varchar(80) NOT NULL,
	"avatar_url" text,
	"bio" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "profiles_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"password_hash" text,
	"role" "user_role" DEFAULT 'user' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "player_attributes" ADD CONSTRAINT "player_attributes_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "players" ADD CONSTRAINT "players_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "players" ADD CONSTRAINT "players_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
