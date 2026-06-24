# 14 — Deploy na Railway

Este documento explica o plano de deploy do Telesoccer RP na Railway.

## Decisão técnica

- Railway será a plataforma principal de deploy do MVP.
- Railway PostgreSQL será o banco principal.
- Supabase não será usado no MVP inicial, salvo decisão futura registrada no log de decisões.
- Drizzle ORM será usado para schema e migrations.
- Auth.js ou Better Auth será avaliado futuramente para autenticação.

## 1. Criar o projeto na Railway

1. Acesse o painel da Railway.
2. Crie um novo projeto.
3. Escolha a opção de deploy a partir de um repositório GitHub.
4. Selecione o repositório `SamCherri/Tele`.

## 2. Conectar GitHub

1. Autorize a Railway a acessar o GitHub, se ainda não estiver autorizado.
2. Selecione a branch usada para deploy.
3. Configure deploy automático apenas quando a branch estiver estável para isso.

## 3. Configurar o serviço Next.js

O app web fica em `apps/web`, mas o monorepo usa comandos na raiz.

Configuração recomendada inicial:

- Root directory: raiz do repositório.
- Install command: `pnpm install --frozen-lockfile`.
- Build command: `pnpm build`.
- Start command futuro: iniciar o servidor Next.js standalone gerado pelo build.

O arquivo `apps/web/next.config.mjs` usa `output: "standalone"` para facilitar execução em ambiente de deploy.

## 4. Adicionar PostgreSQL

1. Dentro do projeto Railway, adicione um serviço PostgreSQL.
2. Aguarde a criação do banco.
3. Copie a variável de conexão fornecida pela Railway.
4. Garanta que o serviço web tenha acesso à variável `DATABASE_URL`. Essa variável vem do serviço Railway PostgreSQL e deve ser configurada no painel da Railway.

## 5. Variáveis de ambiente

Configure as variáveis no painel da Railway, não em arquivo `.env` de produção:

```txt
DATABASE_URL=
AUTH_SECRET=
NEXT_PUBLIC_APP_URL=
```

Explicação:

- `DATABASE_URL`: URL de conexão do Railway PostgreSQL.
- `AUTH_SECRET`: segredo da futura autenticação. Deve ser forte e privado.
- `NEXT_PUBLIC_APP_URL`: URL pública do app, por exemplo `https://seu-app.up.railway.app`.

Para desenvolvimento local, copie `.env.example` para `.env.local` e preencha apenas se for testar integrações reais.

## 6. Migrations futuras

A migration inicial do Drizzle já existe no repositório em `packages/database/drizzle`. Ela cria as tabelas mínimas de usuários, perfis, jogadores e atributos.

O fluxo recomendado é:

1. Gerar migrations no pacote `packages/database` com `pnpm db:generate`.
2. Testar localmente contra um PostgreSQL de desenvolvimento.
3. Rodar migrations com `pnpm db:migrate` usando uma `DATABASE_URL` segura.
4. Executar migrations de produção de forma controlada, antes do deploy ou como etapa revisada de release.
5. Evitar migrations automáticas perigosas sem revisão.

A Railway poderá executar migrations em uma etapa de pre-deploy futuramente, mas isso deve ser configurado somente quando o processo de rollback e validação estiver definido.

## 7. O que esta etapa não implementa

- Login, que deve ser implementado em PR futura.
- Tela/fluxo de criação de personagem, que deve ser implementado em PR futura.
- Partidas.
- WebSocket/realtime.
- APK Android.
- Sistemas pay-to-win.
