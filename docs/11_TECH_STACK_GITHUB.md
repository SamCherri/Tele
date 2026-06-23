# 11 — Stack Técnica e Estrutura GitHub

## Princípios técnicos

- Web mobile-first primeiro.
- APK somente depois do MVP estável.
- Servidor autoritativo.
- Separar motor de jogo da interface.
- Código TypeScript.
- Banco relacional.
- Logs de partida desde o começo.

## Stack recomendada

### Frontend / Fullstack web

- Next.js.
- TypeScript.
- Tailwind CSS.

### Backend inicial

- Supabase.
- PostgreSQL.
- Supabase Auth.
- Supabase Realtime.
- Supabase Storage.
- Edge Functions ou rotas de servidor para lógica sensível.

### Futuro APK

- Capacitor.

Motivo: o projeto começa web mobile-first. Capacitor permite empacotar uma aplicação web como app Android/iOS depois, reduzindo retrabalho.

## Regra crítica de arquitetura

O motor de partida não deve ficar misturado com componentes visuais.

Separação recomendada:

- UI mostra cenas.
- Cliente envia decisão.
- Servidor valida.
- Motor calcula.
- Banco grava.
- Cliente recebe resultado.

## Estrutura sugerida do repositório

```txt
telesoccer-rp/
  apps/
    web/
  packages/
    game-engine/
    database/
    shared/
    ui/
  docs/
  supabase/
    migrations/
    functions/
  public/
    assets/
      scenes/
      avatars/
      cosmetics/
  tests/
  README.md
  GAME_DESIGN.md
  MVP_SCOPE.md
  MATCH_ENGINE.md
  DATABASE_SCHEMA.md
  ROADMAP.md
  CODEX_PROMPT.md
```

## Packages

### apps/web

Aplicação principal web mobile-first.

Contém:

- Rotas.
- Telas.
- Componentes de página.
- Integração com autenticação.
- Consumo de APIs.

### packages/game-engine

Motor de cálculo.

Contém:

- Tipos de cena.
- Decisões.
- Fórmulas.
- Validação de resultado.
- Testes unitários do cálculo.

### packages/database

Contém:

- Tipos de banco.
- Queries compartilhadas.
- Schemas.
- Migrations, se aplicável.

### packages/shared

Contém:

- Tipos TypeScript compartilhados.
- Constantes.
- Enums.
- Utilitários.

### packages/ui

Contém:

- Botões.
- Cards.
- Modal.
- Layout mobile.
- Componentes visuais reaproveitáveis.

## Branches

- main: versão estável.
- develop: desenvolvimento integrado.
- feature/*: novas funcionalidades.
- fix/*: correções.

## Commits

Padrão recomendado:

- feat: nova funcionalidade.
- fix: correção.
- docs: documentação.
- refactor: refatoração.
- test: testes.
- chore: tarefas internas.

## Testes prioritários

- Cálculo de cena.
- Penalidade de bot offline.
- Penalidade de timeout.
- Validação de decisão.
- Substituições.
- Permissões de técnico/presidente.
- Segurança de resultado no servidor.
