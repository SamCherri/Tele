import { defineConfig } from "drizzle-kit";

const isGenerateCommand = process.env.npm_lifecycle_event === "db:generate";

function getDatabaseUrl(): string {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  if (isGenerateCommand) {
    return "postgresql://user:password@localhost:5432/telesoccer_rp";
  }

  throw new Error(
    "DATABASE_URL não foi configurada. Defina a URL do Railway PostgreSQL antes de executar migrations, push ou studio."
  );
}

export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: getDatabaseUrl()
  },
  strict: true,
  verbose: true
});
