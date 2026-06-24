# 11 — Stack Técnica e Estrutura GitHub

## Princípios técnicos

- Web mobile-first primeiro.
- APK somente depois do MVP estável.
- Servidor autoritativo.
- Separar motor de jogo da interface.
- Código TypeScript.
- Banco relacional PostgreSQL.
- Deploy simples e reproduzível na Railway.
- Logs de partida desde o começo.

## Stack recomendada para o MVP

### Frontend / Fullstack web

- Next.js.
- TypeScript.
- Tailwind CSS.

### Deploy e infraestrutura

- Railway como plataforma principal de deploy.
- Railway PostgreSQL como banco principal do MVP.
- Variáveis de ambiente configuradas diretamente no serviço da Railway em produção.

### Banco de dados

- PostgreSQL.
- Drizzle ORM para schema e migrations.
- drizzle-kit para geração e execução controlada de migrations.
- `pg`/node-postgres como driver de conexão.
- `DATABASE_URL` como variável padrão de conexão.

### Autenticação futura

- Auth.js ou Better Auth será avaliado antes da implementação do login.
- Login não faz parte desta etapa.

### Fora do MVP inicial

- Supabase não será usado no MVP inicial, salvo decisão futura registrada em `docs/13_DECISION_LOG.md`.
- WebSocket/realtime ainda não será implementado nesta etapa.

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
      src/
        schema/
    shared/
    ui/
  docs/
  public/
    assets/
      scenes/
      avatars/
      cosmetics/
  tests/
  README.md
```

A pasta `supabase/` pode existir temporariamente por histórico, mas não deve orientar novas implementações do MVP sem uma nova decisão técnica.

## Packages

### apps/web

Aplicação principal web mobile-first.

Contém:

- Rotas.
- Telas.
- Componentes de página.
- Integração futura com autenticação.
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

- Schema Drizzle inicial.
- Migrations versionadas.
- Client PostgreSQL com carregamento seguro de `DATABASE_URL`.
- Tipos TypeScript inferidos do schema.
- Ponto único para evoluir o acesso ao PostgreSQL.

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
