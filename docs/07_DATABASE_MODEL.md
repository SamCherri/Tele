# 07 — Modelo Inicial de Banco de Dados

Este documento lista tabelas iniciais prováveis para o Telesoccer RP. O schema final será definido durante a implementação, validação técnica e criação das migrations.

## Decisão de banco para o MVP

- O banco principal do MVP será PostgreSQL gerenciado pela Railway.
- A variável `DATABASE_URL` será a fonte de conexão do app e das ferramentas de migration.
- Drizzle ORM será usado para declarar schema e migrations, salvo impedimento técnico futuro.
- Supabase não será usado no MVP inicial, salvo nova decisão registrada no log de decisões.
- Autenticação será avaliada futuramente com Auth.js ou Better Auth.

## Estado atual da implementação

O pacote `packages/database` foi preparado com uma estrutura inicial para Drizzle, mas ainda não contém o schema completo do jogo. A criação das tabelas reais deve acontecer quando login, personagem, clubes e partidas forem implementados em etapas próprias.

## Lista inicial de tabelas candidatas

- users
- profiles
- players
- player_attributes
- clubs
- club_members
- matches
- match_lineups
- match_scenes
- match_decisions
- match_scene_results
- player_match_stats
- cosmetics
- inventory
- reports
- moderation_actions
- admin_logs

## users

Representa a conta base de autenticação. A implementação exata depende da escolha futura entre Auth.js e Better Auth.

## profiles

Armazena informações públicas e sociais do usuário, como nome de exibição, avatar, preferências e dados de perfil.

## players

Representa o personagem jogador criado pelo usuário, incluindo posição principal, atributos futuros, histórico e estado de carreira.

## player_attributes

Armazena atributos técnicos, físicos e mentais usados pelo motor de cenas no servidor.

## clubs

Representa clubes do jogo, com nome, identidade, presidente, técnico, status e informações administrativas.

## club_members

Relaciona jogadores e usuários aos clubes, incluindo função, status no elenco e histórico de participação.

## matches

Armazena partidas, clubes participantes, placar, status, horário, duração e dados gerais.

## match_lineups

Registra escalações, titulares, reservas e funções definidas pelo técnico para uma partida.

## match_scenes

Registra cenas de uma partida, tipo da cena, jogadores envolvidos, contexto e resultado calculado pelo servidor.

## match_decisions

Guarda decisões enviadas por jogadores em cada cena, incluindo tempo de resposta, opção escolhida e se houve uso de bot.

## match_scene_results

Guarda o resultado autoritativo calculado pelo servidor para cada cena.

## player_match_stats

Registra estatísticas individuais de uma partida, como gols, assistências, defesas e participação em cenas.

## cosmetics

Catálogo de itens cosméticos disponíveis, sem impacto competitivo.

## inventory

Itens cosméticos que cada usuário possui ou pode equipar.

## reports

Denúncias feitas por usuários contra comportamento abusivo, manipulação, fraude ou problemas de conduta.

## moderation_actions

Ações de moderação aplicadas a usuários, jogadores, clubes ou partidas.

## admin_logs

Logs de ações administrativas e eventos importantes para auditoria, moderação e segurança.

## Observação

Este modelo é apenas uma base inicial. A estrutura definitiva deve considerar integridade, índices, migrations, performance, auditoria, segurança das rotas do servidor e regras de negócio do MVP.
