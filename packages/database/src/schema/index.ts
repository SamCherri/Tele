/**
 * Ponto de entrada futuro dos schemas Drizzle do Telesoccer RP.
 *
 * A decisão atual do MVP é usar Railway PostgreSQL como banco principal e
 * Drizzle ORM para schema/migrations, salvo impedimento técnico futuro.
 *
 * Nenhuma tabela real foi criada nesta etapa para evitar congelar um modelo
 * antes da implementação de autenticação, personagens, clubes e partidas.
 */
export const DATABASE_SCHEMA_STATUS = "reserved-for-future-drizzle-postgresql-schema" as const;
