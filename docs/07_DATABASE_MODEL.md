# 07 — Modelo Inicial de Banco de Dados

Este documento lista tabelas iniciais prováveis para o Telesoccer RP. O schema final será definido durante a implementação, validação técnica e criação das migrations.

## Decisão de banco para o MVP

- O banco principal do MVP será PostgreSQL gerenciado pela Railway.
- A variável `DATABASE_URL` será a fonte de conexão do app e das ferramentas de migration.
- Drizzle ORM será usado para declarar schema e migrations, salvo impedimento técnico futuro.
- Supabase não será usado no MVP inicial, salvo nova decisão registrada no log de decisões.
- Autenticação será avaliada futuramente com Auth.js ou Better Auth.

## Estado atual da implementação

O pacote `packages/database` agora contém o schema inicial real em Drizzle para `users`, `profiles`, `players` e `player_attributes`, além da primeira migration versionada. Esse schema prepara autenticação futura, perfil e criação de personagem, mas ainda não implementa telas ou fluxos no app.

## Tabelas já criadas nesta etapa

- users
- profiles
- players
- player_attributes

## Tabelas candidatas para fases futuras

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

## Regras aplicadas no schema inicial

- Email de usuário é único.
- `password_hash` é nullable porque a estratégia final de autenticação ainda será decidida.
- Cada usuário pode ter um perfil.
- Cada usuário pode ter um jogador atual.
- Cada jogador possui uma posição principal e ainda não possui posição secundária.
- A idade inicial padrão do jogador é 16.
- Tabelas usam timestamps `created_at` e `updated_at`.
- Relações usam foreign keys com cascade quando o registro pai é removido.

## Observação

Este modelo é a primeira base real do banco, mas ainda é mínimo. A estrutura definitiva deve considerar integridade adicional, índices, validações de domínio, performance, auditoria, segurança das rotas do servidor e regras de negócio do MVP.

## Atualização PR #5 — Uso do modelo na autenticação

O MVP agora usa as tabelas já criadas na PR #4 para o fluxo inicial:

- `users`: armazena e-mail, papel e `password_hash` gerado com bcrypt para login por credenciais.
- `profiles`: armazena o nome de exibição criado no cadastro.
- `players`: armazena o personagem inicial do usuário. A restrição única por `user_id` impede mais de um personagem atual.
- `player_attributes`: armazena os atributos iniciais gerados no servidor conforme a posição principal.

A aplicação não confia no cliente para definir `user_id`; o usuário é obtido pela sessão autenticada. A senha nunca deve ser retornada para telas ou APIs.
