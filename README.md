# Telesoccer RP

Telesoccer RP é um jogo online mobile-first de futebol RP 11vs11, pensado inicialmente como uma aplicação web responsiva e, futuramente, como um APK Android quando o produto estiver estável.

> Projeto em fase inicial: este repositório contém a estrutura base, documentação de visão e preparação técnica. O jogo completo ainda não foi implementado.

## Descrição curta

Um futebol RP online em que jogadores constroem carreira, participam de clubes, disputam campeonatos e tomam decisões simultâneas em cenas visuais durante partidas 11vs11.

## Conceito do jogo

O jogo não será um simulador de controle livre no estilo FIFA/eFootball. A experiência principal será baseada em cenas de futebol, decisões de jogadores, atributos, funções em campo, organização de clubes e narrativa de carreira.

Cada partida representa 90 minutos de futebol, mas deve durar cerca de 30 minutos reais. A ação acontece por cenas curtas, com decisões simultâneas e tempo limitado para resposta.

## Escopo do MVP

O MVP deve focar em:

- Partidas 11vs11 simplificadas por cenas.
- Goleiro como jogador real desde o início.
- Clubes com elenco, técnico, presidente e jogadores.
- Escalação com 11 titulares e 12 reservas por partida.
- Motor de partida autoritativo no servidor.
- Decisões com timer de 15 segundos.
- Penalidades automáticas para jogadores offline ou sem resposta.
- Base para carreira, estatísticas, ranking e moderação.
- Fundação técnica preparada para deploy na Railway com PostgreSQL gerenciado pela Railway.

Não fazem parte desta etapa:

- APK Android.
- Login/autenticação implementada.
- Criação de personagem implementada.
- Banco de dados com schema completo implementado.
- Motor completo de jogo.
- WebSocket/realtime implementado.
- Sistemas pay-to-win.
- Futebol de controle livre.

## Regras principais da partida

- A partida será 11vs11.
- Cada clube pode ter até 40 jogadores no elenco.
- Para cada partida, o técnico relaciona 23 jogadores: 11 titulares e 12 reservas.
- Presidente e técnico são funções separadas e não entram em campo.
- Goleiro será player real desde o começo.
- A partida representa 90 minutos, com duração real aproximada de 30 minutos.
- Cada cena terá 15 segundos para decisão.
- Jogador offline vira bot com penalidade de -30%.
- Jogador online que não responde vira bot temporário com penalidade de -15%.
- O cliente nunca calcula resultado de partida.
- O servidor deve ser autoritativo e fonte da verdade.

## Stack recomendada para o MVP

- Next.js
- TypeScript
- Tailwind CSS
- Railway como plataforma principal de deploy
- Railway PostgreSQL como banco principal do MVP
- PostgreSQL
- Drizzle ORM para schema e migrations, salvo impedimento técnico futuro
- `pg`/node-postgres para conexão com PostgreSQL
- Auth.js ou Better Auth a avaliar para autenticação
- Futuro APK com Capacitor

Supabase não será usado no MVP inicial, salvo nova decisão técnica futura registrada na documentação.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` no desenvolvimento local quando precisar conectar serviços reais.
Em produção, não dependa de arquivo `.env`: configure as variáveis diretamente no serviço da Railway.

Variáveis previstas:

- `DATABASE_URL`: URL de conexão do PostgreSQL, fornecida pelo Railway PostgreSQL.
- `AUTH_SECRET`: segredo da futura camada de autenticação.
- `NEXT_PUBLIC_APP_URL`: URL pública da aplicação web.

## Banco de dados

A base inicial do banco evoluiu do placeholder da PR #3 para um schema real em `packages/database` com Drizzle ORM e PostgreSQL.

Tabelas iniciais versionadas:

- `users`: conta base para autenticação futura.
- `profiles`: perfil público ligado ao usuário.
- `players`: personagem/atleta principal do usuário.
- `player_attributes`: atributos iniciais do atleta para uso futuro pelo motor servidor.

Scripts disponíveis na raiz:

- `pnpm db:generate`: gera migrations Drizzle a partir do schema.
- `pnpm db:migrate`: executa migrations usando `DATABASE_URL`.
- `pnpm db:push`: aplica schema diretamente em banco de desenvolvimento.
- `pnpm db:studio`: abre o Drizzle Studio.

Não há login, tela de cadastro ou tela de criação de personagem nesta etapa.

## Organização do projeto

```txt
./
  apps/web/                 Aplicação web responsiva.
  packages/game-engine/     Regras e lógica conceitual do motor de cenas.
  packages/shared/          Tipos, constantes e contratos compartilhados.
  packages/ui/              Componentes visuais reutilizáveis.
  packages/database/        Organização futura do schema e migrations com Drizzle/PostgreSQL.
  public/assets/            Assets públicos de cenas, avatares e cosméticos.
  docs/                     Documentação de produto, técnica e roadmap.
```

A pasta `supabase/` pode existir por histórico do repositório, mas não representa a estratégia do MVP inicial após a decisão por Railway + PostgreSQL.

## Documentação principal

- [Visão do jogo](docs/01_GAME_VISION.md)
- [Escopo do MVP](docs/02_MVP_SCOPE.md)
- [Motor de partidas](docs/03_MATCH_ENGINE.md)
- [Clubes, funções e elencos](docs/04_CLUBS_ROLES_SQUADS.md)
- [Carreira e legado](docs/05_CAREER_LEGACY.md)
- [Free-to-play e cosméticos](docs/06_F2P_COSMETICS.md)
- [Modelo inicial de banco](docs/07_DATABASE_MODEL.md)
- [Telas do app](docs/08_APP_SCREENS.md)
- [Administração, moderação e anti-cheat](docs/09_ADMIN_MODERATION_ANTICHEAT.md)
- [Roadmap](docs/10_ROADMAP.md)
- [Stack e GitHub](docs/11_TECH_STACK_GITHUB.md)
- [Prompt futuro para Codex](docs/12_CODEX_PROMPT.md)
- [Registro de decisões](docs/13_DECISION_LOG.md)
- [Deploy Railway](docs/14_RAILWAY_DEPLOY.md)

## Estado atual

Este projeto está na fase de fundação técnica: a aplicação web mobile-first já foi criada com Next.js, TypeScript e Tailwind CSS. Esta etapa prepara o deploy na Railway e cria o schema inicial do Railway PostgreSQL com Drizzle para usuários, perfis, jogadores e atributos. Autenticação visual, tela de cadastro, criação de personagem no app, clubes, partidas e motor de partida ainda não foram implementados.
