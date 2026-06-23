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

Não fazem parte desta etapa:

- APK Android.
- Banco de dados implementado.
- Autenticação implementada.
- Motor completo de jogo.
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

## Stack recomendada

- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Realtime
- Supabase Storage
- Drizzle ou Prisma
- Futuro APK com Capacitor

## Organização do projeto

```txt
telesoccer-rp/
  apps/web/                 Aplicação web responsiva.
  packages/game-engine/     Regras e lógica conceitual do motor de cenas.
  packages/shared/          Tipos, constantes e contratos compartilhados.
  packages/ui/              Componentes visuais reutilizáveis.
  packages/database/        Organização futura do schema e migrations.
  public/assets/            Assets públicos de cenas, avatares e cosméticos.
  supabase/                 Configurações futuras do Supabase.
  tests/                    Testes automatizados futuros.
  docs/                     Documentação de produto, técnica e roadmap.
```

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

## Estado atual

Este projeto está na fase de documentação e organização inicial. As próximas etapas devem criar a aplicação web, configurar ferramentas de desenvolvimento e iniciar o MVP com autenticação, personagem, clubes e motor de cenas.
