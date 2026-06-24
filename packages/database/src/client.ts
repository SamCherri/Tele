import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import pg from "pg";

import * as schema from "./schema/index";

const { Pool } = pg;

type Database = NodePgDatabase<typeof schema>;

let database: Database | undefined;
let pool: pg.Pool | undefined;

function getDatabaseUrl(): string {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL não foi configurada. Defina a variável com a URL do Railway PostgreSQL antes de usar o client do banco."
    );
  }

  return databaseUrl;
}

export function createDatabaseClient(databaseUrl = getDatabaseUrl()): Database {
  const connectionPool = new Pool({ connectionString: databaseUrl });

  return drizzle(connectionPool, { schema });
}

function getDb(): Database {
  if (!database) {
    pool = new Pool({ connectionString: getDatabaseUrl() });
    database = drizzle(pool, { schema });
  }

  return database;
}

export const db = new Proxy({} as Database, {
  get(_target, property, receiver) {
    return Reflect.get(getDb(), property, receiver);
  }
});

export async function closeDatabaseConnection(): Promise<void> {
  await pool?.end();
  pool = undefined;
  database = undefined;
}
