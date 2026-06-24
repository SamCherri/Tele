# packages/database

Pacote reservado para organização do banco de dados do Telesoccer RP.

## Decisão atual

- O MVP usará Railway PostgreSQL como banco principal.
- Drizzle ORM será usado para schema e migrations, salvo impedimento técnico futuro.
- Supabase não será usado no MVP inicial, salvo nova decisão técnica registrada na documentação.

## Estado atual

A estrutura inicial existe em `src/schema/`, mas nenhuma tabela real foi criada ainda. O schema completo deve ser criado somente quando as etapas de autenticação, personagens, clubes e partidas forem implementadas.
