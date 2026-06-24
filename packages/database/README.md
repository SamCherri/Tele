# packages/database

Pacote de banco de dados do Telesoccer RP.

## Decisão atual

- O MVP usa Railway PostgreSQL como banco principal.
- Drizzle ORM é usado para schema e migrations.
- `pg`/node-postgres é usado como driver de conexão.
- Supabase não será usado no MVP inicial, salvo nova decisão técnica registrada na documentação.

## Estrutura

- `src/schema/index.ts`: schema Drizzle inicial.
- `src/client.ts`: client PostgreSQL com Drizzle.
- `drizzle/`: migrations versionadas geradas pelo drizzle-kit.
- `drizzle.config.ts`: configuração do Drizzle usando `DATABASE_URL`.

## Tabelas iniciais

- `users`
- `profiles`
- `players`
- `player_attributes`

## Scripts

- `pnpm --filter @telesoccer-rp/database db:generate`
- `pnpm --filter @telesoccer-rp/database db:migrate`
- `pnpm --filter @telesoccer-rp/database db:push`
- `pnpm --filter @telesoccer-rp/database db:studio`
- `pnpm --filter @telesoccer-rp/database lint`
- `pnpm --filter @telesoccer-rp/database typecheck`
- `pnpm --filter @telesoccer-rp/database build`

## Observação

Este pacote ainda não implementa login, cadastro visual, criação de personagem no app, clubes ou partidas. Ele apenas prepara a base segura para essas próximas etapas.
